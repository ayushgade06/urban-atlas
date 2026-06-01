export interface LocalityData {
  slug: string
  name: string
  badge: string
  badgeColor: string
  image: string
  description: string
  overview: string
  plannedDevelopment: string[]
  residentialSuitability: {
    score: number       // 1-10
    notes: string
    pros: string[]
    cons: string[]
  }
  plottedEcosystem: string
  keyStats: {
    avgPlotSize: string
    priceRange: string
    roadWidth: string
    authority: string
    freehold: string
    metroProximity: string
  }
}

export const LOCALITIES: LocalityData[] = [
  {
    slug: 'gomti-nagar',
    name: 'Gomti Nagar',
    badge: 'Prime Market',
    badgeColor: '#FF385C',
    description: 'Premium resale inventory with strong long-term demand',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f28f3b58?w=500&q=80',
    overview: 'Gomti Nagar is Lucknow’s flagship high-end residential and commercial area. Known for its wide roads, planned layout, and expansive green parks, it hosts premium LDA residential plots. Resale demand here is exceptionally high due to the lack of fresh allotments.',
    plannedDevelopment: [
      'Extension of the commercial belt along Vipul Khand and Vibhuti Khand.',
      'Upgradation of utility grids and smart city monitoring systems.',
      'Expansion of corporate offices driving steady white-collar tenant demand.'
    ],
    residentialSuitability: {
      score: 9.5,
      notes: 'Outstanding for families and luxury buyers seeking immediate occupancy and top-tier amenities.',
      pros: [
        'Excellent connectivity to central Lucknow and the airport via bypasses.',
        'High-density green parks and highly rated educational institutions nearby.',
        'Extremely strong resale liquidity and capital appreciation records.'
      ],
      cons: [
        'Very high entry price point for resale plots.',
        'Limited fresh plot listings; high competition among buyers.'
      ]
    },
    plottedEcosystem: 'Dominated by LDA-allotted plots ranging from 1,200 to 5,000 sqft. High percentage of immediate resale properties with clear titles, though verification of older lease deeds is required.',
    keyStats: {
      avgPlotSize: '1,500 - 3,200 sqft',
      priceRange: '₹8,000 - ₹15,000 / sqft',
      roadWidth: '9m - 18m',
      authority: 'LDA (Lucknow Development Authority)',
      freehold: 'Mostly Freehold (convertible from leasehold)',
      metroProximity: 'Direct access (Gomti Nagar & Patrakar Puram Metro stations)'
    }
  },
  {
    slug: 'jankipuram',
    name: 'Jankipuram',
    badge: 'Stable Growth',
    badgeColor: '#22C55E',
    description: 'Mature residential sectors with active resale movement',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80',
    overview: 'Jankipuram is an established middle-to-high income residential zone in North Lucknow. Developed primarily by the LDA, it features organized sectors with stable utility services and highly active resale transaction volume.',
    plannedDevelopment: [
      'Modernization of local sector parks and commercial retail clusters.',
      'Drainage system upgrades to handle monsoon runoff in older sectors.',
      'Improved feeder transport linking to the Sitapur Road corridor.'
    ],
    residentialSuitability: {
      score: 8.2,
      notes: 'Highly suitable for end-users seeking a quiet, suburban neighborhood with mature social infrastructure.',
      pros: [
        'Affordable to mid-range pricing compared to Gomti Nagar.',
        'Established schools, markets, and healthcare services within a 1km radius.',
        'Legally structured sectors with low risk of unauthorized construction.'
      ],
      cons: [
        'Peak hours traffic congesting the main engineering college road.',
        'Older sectors have narrow internal roads (typically 9m).'
      ]
    },
    plottedEcosystem: 'Comprises structured LDA layout sectors. Plots are mostly 1,000 to 2,400 sqft. Resale market is stable with high percentage of self-constructed homes.',
    keyStats: {
      avgPlotSize: '1,200 - 2,150 sqft',
      priceRange: '₹4,500 - ₹7,500 / sqft',
      roadWidth: '9m - 12m',
      authority: 'LDA (Lucknow Development Authority)',
      freehold: 'Freehold status verified for 85%+ plots',
      metroProximity: '3.5 km from Munshi Pulia Metro station'
    }
  },
  {
    slug: 'jankipuram-vistar',
    name: 'Jankipuram Vistar',
    badge: 'High Activity',
    badgeColor: '#3B82F6',
    description: 'Emerging residential belt with growing inventory opportunities',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80',
    overview: 'Jankipuram Vistar is a newer extension in North Lucknow, developed to absorb the city’s residential expansion. Characterized by wide-plan layouts and proximity to institutional hubs (such as AKTU), it offers excellent investment opportunities.',
    plannedDevelopment: [
      'Completion of the new outer ring road section nearby.',
      'Allotment of new local authority parks and community centers.',
      'Integration of decentralized sewage treatment facilities.'
    ],
    residentialSuitability: {
      score: 8.0,
      notes: 'Ideal for investors and buyers looking to build homes within the next 2-4 years as the area matures.',
      pros: [
        'Modern, wider layouts with 12m and 18m internal roads.',
        'Close to major educational institutes and institutional campuses.',
        'Attractive pricing entry point with high growth potential.'
      ],
      cons: [
        'Commercial markets are still under active development.',
        'Piped gas and high-speed fiber internet deployment is in progress.'
      ]
    },
    plottedEcosystem: 'Large-scale LDA sectors with high resale availability. Modern plotted layouts with clear earmarks for parks, commercial zones, and public services.',
    keyStats: {
      avgPlotSize: '1,500 - 2,400 sqft',
      priceRange: '₹3,500 - ₹5,800 / sqft',
      roadWidth: '12m - 18m',
      authority: 'LDA (Lucknow Development Authority)',
      freehold: '100% Freehold allotments',
      metroProximity: '5 km from IT College / Munshi Pulia Metro'
    }
  },
  {
    slug: 'awas-vikas',
    name: 'Awas Vikas',
    badge: 'Govt Structured',
    badgeColor: '#8B5CF6',
    description: 'Structured residential layouts with legally safer inventory',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80',
    overview: 'Awas Vikas (Uttar Pradesh Awas Vikas Parishad) represents state-structured colonies known for highly organized master plans and secure legal frameworks. The plots here are widely regarded as the safest investments regarding land title security.',
    plannedDevelopment: [
      'Comprehensive drainage layout connectivity with municipal networks.',
      'Setting up of dedicated sector level policing posts.',
      'Introduction of state-of-the-art sports complexes in newer layouts.'
    ],
    residentialSuitability: {
      score: 8.8,
      notes: 'Superb for risk-averse buyers seeking a government-backed, structured layout with guaranteed basic infrastructure.',
      pros: [
        'Highly secure ownership titles directly issued by UPAVP.',
        'Spacious planned layouts with generous allocations for wide roads.',
        'Consistent civic utility lines (water, electricity, sewage).'
      ],
      cons: [
        'Strict building bylaws require careful construction approvals.',
        'Government administrative delays during ownership transfer.'
      ]
    },
    plottedEcosystem: 'State-planned residential sectors with plots ranging from 900 to 3,600 sqft. Resale requires processing transfer of ownership via UPAVP offices.',
    keyStats: {
      avgPlotSize: '1,200 - 2,700 sqft',
      priceRange: '₹4,000 - ₹7,000 / sqft',
      roadWidth: '9m - 15m',
      authority: 'UPAVP (Awas Vikas Parishad)',
      freehold: 'Freehold registry available',
      metroProximity: 'Varies by block (typically within 3-4 km)'
    }
  },
  {
    slug: 'indira-nagar',
    name: 'Indira Nagar',
    badge: 'Mature Core',
    badgeColor: '#F59E0B',
    description: 'Established residential locality with strong liquidity',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&q=80',
    overview: 'Indira Nagar is one of the largest planned residential colonies in Asia. Boasting a mature infrastructure system, bustling markets, and instant proximity to central Lucknow, it remains a highly coveted core residential area.',
    plannedDevelopment: [
      'Road widening initiatives on key sector connecting roads.',
      'Beautification and eco-upgradations of historic public parks.',
      'Retrofitting of municipal water infrastructure lines.'
    ],
    residentialSuitability: {
      score: 9.0,
      notes: 'Perfect for multi-generational families wanting established neighborhood life with zero wait time for infrastructure.',
      pros: [
        'Unrivaled access to markets, premium schools, and medical hubs.',
        'Extremely active resale and rental market.',
        'Centrally located with excellent connectivity.'
      ],
      cons: [
        'High congestion in commercial zones (e.g., Bhootnath market area).',
        'Minimal greenfield sites; resale inventory is strictly secondary market.'
      ]
    },
    plottedEcosystem: 'Densely populated LDA sectors. Resale plots are limited and highly sought after. Title verification of original allotment papers and mutations is critical here.',
    keyStats: {
      avgPlotSize: '1,000 - 2,500 sqft',
      priceRange: '₹7,500 - ₹12,000 / sqft',
      roadWidth: '9m - 12m',
      authority: 'LDA (Lucknow Development Authority)',
      freehold: 'Leasehold to Freehold conversions active',
      metroProximity: 'Direct access (Indira Nagar & Bhootnath Metro stations)'
    }
  },
  {
    slug: 'shaheed-path',
    name: 'Shaheed Path',
    badge: 'Infrastructure Hub',
    badgeColor: '#14B8A6',
    description: 'High-growth corridors with improving connectivity',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=500&q=80',
    overview: 'The Shaheed Path corridor is the fastest-developing real estate zone in Lucknow. Connecting Faizabad Road to Kanpur Road, it offers modern high-rise apartments and premium plotted developments near major developments like the Ekana Stadium and Lulu Mall.',
    plannedDevelopment: [
      'Expansion of underpass links to ease traffic flow.',
      'Development of upcoming IT parks and wellness city segments.',
      'New arterial road integrations with the Gomti Nagar Extension.'
    ],
    residentialSuitability: {
      score: 9.2,
      notes: 'Excellent for modern homebuilders and long-term investors looking for rapid infrastructural growth.',
      pros: [
        'Proximity to prime recreation hubs (Lulu Mall, Phoenix Palassio).',
        'Direct high-speed expressway connectivity to the airport.',
        'High percentage of modern, wide-road plotted gated enclaves.'
      ],
      cons: [
        'High levels of dust and noise due to ongoing infrastructure building.',
        'Public transport options are currently limited off the main highway.'
      ]
    },
    plottedEcosystem: 'Features a mix of private gated layouts (approved by LDA) and official authority extensions. Rapidly rising pricing with strong buyer intent.',
    keyStats: {
      avgPlotSize: '1,500 - 3,000 sqft',
      priceRange: '₹6,000 - ₹10,000 / sqft',
      roadWidth: '12m - 24m',
      authority: 'LDA / Approved Private Developers',
      freehold: 'Mostly Freehold registry',
      metroProximity: '5-10 mins drive to Transport Nagar / Airport Metro'
    }
  }
]
