import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        className="py-2.5 px-2 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
}
