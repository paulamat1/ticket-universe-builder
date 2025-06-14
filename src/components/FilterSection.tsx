
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
    <div className="bg-[#1a1c2e] border border-gray-600 rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-2 mb-3">
        <Filter className="h-4 w-4 text-[#e49755]" />
        <h3 className="text-md font-semibold text-white">Filter Events</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Location Filter */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-white flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>Location</span>
          </label>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="bg-[#2a2d42] border-gray-600 text-white">
              <SelectValue placeholder="All locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category Filter */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-white flex items-center space-x-1">
            <Tag className="h-3 w-3" />
            <span>Category</span>
          </label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="bg-[#2a2d42] border-gray-600 text-white">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Filter */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-white flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>Date</span>
          </label>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-[#2a2d42] border-gray-600 text-white hover:bg-[#3a3d52]",
                  !selectedDate && "text-gray-400"
                )}
              >
                <Calendar className="mr-2 h-3 w-3" />
                {selectedDate ? format(selectedDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
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

      {/* Clear Filters */}
      {(selectedLocation !== 'all' || selectedCategory !== 'all' || selectedDate) && (
        <div className="mt-3 pt-3 border-t border-gray-600">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#2a2d42] border-gray-600 text-white hover:bg-[#3a3d52]"
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
  );
};

export default FilterSection;
