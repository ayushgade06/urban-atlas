'use client'

import React from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  required?: boolean
  helperText?: string
}

export default function FormInput({
  label,
  error,
  required,
  helperText,
  className = '',
  id,
  type = 'text',
  ...props
}: FormInputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label
        htmlFor={inputId}
        className="block text-[14px] font-bold text-[#111827] mb-2 flex items-center gap-1 select-none"
      >
        {label}
        {required && <span className="text-[#FF2D3F]">*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        className={`w-full px-4 py-3.5 text-[15px] font-medium bg-white text-[#111827] border rounded-[14px] transition-all duration-200 placeholder:text-gray-400 outline-none
          ${
            error
              ? 'border-[#FF2D3F] focus:ring-1 focus:ring-[#FF2D3F] focus:border-[#FF2D3F]'
              : 'border-gray-200 focus:border-[#FF2D3F] focus:ring-1 focus:ring-[#FF2D3F]'
          }`}
        required={required}
        {...props}
      />
      {error ? (
        <span className="text-[12px] font-bold text-[#FF2D3F] mt-1.5 ml-1">
          {error}
        </span>
      ) : helperText ? (
        <span className="text-[12px] font-semibold text-[#6B7280] mt-1.5 ml-1">
          {helperText}
        </span>
      ) : null}
    </div>
  )
}
