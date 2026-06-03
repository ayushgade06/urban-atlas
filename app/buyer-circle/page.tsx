'use client'

import React, { useState } from 'react'
import FormWrapper from '@/components/FormWrapper'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import FormMultiSelect from '@/components/FormMultiSelect'
import SuccessMessage from '@/components/SuccessMessage'
import { Loader2 } from 'lucide-react'

const LOCALITIES = [
  'Gomti Nagar',
  'Gomti Nagar Extension',
  'Sushant Golf City',
  'Vrindavan Yojana',
  'Janakipuram',
  'Janakipuram Extension',
  'Aashiyana',
  'LDA Colony',
  'Awadh Vihar Yojana',
]

const BUDGET_OPTIONS = [
  'Under ₹50L',
  '₹50L–₹1Cr',
  '₹1Cr–₹2Cr',
  '₹2Cr–₹5Cr',
  '₹5Cr+',
]

const PLOT_SIZE_OPTIONS = [
  'Under 1000 Sq Ft',
  '1000–1500 Sq Ft',
  '1500–2000 Sq Ft',
  '2000–3000 Sq Ft',
  '3000+ Sq Ft',
]

const PURPOSE_OPTIONS = [
  'Self Use',
  'Investment',
  'Builder Development',
  'Not Sure Yet',
]

const TIMELINE_OPTIONS = [
  'Immediately',
  'Within 3 Months',
  'Within 6 Months',
  'Within 12 Months',
  'Just Exploring',
]

export default function BuyerCirclePage() {
  const [form, setForm] = useState({
    fullName: '',
    whatsapp: '',
    preferredLocality: [] as string[],
    budgetRange: '',
    plotSizeRequirement: '',
    purchasePurpose: '',
    expectedPurchaseTimeline: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleLocalityChange = (selected: string[]) => {
    setForm((prev) => ({ ...prev, preferredLocality: selected }))
    if (errors.preferredLocality) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.preferredLocality
        return next
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required'
    
    const cleanPhone = form.whatsapp.replace(/\D/g, '')
    if (!cleanPhone) {
      newErrors.whatsapp = 'WhatsApp number is required'
    } else if (cleanPhone.length !== 10) {
      newErrors.whatsapp = 'WhatsApp number must be a valid 10-digit Indian number'
    }

    if (form.preferredLocality.length === 0) {
      newErrors.preferredLocality = 'Please select at least one preferred locality'
    }

    if (!form.budgetRange) newErrors.budgetRange = 'Budget Range is required'
    if (!form.purchasePurpose) newErrors.purchasePurpose = 'Purchase Purpose is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/buyer-circle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          whatsapp: form.whatsapp.replace(/\D/g, ''),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to join Buyer Circle. Please try again.')
      }

      setIsSuccess(true)
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <FormWrapper
        label="Success"
        headline="Welcome to Buyer Circle!"
        subheadline="Your buyer preferences have been saved."
      >
        <SuccessMessage
          title="Onboarding Complete!"
          message="You are now part of the Urban Atlas Private Buyer Circle. We'll send you off-market or newly listed verified plot alerts matching your criteria directly on WhatsApp."
          whatsappText="Hi Urban Atlas, I just joined the Buyer Circle and want to connect."
        />
      </FormWrapper>
    )
  }

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '910000000000'
  const waDirectUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    'Hi Urban Atlas, I want to join the Buyer Circle'
  )}`

  return (
    <FormWrapper
      label="Exclusive Access"
      headline="Join Buyer Circle"
      subheadline="Receive selected plot opportunities matching your requirements directly on your WhatsApp."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormInput
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
          error={errors.fullName}
          disabled={isSubmitting}
        />

        <FormInput
          label="WhatsApp Number"
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleInputChange}
          placeholder="e.g. +91 99999 99999"
          required
          error={errors.whatsapp}
          disabled={isSubmitting}
        />

        <FormMultiSelect
          label="Preferred Localities"
          options={LOCALITIES}
          selectedValues={form.preferredLocality}
          onChange={handleLocalityChange}
          required
          error={errors.preferredLocality}
        />

        <FormSelect
          label="Budget Range"
          name="budgetRange"
          value={form.budgetRange}
          onChange={handleInputChange}
          options={BUDGET_OPTIONS}
          placeholder="Select budget limit"
          required
          error={errors.budgetRange}
          disabled={isSubmitting}
        />

        <FormSelect
          label="Plot Size Requirement"
          name="plotSizeRequirement"
          value={form.plotSizeRequirement}
          onChange={handleInputChange}
          options={PLOT_SIZE_OPTIONS}
          placeholder="Select plot dimensions (optional)"
          error={errors.plotSizeRequirement}
          disabled={isSubmitting}
        />

        <FormSelect
          label="Purchase Purpose"
          name="purchasePurpose"
          value={form.purchasePurpose}
          onChange={handleInputChange}
          options={PURPOSE_OPTIONS}
          placeholder="What is your purpose of purchase?"
          required
          error={errors.purchasePurpose}
          disabled={isSubmitting}
        />

        <FormSelect
          label="Expected Purchase Timeline"
          name="expectedPurchaseTimeline"
          value={form.expectedPurchaseTimeline}
          onChange={handleInputChange}
          options={TIMELINE_OPTIONS}
          placeholder="When are you looking to buy? (optional)"
          error={errors.expectedPurchaseTimeline}
          disabled={isSubmitting}
        />

        {submitError && (
          <div className="bg-[#FFF1F3] border border-[#FF2D3F]/10 rounded-[14px] p-4 text-[#FF2D3F] text-[13px] font-bold">
            {submitError}
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FF2D3F] hover:bg-[#E81F34] disabled:bg-[#FF2D3F]/60 text-white rounded-[14px] py-4 text-[15px] font-extrabold transition-all duration-200 premium-shadow select-none cursor-pointer flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining Buyer Circle...
              </>
            ) : (
              'Join Buyer Circle'
            )}
          </button>
          
          <p className="text-center text-[12px] font-bold text-[#6B7280]">
            🔒 No spam. Only relevant plot opportunities on WhatsApp.
          </p>
        </div>

        {/* WhatsApp Sub CTA */}
        <div className="text-center border-t border-gray-100 pt-5">
          <p className="text-[13px] font-semibold text-[#4B5563]">
            Prefer WhatsApp?{' '}
            <a
              href={waDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2D3F] hover:underline underline-offset-4 font-bold"
            >
              Send us a message →
            </a>
          </p>
        </div>
      </form>
    </FormWrapper>
  )
}
