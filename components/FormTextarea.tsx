'use client'

import React from 'react'

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  required?: boolean
}

export default function FormTextarea({
  label,
  error,
  required,
  className = '',
  id,
  rows = 4,
  ...props
}: FormTextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label
        htmlFor={textareaId}
        className="block text-[14px] font-bold text-[#111827] mb-2 flex items-center gap-1 select-none"
      >
        {label}
        {required && <span className="text-[#FF2D3F]">*</span>}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        className={`w-full px-4 py-3.5 text-[15px] font-medium bg-white text-[#111827] border rounded-[14px] transition-all duration-200 placeholder:text-gray-400 outline-none resize-y
          ${
            error
              ? 'border-[#FF2D3F] focus:ring-1 focus:ring-[#FF2D3F] focus:border-[#FF2D3F]'
              : 'border-gray-200 focus:border-[#FF2D3F] focus:ring-1 focus:ring-[#FF2D3F]'
          }`}
        required={required}
        {...props}
      />
      {error && (
        <span className="text-[12px] font-bold text-[#FF2D3F] mt-1.5 ml-1">
          {error}
        </span>
      )}
    </div>
  )
}
