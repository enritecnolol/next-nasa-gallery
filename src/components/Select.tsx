import { ChangeEvent } from "react";

interface SelectProps {
  label?: string;
  options: { label: string; value: any }[];
  value?: number | string;
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  emptyOption?: boolean
}

export default function Select({
  label,
  value,
  onChange,
  options,
  name,
  emptyOption = false
}: SelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="py-3 px-2 pr-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {emptyOption ? <option></option> : null}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
