const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function createSvgAsset(title, subtitle, badge, accentColor = '#0284c7', patternType = 'waves') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="50%" stop-color="#0c4a6e" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accentColor}" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <linearGradient id="tankGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.95" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000" flood-opacity="0.4" />
    </filter>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="url(#bgGrad)" />

  <!-- Subtle Geometric Grid Lines -->
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="0" y1="100" x2="1200" y2="100" />
    <line x1="0" y1="200" x2="1200" y2="200" />
    <line x1="0" y1="300" x2="1200" y2="300" />
    <line x1="0" y1="400" x2="1200" y2="400" />
    <line x1="0" y1="500" x2="1200" y2="500" />
    <line x1="0" y1="600" x2="1200" y2="600" />
    <line x1="0" y1="700" x2="1200" y2="700" />
    <line x1="150" y1="0" x2="150" y2="800" />
    <line x1="300" y1="0" x2="300" y2="800" />
    <line x1="450" y1="0" x2="450" y2="800" />
    <line x1="600" y1="0" x2="600" y2="800" />
    <line x1="750" y1="0" x2="750" y2="800" />
    <line x1="900" y1="0" x2="900" y2="800" />
    <line x1="1050" y1="0" x2="1050" y2="800" />
  </g>

  <!-- Decorative Water Waves -->
  <path d="M0,620 C300,560 500,680 800,600 C1000,540 1150,640 1200,610 L1200,800 L0,800 Z" fill="url(#waterGrad)" opacity="0.4" />
  <path d="M0,660 C250,610 550,720 850,640 C1050,590 1150,670 1200,650 L1200,800 L0,800 Z" fill="url(#waterGrad)" opacity="0.6" />
  <path d="M0,710 C350,660 650,750 950,690 C1100,660 1180,710 1200,700 L1200,800 L0,800 Z" fill="url(#accentGrad)" opacity="0.3" />

  <!-- Center Card Illustration -->
  <g transform="translate(650, 140)" filter="url(#shadow)">
    <!-- Water Tank Illustration Representation -->
    <rect x="50" y="80" width="380" height="420" rx="36" fill="url(#tankGrad)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="3" />
    <!-- Tank Horizontal Ribs -->
    <line x1="70" y1="160" x2="410" y2="160" stroke="rgba(56, 189, 248, 0.25)" stroke-width="4" stroke-dasharray="12,6" />
    <line x1="70" y1="240" x2="410" y2="240" stroke="rgba(56, 189, 248, 0.25)" stroke-width="4" stroke-dasharray="12,6" />
    <line x1="70" y1="320" x2="410" y2="320" stroke="rgba(56, 189, 248, 0.25)" stroke-width="4" stroke-dasharray="12,6" />
    <line x1="70" y1="400" x2="410" y2="400" stroke="rgba(56, 189, 248, 0.25)" stroke-width="4" stroke-dasharray="12,6" />

    <!-- Tank Lid -->
    <ellipse cx="240" cy="80" rx="140" ry="24" fill="#0284c7" stroke="#38bdf8" stroke-width="3" />
    <ellipse cx="240" cy="74" rx="80" ry="14" fill="#0369a1" />

    <!-- Internal Pure Water Layer -->
    <rect x="70" y="220" width="340" height="260" rx="18" fill="url(#waterGrad)" />
    <!-- Bubbles -->
    <circle cx="150" cy="380" r="14" fill="rgba(255,255,255,0.4)" />
    <circle cx="200" cy="310" r="8" fill="rgba(255,255,255,0.5)" />
    <circle cx="320" cy="360" r="18" fill="rgba(255,255,255,0.3)" />
    <circle cx="280" cy="270" r="10" fill="rgba(255,255,255,0.6)" />
    <circle cx="180" cy="250" r="6" fill="rgba(255,255,255,0.4)" />

    <!-- Pure Water Sparkle & Jet Spray Icon -->
    <g transform="translate(180, 290)" filter="url(#glow)">
      <path d="M60,0 L70,30 L100,40 L70,50 L60,80 L50,50 L20,40 L50,30 Z" fill="#38bdf8" />
    </g>

    <!-- Floating Badge on Tank -->
    <rect x="100" y="440" width="280" height="50" rx="25" fill="#0f172a" stroke="#10b981" stroke-width="2" />
    <circle cx="130" cy="465" r="12" fill="#10b981" />
    <path d="M124,465 L128,469 L136,461" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <text x="155" y="471" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="600">100% Hygienic Service</text>
  </g>

  <!-- Left Content Area -->
  <g transform="translate(100, 180)">
    <!-- Badge -->
    <rect x="0" y="0" width="280" height="42" rx="21" fill="rgba(2, 132, 199, 0.25)" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="22" cy="21" r="6" fill="#38bdf8" />
    <text x="38" y="27" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="16" font-weight="600" letter-spacing="0.5">${badge.toUpperCase()}</text>

    <!-- Title -->
    <text x="0" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="46" font-weight="800" line-height="1.2">
      ${title.split('\\n')[0]}
    </text>
    ${title.split('\\n')[1] ? `<text x="0" y="170" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="44" font-weight="800">${title.split('\\n')[1]}</text>` : ''}

    <!-- Subtitle -->
    <text x="0" y="240" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="22" font-weight="400">
      ${subtitle.split('\\n')[0]}
    </text>
    ${subtitle.split('\\n')[1] ? `<text x="0" y="275" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="22" font-weight="400">${subtitle.split('\\n')[1]}</text>` : ''}

    <!-- Feature Pills -->
    <g transform="translate(0, 330)">
      <rect x="0" y="0" width="180" height="40" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <text x="18" y="26" fill="#f1f5f9" font-family="system-ui, sans-serif" font-size="15" font-weight="500">Champapet, HYD</text>

      <rect x="200" y="0" width="160" height="40" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <text x="218" y="26" fill="#f1f5f9" font-family="system-ui, sans-serif" font-size="15" font-weight="500">Open 24 Hours</text>

      <rect x="380" y="0" width="180" height="40" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <text x="398" y="26" fill="#f1f5f9" font-family="system-ui, sans-serif" font-size="15" font-weight="500">23 Google Reviews</text>
    </g>
  </g>

  <!-- Bottom Brand Watermark -->
  <text x="100" y="730" fill="rgba(255,255,255,0.7)" font-family="system-ui, sans-serif" font-size="18" font-weight="600" letter-spacing="1">VIJAYA WATER TANK CLEANING SERVICES</text>
  <text x="1100" y="730" text-anchor="end" fill="rgba(255,255,255,0.5)" font-family="system-ui, sans-serif" font-size="16">082477 35114</text>
