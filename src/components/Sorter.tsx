
import React from "react";

interface SorterProps {
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string | null) => void;
  className?: string; 
}

const Sorter: React.FC<SorterProps> = ({
  options,
  selectedOption,
  onSelectOption,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectOption(event.target.value === "none" ? null : event.target.value);
  };

  return (
    <div className={`sorter ${className}`}>
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={selectedOption || "none"}
        onChange={handleChange}
      >
        <option value="none">None</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorter;
