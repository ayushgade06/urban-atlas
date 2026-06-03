'use client'

import React from 'react'

interface FormMultiSelectProps {
  label: string
  options: string[]
  selectedValues: string[]
  onChange: (selected: string[]) => void
  error?: string
  required?: boolean
  className?: string
  disabled?: boolean
}

export default function FormMultiSelect({
  label,
  options,
  selectedValues,
  onChange,
  error,
  required,
  className = '',
  disabled = false,
}: FormMultiSelectProps) {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value))
    } else {
      onChange([...selectedValues, value])
    }
  }

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="block text-[14px] font-bold text-[#111827] mb-3 flex items-center gap-1 select-none">
        {label}
        {required && <span className="text-[#FF2D3F]">*</span>}
      </label>
      
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => {
          const isSelected = selectedValues.includes(option)
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleToggle(option)}
              disabled={disabled}
              className={`px-5 py-3 rounded-full text-[13px] font-bold border transition-all duration-200 cursor-pointer select-none
                ${
                  isSelected
                    ? 'bg-[#FF2D3F] border-[#FF2D3F] text-white shadow-[0px_6px_16px_rgba(255,45,63,0.15)]'
                    : 'bg-white border-gray-200 text-[#4B5563] hover:border-[#FF2D3F] hover:text-[#FF2D3F]'
                } ${
                  disabled
                    ? 'opacity-65 cursor-not-allowed pointer-events-none'
                    : ''
                }`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {error && (
        <span className="text-[12px] font-bold text-[#FF2D3F] mt-2 ml-1">
          {error}
        </span>
      )}
    </div>
  )
}
