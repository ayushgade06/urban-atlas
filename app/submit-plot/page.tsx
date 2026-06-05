'use client'

import React, { useState } from 'react'
import FormWrapper from '@/components/FormWrapper'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import FormCheckbox from '@/components/FormCheckbox'
import FormTextarea from '@/components/FormTextarea'
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

export default function SubmitPlotPage() {
  const [form, setForm] = useState({
    ownerName: '',
    whatsappNumber: '',
    locality: '',
    sectorBlock: '',
    plotArea: '',
    askingPrice: '',
    plotFeatures: [] as string[],
    additionalNotes: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '918375884211'
  const waDirectUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    'Hi Urban Atlas, I want to submit my plot'
  )}`

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    
    const cleanPhone = form.whatsappNumber.replace(/\D/g, '')
    if (!cleanPhone) {
      newErrors.whatsappNumber = 'WhatsApp Number is required'
    } else if (cleanPhone.length !== 10) {
      newErrors.whatsappNumber = 'WhatsApp number must be a valid 10-digit Indian number'
    }

    if (!form.locality) newErrors.locality = 'Locality selection is required'
    if (!form.sectorBlock.trim()) newErrors.sectorBlock = 'Sector / Block is required'
    
    const areaNum = Number(form.plotArea)
    if (!form.plotArea) {
      newErrors.plotArea = 'Plot Area is required'
    } else if (isNaN(areaNum) || areaNum <= 0) {
      newErrors.plotArea = 'Plot Area must be a positive number'
    }

    const priceNum = Number(form.askingPrice)
    if (!form.askingPrice) {
      newErrors.askingPrice = 'Asking Price is required'
    } else if (isNaN(priceNum) || priceNum <= 0) {
      newErrors.askingPrice = 'Asking Price must be a positive number'
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
      const res = await fetch('/api/submit-plot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          whatsappNumber: form.whatsappNumber.replace(/\D/g, ''),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to submit plot. Please try again.')
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
        headline="Plot Submitted!"
        subheadline="We've received your plot details."
      >
        <SuccessMessage
          title="Submission Received Successfully!"
          message="Your plot details are registered with Urban Atlas. We will review your property parameters against our buyer network requests and contact you shortly."
          whatsappText="Hi Urban Atlas, I just submitted my plot details. Let's connect."
        />
      </FormWrapper>
    )
  }

  return (
    <FormWrapper
      label="Plot Listing"
      headline="Submit Your Plot"
      subheadline="Share your property details and we'll review it for potential buyer matches within our network."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormInput
          label="Owner Name"
          name="ownerName"
          value={form.ownerName}
          onChange={handleInputChange}
          placeholder="Enter full name"
          required
          error={errors.ownerName}
          disabled={isSubmitting}
        />

        <FormInput
          label="WhatsApp Number"
          name="whatsappNumber"
          value={form.whatsappNumber}
          onChange={handleInputChange}
          placeholder="e.g. 99999 99999"
          required
          error={errors.whatsappNumber}
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
          placeholder="e.g. Sector 6, Vineet Khand, Eldeco Sector B"
          required
          error={errors.sectorBlock}
          disabled={isSubmitting}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Plot Area (Sq Ft)"
            name="plotArea"
            value={form.plotArea}
            onChange={handleInputChange}
            placeholder="e.g. 1200"
            type="number"
            required
            error={errors.plotArea}
            disabled={isSubmitting}
          />

          <FormInput
            label="Asking Price (Rs)"
            name="askingPrice"
            value={form.askingPrice}
            onChange={handleInputChange}
            placeholder="e.g. 8500000"
            type="number"
            required
            error={errors.askingPrice}
            disabled={isSubmitting}
          />
        </div>

        <FormCheckbox
          label="Plot Features"
          options={PLOT_FEATURES}
          selectedValues={form.plotFeatures}
          onChange={handleFeaturesChange}
          disabled={isSubmitting}
        />

        <FormTextarea
          label="Additional Notes"
          name="additionalNotes"
          value={form.additionalNotes}
          onChange={handleInputChange}
          placeholder="Mention key details like double-side open, main road facing, park view, nearby landmarks, etc."
          disabled={isSubmitting}
        />

        {submitError && (
          <div className="bg-[#FFF1F3] border border-[#FF2D3F]/10 rounded-[14px] p-4 text-[#FF2D3F] text-[13px] font-bold">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto sm:min-w-[200px] sm:self-center bg-[#FF2D3F] hover:bg-[#E81F34] disabled:bg-[#FF2D3F]/60 text-white rounded-[14px] py-4 text-[15px] font-extrabold transition-all duration-200 premium-shadow select-none cursor-pointer flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting Plot...
            </>
          ) : (
            'Submit Plot'
          )}
        </button>

        {/* WhatsApp Sub CTA */}
        <div className="text-center mt-2">
          <p className="text-[13px] font-semibold text-[#4B5563]">
            Prefer to send details directly?{' '}
            <a
              href={waDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2D3F] hover:underline underline-offset-4 font-bold"
            >
              WhatsApp us →
            </a>
          </p>
        </div>
      </form>
    </FormWrapper>
  )
}
