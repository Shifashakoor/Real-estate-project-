import React from 'react';

interface CustomInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string; 
  register: any;      
  validation?: any;   
  errors: any;       
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  label, 
  type, 
  name, 
  placeholder,
  register, 
  validation, 
  errors 
}) => {
  return (
    <div className="w-full">
      <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-0.5">
        {label}
      </label>
      
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        
        className={`w-full p-3 bg-white border rounded-xl outline-none transition-all text-sm shadow-sm
          ${errors[name] 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-gray-200 focus:border-black'
          }`}
      />
      <div className="min-h-[18px] mt-1"> 
        {errors[name] && (
          <span className="text-red-500 text-[10px] font-medium block">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomInput;