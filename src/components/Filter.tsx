
import React from "react";

interface FilterProps {
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string | null) => void;
  className?: string; 
}

const Filter: React.FC<FilterProps> = ({
  options,
  selectedOption,
  onSelectOption,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectOption(event.target.value === "all" ? null : event.target.value);
  };

  return (
    <div className={`filter ${className}`}>
      <label htmlFor="filter">Filter by:</label>
      <select
        id="filter"
        value={selectedOption || "all"}
        onChange={handleChange}
      >
        <option value="all">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