</svg>`;
}

const assets = [
  {
    name: 'hero-tank-cleaning.jpg',
    title: 'Professional Water Tank\\nCleaning in Champapet',
    subtitle: 'Thorough de-sludging, wall scrubbing & hygienic washing\\nfor overhead tanks and underground sumps in Hyderabad.',
    badge: 'Open 24/7 • Local Champapet Service',
    color: '#0284c7'
  },
  {
    name: 'about-hero.jpg',
    title: 'Dedicated to Clean &\\nSafe Water Storage',
    subtitle: 'Providing dependable, hygienic tank cleaning solutions\\nfor residences, apartments, and commercial facilities.',
    badge: 'About Our Business',
    color: '#0369a1'
  },
  {
    name: 'services-hero.jpg',
    title: 'Our Tank Cleaning\\nServices & Solutions',
    subtitle: 'From rooftop Sintex tanks to deep masonry sumps,\\nwe ensure thorough sediment extraction and wall washing.',
    badge: 'Comprehensive Services',
    color: '#0284c7'
  },
  {
    name: 'gallery-hero.jpg',
    title: 'Service Gallery &\\nProject Highlights',
    subtitle: 'Visual proof of our tank cleaning, de-sludging,\\nand high-pressure washing work across Hyderabad.',
    badge: 'Authentic Service Work',
    color: '#0ea5e9'
  },
  {
    name: 'blog-hero.jpg',
    title: 'Water Hygiene Guides\\n& Maintenance Tips',
    subtitle: 'Practical advice, cleaning schedules, and signs to keep\\nyour domestic water tanks clean and disease-free.',
    badge: 'Knowledge & Guidance',
    color: '#0284c7'
  },
  {
    name: 'contact-hero.jpg',
    title: 'Contact Vijaya Water\\nTank Cleaning Services',
    subtitle: 'Ready to clean your tank? Call 082477 35114 or book online.\\nOpen 24 hours in Champapet, Telangana 500059.',
    badge: 'Instant Enquiry & Booking',
    color: '#0ea5e9'
  },
  {
    name: 'overhead-tank-cleaning.jpg',
    title: 'Residential Overhead\\nTank Cleaning',
    subtitle: 'Rooftop Sintex, PVC & concrete tanks washed\\nand scrubbed clean with precision.',
    badge: 'Overhead Tanks',
    color: '#0284c7'
  },
  {
    name: 'underground-sump-cleaning.jpg',
    title: 'Underground Sump\\nDeep Cleaning',
    subtitle: 'Extraction of heavy bottom silt, mud,\\nand algae from masonry and RCC sumps.',
    badge: 'Underground Sumps',
    color: '#075985'
  },
  {
    name: 'apartment-tank-cleaning.jpg',
    title: 'Apartment & Community\\nTank Cleaning',
    subtitle: 'Organized, scheduled cleaning for gated societies,\\nflats, and multi-tenant residential buildings.',
    badge: 'Apartments & Societies',
    color: '#0369a1'
  },
  {
    name: 'commercial-tank-cleaning.jpg',
    title: 'Commercial & Office\\nTank Cleaning',
    subtitle: '24/7 flexible scheduling for restaurants, retail shops,\\noffices, and educational spaces.',
    badge: 'Commercial Facilities',
    color: '#0284c7'
  },
  {
    name: 'sludge-sediment-removal.jpg',
    title: 'Sediment, Sludge &\\nBiofilm Removal',
    subtitle: 'Deep descaling and intensive extraction for neglected\\nor heavily sedimented water tanks.',
    badge: 'Deep De-silting',
    color: '#0f766e'
  },
  {
    name: 'gallery-overhead-1.jpg',
    title: 'Rooftop PVC Overhead\\nTank Cleaning',
    subtitle: 'Manual scrubbing and de-silting of 1,000L rooftop plastic tank.',
    badge: 'Overhead Tanks',
    color: '#0284c7'
  },
  {
    name: 'gallery-sump-1.jpg',
    title: 'Underground Sump\\nSludge Extraction',
    subtitle: 'Deep mud and silt extraction from residential concrete sump.',
    badge: 'Underground Sumps',
    color: '#075985'
  },
  {
    name: 'gallery-apartment-1.jpg',
    title: 'Apartment Complex\\nMulti-Tank Service',
    subtitle: 'Coordinated cleaning of dual sump & overhead tanks for apartments.',
    badge: 'Apartment Cleaning',
    color: '#0369a1'
  },
  {
    name: 'gallery-process-1.jpg',
    title: 'High-Pressure Interior\\nWall Washing',
    subtitle: 'Pressurized water jet scouring of algae & mineral scale.',
    badge: 'Process & Method',
    color: '#0ea5e9'
  },
  {
    name: 'gallery-overhead-2.jpg',
    title: 'Dual Rooftop Tanks\\nHygienic Wash',
    subtitle: 'Complete dewatering, wall scouring & freshwater flush.',
    badge: 'Overhead Tanks',
    color: '#0284c7'
  },
  {
    name: 'gallery-sump-2.jpg',
    title: 'Deep Masonry Sump\\nSediment Cleansing',
    subtitle: 'Porous wall brushing & bottom sediment removal in Saroornagar.',
    badge: 'Underground Sumps',
    color: '#075985'
  },
  {
    name: 'gallery-apartment-2.jpg',
    title: 'Commercial Property\\nRooftop Reservoir',
    subtitle: 'Prompt water storage maintenance for multi-tenant property.',
    badge: 'Apartment Cleaning',
    color: '#0369a1'
  },
  {
    name: 'gallery-process-2.jpg',
    title: 'Spotless Tank Interior\\nReady for Refill',
    subtitle: 'Clean, sanitized tank interior ready for pure municipal water.',
    badge: 'Final Inspected State',
    color: '#10b981'
  },
  {
    name: 'blog-cleaning-frequency.jpg',
    title: 'How Often Should You\\nClean Your Tank?',
    subtitle: 'Recommended semi-annual frequency & water hygiene tips.',
    badge: 'Maintenance Guide',
    color: '#0284c7'
  },
  {
    name: 'blog-warning-signs.jpg',
    title: '5 Signs Your Water Tank\\nNeeds Cleaning',
    subtitle: 'Spotting murky water, foul odor, and sediment migration early.',
    badge: 'Hygiene & Troubleshooting',
    color: '#0369a1'
  },
  {
    name: 'blog-importance-cleaning.jpg',
    title: 'Why Regular Water Tank\\nCleaning Matters',
    subtitle: 'Protecting plumbing fixtures, RO purifiers & daily water comfort.',
    badge: 'Property Care & Health',
    color: '#0ea5e9'
  },
  {
    name: 'og-image.jpg',
    title: 'Vijaya Water Tank\\nCleaning Services',
    subtitle: 'Professional & Hygienic Water Tank Cleaning in Champapet, Hyderabad.\\nCall 082477 35114 • Open 24 Hours.',
    badge: 'Champapet, Telangana 500059',
    color: '#0284c7'
  }
];

assets.forEach(asset => {
  const filePath = path.join(targetDir, asset.name);
  const svgContent = createSvgAsset(asset.title, asset.subtitle, asset.badge, asset.color);
  fs.writeFileSync(filePath, svgContent, 'utf8');
  console.log(`Generated ${asset.name}`);
});

console.log('All image assets generated successfully.');
