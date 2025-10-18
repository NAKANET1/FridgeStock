import React from "react";

type TextInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  inputClass?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  inputClass = "", // デフォルト空
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-500 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border border-gray-300 rounded-lg p-8 focus:ring-2 focus:ring-blue-400 focus:outline-none ${inputClass}`}
      />
    </div>
  );
};

export default TextInput;
