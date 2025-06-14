
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
    <div className="bg-[#111] border border-[#222] rounded-xl p-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#00ff88]/10 rounded-lg flex items-center justify-center">
            <Filter className="h-4 w-4 text-[#00ff88]" />
          </div>
          <h3 className="text-lg font-semibold text-white">Filter Events</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white h-8 px-2"
            onClick={() => {
              onLocationChange('all');
              onCategoryChange('all');
              onDateChange(undefined);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Filters Grid */}
      <div className="space-y-4">
        {/* Location Filter */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-[#00ff88]" />
            <label className="text-sm font-medium text-white">Location</label>
          </div>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="bg-[#1a1a1a] border-[#333] text-white hover:border-[#00ff88]/50 transition-colors h-11">
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
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-[#00ff88]" />
            <label className="text-sm font-medium text-white">Category</label>
          </div>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="bg-[#1a1a1a] border-[#333] text-white hover:border-[#00ff88]/50 transition-colors h-11">
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
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-[#00ff88]" />
            <label className="text-sm font-medium text-white">Date</label>
          </div>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-11 bg-[#1a1a1a] border-[#333] text-white hover:bg-[#2a2a2a] hover:border-[#00ff88]/50 transition-colors",
                  !selectedDate && "text-gray-400"
                )}
              >
                <Calendar className="mr-3 h-4 w-4" />
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

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mt-6 pt-4 border-t border-[#333]">
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
