'use client'

import React from 'react'

interface FormCheckboxProps {
  label: string
  options: string[]
  selectedValues: string[]
  onChange: (selected: string[]) => void
  error?: string
  className?: string
  disabled?: boolean
}

export default function FormCheckbox({
  label,
  options,
  selectedValues,
  onChange,
  error,
  className = '',
  disabled = false,
}: FormCheckboxProps) {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value))
    } else {
      onChange([...selectedValues, value])
    }
  }

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="block text-[14px] font-bold text-[#111827] mb-3 select-none">
        {label}
      </label>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 lg:grid lg:grid-cols-3">
        {options.map((option) => {
          const isChecked = selectedValues.includes(option)
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleToggle(option)}
              disabled={disabled}
              className={`w-full sm:w-auto lg:w-full flex items-center gap-3 p-3.5 rounded-[14px] border text-left transition-all duration-200 cursor-pointer select-none
                ${
                  isChecked
                    ? 'border-[#FF2D3F]/40 bg-[#FFF1F3]/30 text-[#111827] shadow-[0px_4px_12px_rgba(255,45,63,0.03)]'
                    : 'border-gray-200 bg-white text-[#4B5563] hover:border-gray-300'
                } ${
                  disabled
                    ? 'opacity-65 cursor-not-allowed pointer-events-none'
                    : ''
                }`}
            >
              {/* Custom checkbox box */}
              <div
                className={`w-[18px] h-[18px] rounded-[5px] flex items-center justify-center transition-all duration-200 border
                  ${
                    isChecked
                      ? 'bg-[#FF2D3F] border-[#FF2D3F]'
                      : 'bg-white border-gray-300'
                  }`}
              >
                {isChecked && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="text-[13px] font-bold leading-none">{option}</span>
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
