import { MetadataRoute } from 'next'
import { LOCALITIES } from '@/lib/localities-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://urbanatlas.in'
  return [
    { url: base,                       changeFrequency: 'weekly',  priority: 1   },
    { url: `${base}/localities`,       changeFrequency: 'weekly',  priority: 0.9 },
    ...LOCALITIES.map(l => ({ url: `${base}/localities/${l.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${base}/community`,        changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/professionals`,    changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/join-network`,     changeFrequency: 'monthly', priority: 0.8 },
  ]
}
