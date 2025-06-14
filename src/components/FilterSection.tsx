
import React, { useState } from 'react';
import { Calendar, MapPin, Tag, Filter } from 'lucide-react';
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

  return (
    <div className="bg-[#111] border border-[#333] rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-4 w-4 text-[#00ff88]" />
        <h3 className="text-lg font-semibold text-white">Filter Events</h3>
      </div>
      
      <div className="flex-1 flex flex-col justify-center space-y-6">
        {/* Location Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-[#00ff88]" />
            <span>Location</span>
          </label>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="bg-[#1a1a1a] border-[#333] text-white hover:bg-[#2a2a2a]">
              <SelectValue placeholder="All locations" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#333]">
              <SelectItem value="all" className="text-white hover:bg-[#2a2a2a]">All locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location} className="text-white hover:bg-[#2a2a2a]">
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white flex items-center space-x-2">
            <Tag className="h-4 w-4 text-[#00ff88]" />
            <span>Category</span>
          </label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="bg-[#1a1a1a] border-[#333] text-white hover:bg-[#2a2a2a]">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#333]">
              <SelectItem value="all" className="text-white hover:bg-[#2a2a2a]">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="text-white hover:bg-[#2a2a2a]">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-[#00ff88]" />
            <span>Date</span>
          </label>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-[#1a1a1a] border-[#333] text-white hover:bg-[#2a2a2a]",
                  !selectedDate && "text-gray-400"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP") : "Select date"}
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

        {/* Clear Filters */}
        {(selectedLocation !== 'all' || selectedCategory !== 'all' || selectedDate) && (
          <div className="pt-4 border-t border-[#333]">
            <Button
              variant="outline"
              size="sm"
              className="bg-[#1a1a1a] border-[#333] text-white hover:bg-[#2a2a2a] w-full"
              onClick={() => {
                onLocationChange('all');
                onCategoryChange('all');
                onDateChange(undefined);
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
