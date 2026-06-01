import Link from 'next/link'
import Image from 'next/image'

interface LocalityProps {
  slug: string
  name: string
  badge: string
  badgeColor: string
  description: string
  image: string
}

export default function LocalityCard({
  slug,
  name,
  badge,
  badgeColor,
  description,
  image
}: LocalityProps) {
  return (
    <Link href={`/localities/${slug}`} className="group block bg-white border border-[#EBEBEB] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12),_0_4px_12px_rgba(0,0,0,0.06)]">
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
        <span
          className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full text-white shadow-sm"
          style={{ backgroundColor: badgeColor }}
        >
          {badge}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#222222] mb-2 group-hover:text-[#FF385C] transition-colors duration-200">
          {name}
        </h3>
        <p className="text-sm text-[#6A6A6A] leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <span className="inline-flex items-center text-[#FF385C] font-semibold text-sm group-hover:underline">
          View Details
          <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
