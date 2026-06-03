'use client'

import React from 'react'

interface Option {
  value: string
  label: string
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: Option[] | string[]
  error?: string
  required?: boolean
  placeholder?: string
}

export default function FormSelect({
  label,
  options,
  error,
  required,
  placeholder = 'Select an option',
  className = '',
  id,
  ...props
}: FormSelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label
        htmlFor={selectId}
        className="block text-[14px] font-bold text-[#111827] mb-2 flex items-center gap-1 select-none"
      >
        {label}
        {required && <span className="text-[#FF2D3F]">*</span>}
      </label>
      <div className="relative">
        <select
          id={selectId}
          className={`w-full px-4 py-3.5 text-[15px] font-medium bg-white text-[#111827] border rounded-[14px] appearance-none transition-all duration-200 outline-none
            ${
              error
                ? 'border-[#FF2D3F] focus:ring-1 focus:ring-[#FF2D3F] focus:border-[#FF2D3F]'
                : 'border-gray-200 focus:border-[#FF2D3F] focus:ring-1 focus:ring-[#FF2D3F]'
            }`}
          required={required}
          defaultValue=""
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => {
            const val = typeof opt === 'string' ? opt : opt.value
            const lbl = typeof opt === 'string' ? opt : opt.label
            return (
              <option key={val} value={val} className="text-[#111827]">
                {lbl}
              </option>
            )
          })}
        </select>
        {/* Custom Chevron icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
      {error && (
        <span className="text-[12px] font-bold text-[#FF2D3F] mt-1.5 ml-1">
          {error}
        </span>
      )}
    </div>
  )
}
