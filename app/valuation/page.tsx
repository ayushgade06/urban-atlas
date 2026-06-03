'use client'

import React, { useState } from 'react'
import FormWrapper from '@/components/FormWrapper'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import FormCheckbox from '@/components/FormCheckbox'
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

const PLOT_FEATURES = [
  'Corner Plot',
  'Park Facing',
  'Wide Road',
  'East Facing',
  'North Facing',
]

export default function ValuationPage() {
  const [form, setForm] = useState({
    ownerName: '',
    whatsapp: '',
    locality: '',
    sectorBlock: '',
    plotArea: '',
    plotFeatures: [] as string[],
    askingPrice: '',
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

  const handleFeaturesChange = (selected: string[]) => {
    setForm((prev) => ({ ...prev, plotFeatures: selected }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!form.ownerName.trim()) newErrors.ownerName = 'Owner Name is required'
    
    const cleanPhone = form.whatsapp.replace(/\D/g, '')
    if (!cleanPhone) {
      newErrors.whatsapp = 'WhatsApp number is required'
    } else if (cleanPhone.length !== 10) {
      newErrors.whatsapp = 'WhatsApp number must be a valid 10-digit Indian number'
    }

    if (!form.locality) newErrors.locality = 'Locality is required'
    if (!form.sectorBlock.trim()) newErrors.sectorBlock = 'Sector / Block is required'
    
    const areaNum = Number(form.plotArea)
    if (!form.plotArea) {
      newErrors.plotArea = 'Plot Area is required'
    } else if (isNaN(areaNum) || areaNum <= 0) {
      newErrors.plotArea = 'Plot Area must be a positive number'
    }

    if (form.askingPrice) {
      const priceNum = Number(form.askingPrice)
      if (isNaN(priceNum) || priceNum <= 0) {
        newErrors.askingPrice = 'Expected Price must be a positive number'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          whatsapp: form.whatsapp.replace(/\D/g, ''),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to submit valuation request. Please try again.')
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
        headline="Valuation Requested!"
        subheadline="Your valuation request is in progress."
      >
        <SuccessMessage
          title="Request Submitted!"
          message="Your plot valuation request was successfully logged. We will analyze recent registry benchmarks and neighborhood transactions to send your valuation assessment within 24 hours on WhatsApp."
          whatsappText="Hi Urban Atlas, I just requested a plot valuation. Let's connect."
        />
      </FormWrapper>
    )
  }

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '910000000000'
  const waDirectUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    'Hi Urban Atlas, I want a free valuation for my plot'
  )}`

  return (
    <FormWrapper
      label="Market Assessment"
      headline="Get Free Plot Valuation"
      subheadline="Receive a complimentary market assessment report from Urban Atlas within 24 hours."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormInput
          label="Owner Name"
          name="ownerName"
          value={form.ownerName}
          onChange={handleInputChange}
          placeholder="Enter owner full name"
          required
          error={errors.ownerName}
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

        <FormSelect
          label="Locality"
          name="locality"
          value={form.locality}
          onChange={handleInputChange}
          options={LOCALITIES}
          placeholder="Select Locality"
          required
          error={errors.locality}
          disabled={isSubmitting}
        />

        <FormInput
          label="Sector / Block"
          name="sectorBlock"
          value={form.sectorBlock}
          onChange={handleInputChange}
          placeholder="e.g. Sector A, LDA Block B"
          required
          error={errors.sectorBlock}
          disabled={isSubmitting}
        />

        <FormInput
          label="Plot Area (Sq Ft)"
          name="plotArea"
          value={form.plotArea}
          onChange={handleInputChange}
          placeholder="e.g. 1500"
          type="number"
          required
          error={errors.plotArea}
          disabled={isSubmitting}
        />

        <FormCheckbox
          label="Plot Features"
          options={PLOT_FEATURES}
          selectedValues={form.plotFeatures}
          onChange={handleFeaturesChange}
          disabled={isSubmitting}
        />

        <FormInput
          label="What price are you expecting? (optional)"
          name="askingPrice"
          value={form.askingPrice}
          onChange={handleInputChange}
          placeholder="e.g. 9500000"
          type="number"
          error={errors.askingPrice}
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
                Requesting Valuation...
              </>
            ) : (
              'Request Valuation'
            )}
          </button>
          
          <p className="text-center text-[12.5px] font-semibold text-[#222222]">
            ⏱️ We&apos;ll send your valuation assessment within 24 hours on WhatsApp.
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
