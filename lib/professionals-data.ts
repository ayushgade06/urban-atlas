export interface Professional {
  id: string
  name: string
  category: 'architect' | 'lawyer' | 'contractor' | 'surveyor'
  specialization: string
  experience: string
  localities: string[]
  phone: string
  verified: boolean
}

export const PROFESSIONALS: Professional[] = [
  {
    id: '1',
    name: 'Ar. Alok Srivastava',
    category: 'architect',
    specialization: 'LDA Map Approvals & Modern Villa Designs',
    experience: '12 Years',
    localities: ['Gomti Nagar', 'Shaheed Path', 'Indira Nagar'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '2',
    name: 'Adv. Ramesh Chandra Pandey',
    category: 'lawyer',
    specialization: 'Land Title Search & LDA Property Verification',
    experience: '18 Years',
    localities: ['Gomti Nagar', 'Jankipuram', 'Awas Vikas'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '3',
    name: 'Vikas Mishra Construction',
    category: 'contractor',
    specialization: 'Turnkey Residential Construction & Plotted Site Work',
    experience: '8 Years',
    localities: ['Jankipuram Vistar', 'Awas Vikas', 'Jankipuram'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '4',
    name: 'Rajeev Kumar & Associates',
    category: 'surveyor',
    specialization: 'Boundary Surveying & Land Layout Demarcation',
    experience: '15 Years',
    localities: ['Shaheed Path', 'Gomti Nagar', 'Jankipuram Vistar'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '5',
    name: 'Ar. Meera Saxena',
    category: 'architect',
    specialization: 'Eco-Friendly Residential Layouts & Interior Architecture',
    experience: '9 Years',
    localities: ['Indira Nagar', 'Gomti Nagar', 'Awas Vikas'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '6',
    name: 'Adv. Sunita Shukla',
    category: 'lawyer',
    specialization: 'Leasehold to Freehold Registry & Stamp Duty Audits',
    experience: '11 Years',
    localities: ['Awas Vikas', 'Indira Nagar', 'Jankipuram'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '7',
    name: 'Lucknow Landmark Builders',
    category: 'contractor',
    specialization: 'Premium Duplex Construction & Foundation Structuring',
    experience: '14 Years',
    localities: ['Gomti Nagar', 'Shaheed Path'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '8',
    name: 'Kumar Surveyors Group',
    category: 'surveyor',
    specialization: 'Topographical Land Surveying & Contour Mapping',
    experience: '10 Years',
    localities: ['Jankipuram Vistar', 'Jankipuram', 'Indira Nagar'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '9',
    name: 'Ar. Harsh Vardhan',
    category: 'architect',
    specialization: 'Vastu-Compliant Plotted Villa Concept Architect',
    experience: '7 Years',
    localities: ['Shaheed Path', 'Jankipuram Vistar', 'Awas Vikas'],
    phone: '918375884211',
    verified: true
  },
  {
    id: '10',
    name: 'Adv. Anil K. Mishra',
    category: 'lawyer',
    specialization: 'RERA Disputes & Plot Succession Legal Clearances',
    experience: '22 Years',
    localities: ['Gomti Nagar', 'Indira Nagar', 'Awas Vikas'],
    phone: '918375884211',
    verified: true
  }
]
