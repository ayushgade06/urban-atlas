'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Phone, X, Check, Loader2 } from 'lucide-react'

export default function CallBackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  
  // Validation errors
  const [errors, setErrors] = useState({ name: '', mobile: '' })

  const widgetRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside on desktop
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const validate = () => {
    let valid = true
    const newErrors = { name: '', mobile: '' }

    if (!name.trim()) {
      newErrors.name = 'Name is required'
      valid = false
    }

    const cleanMobile = mobile.replace(/\D/g, '')
    if (!cleanMobile) {
      newErrors.mobile = 'Mobile number is required'
      valid = false
    } else if (cleanMobile.length !== 10) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          mobile: mobile.replace(/\D/g, ''),
        }),
      })

      if (!res.ok) {
        throw new Error('Something went wrong. Please try again.')
      }

      setIsSuccess(true)
      setName('')
      setMobile('')
    } catch (err: any) {
      setSubmitError(err.message || 'Submission failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    // Delay resetting states so transitions finish
    setTimeout(() => {
      setIsSuccess(false)
      setSubmitError('')
      setErrors({ name: '', mobile: '' })
    }, 300)
  }

  return (
    <div ref={widgetRef} className="fixed z-50 bottom-6 right-6 font-sans">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#FF2D3F] hover:bg-[#E81F34] text-white rounded-full p-4 md:px-5 md:py-3.5 shadow-[0px_8px_30px_rgba(255,45,63,0.3)] hover:shadow-[0px_10px_35px_rgba(255,45,63,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer font-bold text-sm z-50 select-none"
        >
          <Phone className="w-4 h-4 fill-current animate-pulse" />
          <span className="hidden sm:inline">Request a Call Back</span>
        </button>
      )}

      {/* Pop-up Card */}
      {isOpen && (
        <div
          className="bg-white border border-[#F3F4F6] sm:rounded-[24px] rounded-t-[24px] shadow-[0px_15px_50px_rgba(0,0,0,0.1)] p-6 z-50 w-full sm:w-[350px]
            fixed sm:bottom-24 sm:right-6 bottom-0 left-0 sm:left-auto max-h-[90vh] flex flex-col justify-between overflow-y-auto transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 border-b border-[#F3F4F6] pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FFF1F3] flex items-center justify-center text-[#FF2D3F]">
                <Phone className="w-4.5 h-4.5 fill-current" />
              </div>
              <h4 className="text-[15px] font-extrabold text-[#111827]">Request a Call Back</h4>
            </div>
            <button
              onClick={handleClose}
              className="text-[#6B7280] hover:text-[#111827] transition-colors p-1 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-[12px] font-medium text-[#4B5563] leading-relaxed">
                Leave your details below and an Urban Atlas manager will get back to you shortly.
              </p>

              {/* Name Field */}
              <div className="flex flex-col">
                <label className="text-[12px] font-bold text-[#111827] mb-1.5">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ayush Gade"
                  className={`w-full px-3.5 py-2.5 text-[14px] bg-white text-[#111827] border rounded-[12px] outline-none transition-colors
                    ${
                      errors.name
                        ? 'border-[#FF2D3F] focus:border-[#FF2D3F]'
                        : 'border-gray-200 focus:border-[#FF2D3F]'
                    }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className="text-[11px] font-bold text-[#FF2D3F] mt-1 ml-1">{errors.name}</span>
                )}
              </div>

              {/* Mobile Field */}
              <div className="flex flex-col">
                <label className="text-[12px] font-bold text-[#111827] mb-1.5">Mobile Number</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="10-digit number"
                  className={`w-full px-3.5 py-2.5 text-[14px] bg-white text-[#111827] border rounded-[12px] outline-none transition-colors
                    ${
                      errors.mobile
                        ? 'border-[#FF2D3F] focus:border-[#FF2D3F]'
                        : 'border-gray-200 focus:border-[#FF2D3F]'
                    }`}
                  disabled={isSubmitting}
                />
                {errors.mobile && (
                  <span className="text-[11px] font-bold text-[#FF2D3F] mt-1 ml-1">{errors.mobile}</span>
                )}
              </div>

              {submitError && (
                <div className="text-[12px] font-bold text-[#FF2D3F] bg-[#FFF1F3] p-2.5 rounded-lg border border-[#FF2D3F]/10">
                  {submitError}
                </div>
              )}

              {/* CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#FF2D3F] hover:bg-[#E81F34] disabled:bg-[#FF2D3F]/60 text-white rounded-[12px] py-3 text-[14px] font-extrabold transition-all duration-200 shadow-[0px_4px_15px_rgba(255,45,63,0.15)] cursor-pointer mt-1 select-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Requesting...
                  </>
                ) : (
                  'Request Call Back'
                )}
              </button>
            </form>
          ) : (
            /* Success View */
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-3 select-none">
                <Check className="w-6 h-6" />
              </div>
              <h5 className="text-[15px] font-extrabold text-[#111827] mb-1">Request Received</h5>
              <p className="text-[12px] font-semibold text-[#4B5563] mb-5 leading-relaxed">
                We will call you back within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-[#111827] hover:bg-black text-white rounded-[12px] py-2.5 text-[13px] font-bold transition-all cursor-pointer select-none"
              >
                Done
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
