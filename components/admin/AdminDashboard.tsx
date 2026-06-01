'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MapPin, LogOut, LayoutDashboard, ExternalLink, FileText, BarChart3, ShieldAlert } from 'lucide-react'

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setLoading(true)
    try {
      await fetch('/api/admin/auth', {
        method: 'DELETE',
      })
      router.push('/admin/login')
      router.refresh()
    } catch (err) {
      console.error('Logout failed', err)
      setLoading(false)
    }
  }

  const cards = [
    {
      icon: FileText,
      title: 'Open Tally Dashboard',
      desc: 'View and manage all leads',
      url: 'https://tally.so/login'
    },
    {
      icon: ExternalLink,
      title: 'Open Live Form',
      desc: 'Preview the lead form',
      url: 'https://tally.so/r/68MPZA'
    },
    {
      icon: BarChart3,
      title: 'Tally Workspace',
      desc: 'Access analytics & exports',
      url: 'https://tally.so'
    }
  ]

  return (
    <div className="font-jakarta flex flex-col md:flex-row min-h-screen bg-white text-[#222222]">
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-[#F7F7F7] border-b md:border-r border-[#EBEBEB] flex flex-col justify-between p-6 flex-none">
        <div className="flex flex-col gap-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#FF385C] text-white p-2 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg leading-tight tracking-tight text-[#222222]">
              Urban Atlas
            </span>
          </Link>

          {/* Links list */}
          <nav className="flex flex-col gap-2">
            <div className="bg-white text-[#FF385C] border border-[#EBEBEB] font-semibold text-sm px-4 py-3 rounded-xl flex items-center gap-2.5">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
          </nav>
        </div>

        {/* Logout at bottom */}
        <button
          onClick={handleLogout}
          disabled={loading}
          className="mt-8 bg-white border border-[#EBEBEB] hover:border-[#FF385C] hover:text-[#FF385C] text-[#6A6A6A] font-semibold text-sm px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer w-full"
        >
          <LogOut className="w-4 h-4" />
          <span>{loading ? 'Logging out...' : 'Logout'}</span>
        </button>
      </aside>

      {/* Main workspace */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-4xl flex flex-col gap-8">
          {/* Heading */}
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#222222]">Welcome back.</h1>
            <p className="text-sm text-[#6A6A6A] mt-2">
              Lead submissions are managed through Tally. Use the links below to access your data workspace.
            </p>
          </div>

          {/* 3 Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {cards.map((card, idx) => {
              const Icon = card.icon
              return (
                <a
                  key={idx}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-[#EBEBEB] p-6 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 block"
                >
                  <div className="w-10 h-10 bg-[#F7F7F7] group-hover:bg-[#FFF0F3] group-hover:text-[#FF385C] text-[#222222] rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#222222] group-hover:text-[#FF385C] transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#6A6A6A]">
                    {card.desc}
                  </p>
                </a>
              )
            })}
          </div>

          {/* Info note */}
          <div className="bg-[#FFF0F3]/40 border border-[#FF385C]/10 p-6 rounded-2xl flex gap-4 mt-8">
            <ShieldAlert className="w-5 h-5 text-[#FF385C] flex-none mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-[#222222] mb-1">Lead Capture Workspace Information</h4>
              <p className="text-xs text-[#6A6A6A] leading-relaxed">
                All form submissions from the website are collected in your Tally workspace. Log into Tally to view, filter, and export leads. No customer records are stored locally inside the application&apos;s hosting environments.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
