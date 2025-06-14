
import React, { useState } from 'react';
import { Calendar, MapPin, Tag, Filter, X } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface FilterSectionProps {
  locations: string[];
  categories: string[];
  selectedLocation: string;
  selectedCategory: string;
  selectedDate: Date | undefined;
  onLocationChange: (location: string) => void;
  onCategoryChange: (category: string) => void;
  onDateChange: (date: Date | undefined) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  locations,
  categories,
  selectedLocation,
  selectedCategory,
  selectedDate,
  onLocationChange,
  onCategoryChange,
  onDateChange
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const hasActiveFilters = selectedLocation !== 'all' || selectedCategory !== 'all' || selectedDate;

  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-4 w-full">
      {/* Single row layout for thin design */}
      <div className="flex items-center justify-between gap-6">
        {/* Header */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <div className="w-8 h-8 bg-[#00ff88]/10 rounded-lg flex items-center justify-center">
            <Filter className="h-4 w-4 text-[#00ff88]" />
          </div>
          <h3 className="text-lg font-semibold text-white">Filter Events</h3>
        </div>
        
        {/* Filters in a row */}
        <div className="flex items-center gap-4 flex-1">
          {/* Location Filter */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <MapPin className="h-4 w-4 text-[#00ff88] flex-shrink-0" />
            <Select value={selectedLocation} onValueChange={onLocationChange}>
              <SelectTrigger className="bg-[#1a1a1a] border-[#333] text-white hover:border-[#00ff88]/50 transition-colors h-9 text-sm">
                <SelectValue placeholder="All locations" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-[#333]">
                <SelectItem value="all" className="text-white hover:bg-[#2a2a2a] focus:bg-[#2a2a2a]">
                  All locations
                </SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location} className="text-white hover:bg-[#2a2a2a] focus:bg-[#2a2a2a]">
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Tag className="h-4 w-4 text-[#00ff88] flex-shrink-0" />
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger className="bg-[#1a1a1a] border-[#333] text-white hover:border-[#00ff88]/50 transition-colors h-9 text-sm">
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-[#333]">
                <SelectItem value="all" className="text-white hover:bg-[#2a2a2a] focus:bg-[#2a2a2a]">
                  All categories
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-[#2a2a2a] focus:bg-[#2a2a2a]">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Filter */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Calendar className="h-4 w-4 text-[#00ff88] flex-shrink-0" />
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-9 text-sm bg-[#1a1a1a] border-[#333] text-white hover:bg-[#2a2a2a] hover:border-[#00ff88]/50 transition-colors",
                    !selectedDate && "text-gray-400"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "MMM d, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-[#1a1a1a] border-[#333]" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    onDateChange(date);
                    setIsCalendarOpen(false);
                  }}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Clear all filters button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white h-9 px-3 flex-shrink-0"
            onClick={() => {
              onLocationChange('all');
              onCategoryChange('all');
              onDateChange(undefined);
            }}
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mt-3 pt-3 border-t border-[#333]">
          <div className="flex flex-wrap gap-2">
            {selectedLocation !== 'all' && (
              <div className="inline-flex items-center space-x-1 bg-[#00ff88]/10 text-[#00ff88] px-3 py-1 rounded-full text-sm">
                <span>{selectedLocation}</span>
                <button
                  onClick={() => onLocationChange('all')}
                  className="hover:bg-[#00ff88]/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedCategory !== 'all' && (
              <div className="inline-flex items-center space-x-1 bg-[#00ff88]/10 text-[#00ff88] px-3 py-1 rounded-full text-sm">
                <span>{selectedCategory}</span>
                <button
                  onClick={() => onCategoryChange('all')}
                  className="hover:bg-[#00ff88]/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedDate && (
              <div className="inline-flex items-center space-x-1 bg-[#00ff88]/10 text-[#00ff88] px-3 py-1 rounded-full text-sm">
                <span>{format(selectedDate, "MMM d")}</span>
                <button
                  onClick={() => onDateChange(undefined)}
                  className="hover:bg-[#00ff88]/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
