"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ProjectFiltersProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeFilter,
  onFilterChange
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((category) => (
        <motion.div
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeFilter === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange(category)}
            className={
              activeFilter === category
                ? 'bg-[#ff7979] hover:bg-[#ff5757] text-white border-[#ff7979]'
                : 'border-[#ff7979]/30 dark:border-[#342e2e]/30 hover:border-[#ff7979] dark:hover:border-[#342e2e] hover:text-[#ff7979] dark:hover:text-[#342e2e]'
            }
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};