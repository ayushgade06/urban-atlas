'use client'

import React, { useState } from 'react'
import FormWrapper from '@/components/FormWrapper'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import FormMultiSelect from '@/components/FormMultiSelect'
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

const EXPERIENCE_OPTIONS = [
  'Less than 1 Year',
  '1–3 Years',
  '3–5 Years',
  '5–10 Years',
  '10+ Years',
]

const ACTIVE_OPTIONS = [
  'Buyer Requirements',
  'Resale Plots',
  'Builder Plots',
  'Investor Deals',
]

export default function ChannelPartnersPage() {
  const [form, setForm] = useState({
    fullName: '',
    mobileNumber: '',
    areasCovered: [] as string[],
    experience: '',
    activeIn: [] as string[],
    additionalInformation: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

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

  const handleLocalityChange = (selected: string[]) => {
    setForm((prev) => ({ ...prev, areasCovered: selected }))
    if (errors.areasCovered) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.areasCovered
        return next
      })
    }
  }

  const handleActiveChange = (selected: string[]) => {
    setForm((prev) => ({ ...prev, activeIn: selected }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required'
    
    const cleanPhone = form.mobileNumber.replace(/\D/g, '')
    if (!cleanPhone) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else if (cleanPhone.length !== 10) {
      newErrors.mobileNumber = 'Mobile number must be a valid 10-digit Indian number'
    }

    if (form.areasCovered.length === 0) {
      newErrors.areasCovered = 'Please select at least one coverage area'
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
      const res = await fetch('/api/channel-partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          mobileNumber: form.mobileNumber.replace(/\D/g, ''),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to join the network. Please try again.')
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
        headline="Network Joined!"
        subheadline="Your details are registered with us."
      >
        <SuccessMessage
          title="Network Application Received!"
          message="Thank you for applying to the Urban Atlas Channel Partner Network. We will review the areas you cover and reach out on WhatsApp to finalize your placement."
          whatsappText="Hi Urban Atlas, I just submitted details to join the Channel Partner Network."
        />
      </FormWrapper>
    )
  }

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '910000000000'
  const waDirectUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    'Hi Urban Atlas, I want to join the Channel Partner Network'
  )}`

  return (
    <FormWrapper
      label="Partner Program"
      headline="Join Channel Partner Network"
      subheadline="Receive buyer requirements and selected opportunities across our focus localities."
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
          label="Mobile Number / WhatsApp"
          name="mobileNumber"
          value={form.mobileNumber}
          onChange={handleInputChange}
          placeholder="e.g. +91 99999 99999"
          required
          error={errors.mobileNumber}
          disabled={isSubmitting}
        />

        <FormMultiSelect
          label="Areas You Cover"
          options={LOCALITIES}
          selectedValues={form.areasCovered}
          onChange={handleLocalityChange}
          required
          error={errors.areasCovered}
        />

        <FormSelect
          label="Experience"
          name="experience"
          value={form.experience}
          onChange={handleInputChange}
          options={EXPERIENCE_OPTIONS}
          placeholder="Select years of experience (optional)"
          error={errors.experience}
          disabled={isSubmitting}
        />

        <FormCheckbox
          label="Active In (optional)"
          options={ACTIVE_OPTIONS}
          selectedValues={form.activeIn}
          onChange={handleActiveChange}
          disabled={isSubmitting}
        />

        <FormTextarea
          label="Additional Information"
          name="additionalInformation"
          value={form.additionalInformation}
          onChange={handleInputChange}
          placeholder="Mention details about your coverage sectors, primary source inventory, client base, or background."
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
              Joining Network...
            </>
          ) : (
            'Join Network'
          )}
        </button>

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
