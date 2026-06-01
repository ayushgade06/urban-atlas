'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MapPin, KeyRound, ArrowRight } from 'lucide-react'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed')
      }

      router.push('/admin/dashboard')
      router.refresh()
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : 'Incorrect password'
      setError(errMsg)
      setLoading(false)
    }
  }

  return (
    <div className="font-jakarta bg-[#F7F7F7] min-h-screen flex items-center justify-center p-6">
      <div className="bg-white border border-[#EBEBEB] p-8 rounded-3xl shadow-lg w-full max-w-md">
        {/* Brand Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#FF385C] text-white p-2 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg leading-tight tracking-tight text-[#222222]">
              Urban Atlas
            </span>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-[#222222]">Admin Portal</h1>
            <p className="text-xs text-[#6A6A6A] mt-1 font-semibold">
              Enter credentials to access the data workspace
            </p>
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-bold text-[#222222] uppercase tracking-wider mb-2">
              Security Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-3 bg-[#F7F7F7] border border-[#EBEBEB] rounded-xl text-sm focus:outline-hidden focus:border-[#FF385C] focus:bg-white transition-all text-[#222222] font-semibold"
              />
              <KeyRound className="w-4 h-4 text-[#6A6A6A] absolute left-3 top-3.5" />
            </div>
          </div>

          {/* Feedback error */}
          {error && (
            <div className="text-xs font-semibold text-[#FF385C] bg-[#FFF0F3] border border-[#FF385C]/10 px-4 py-2.5 rounded-lg">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  )
}
