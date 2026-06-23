const insightBase = '/images/insights/'

const image = (file: string) => `${insightBase}${file}`

export const insightFallbackImage = image('connectivity.jpg')

const blogSlugImages: Record<string, string> = {
  'wifi-to-private-5g-tourism-connectivity': image('connectivity.jpg'),
  'designing-invisible-infrastructure-cities-connectivity': image('city-infrastructure.jpg'),
  '5g-connected-ports-smarter-trade': image('ports-logistics.jpg'),
  'public-private-partnerships-rural-rail-digital-transformation': image('rail-transport.jpg'),
  'private-networks-defense-secure-reliable-future-proof': image('defence-network.jpg'),
  'future-tourism-5g-connectivity-trains-travellers': image('future-networks.jpg'),
  'data-centres-future-connectivity-5g-innovation': image('data-centre.jpg'),
  'awtg-ai-innovation-human-expertise': image('ai-innovation.jpg'),
  'future-education-on-the-move-5g-trains-universities': image('education.jpg'),
}

const caseStudySlugImages: Record<string, string> = {
  'itrustric-open-ran-security': image('open-ran.jpg'),
  'high-street-recovery': 'https://images.unsplash.com/photo-1555529771-122e5d9f2341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'tot-service-assurance': image('performance-testing.jpg'),
  'central-london-benchmarking': 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'data-offloading-wifi': image('data-centre.jpg'),
  'akt-stability-testing': image('safety-network.jpg'),
  'rich-communications-suite': 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'small-cell-site-acquisition': image('city-infrastructure.jpg'),
}

const caseStudyTagFallbacks: Record<string, string> = {
  'Open RAN Security': image('open-ran.jpg'),
  'Network Economics': image('performance-testing.jpg'),
  'Public Sector': image('public-sector.jpg'),
  'Mobile Networks': image('mobile-networks.jpg'),
  'Capacity Planning': image('data-centre.jpg'),
  'Performance Testing': image('performance-testing.jpg'),
  'Mobile Services': image('connectivity.jpg'),
  'Site Acquisition': image('city-infrastructure.jpg'),
}

const whitePaperSlugImages: Record<string, string> = {
  'open-ran-innovations': image('open-ran.jpg'),
  'rapps-in-hiper-ran': image('ai-innovation.jpg'),
  'youth-development-and-apprenticeship-platforms': image('education.jpg'),
  'idams-collaborative-asset-management': image('city-infrastructure.jpg'),
  'stations-of-the-future': image('rail-transport.jpg'),
  'high-street-recovery': image('public-sector.jpg'),
  'ai-powered-dam-and-reservoir-management': image('safety-network.jpg'),
  'neutral-host-and-private-network-solutions': image('private-networks.jpg'),
  '5g-snapshot-june-2018': image('connectivity.jpg'),
  'esn-coverage-assurance': image('defence-network.jpg'),
  'what-is-5g': image('research-papers.jpg'),
  'heterogeneous-networks-using-small-cells': image('mobile-networks.jpg'),
  'incumbent-3g-operator-strategy': image('performance-testing.jpg'),
  'interworking-of-future-networks': image('future-networks.jpg'),
}

const whitePaperTopicFallbacks: Record<string, string> = {
  'Open RAN': image('open-ran.jpg'),
  'RAN Intelligence': image('ai-innovation.jpg'),
  'Public Services': image('public-sector.jpg'),
  'Asset Management': image('city-infrastructure.jpg'),
  'Rail Infrastructure': image('rail-transport.jpg'),
  'Public Sector': image('public-sector.jpg'),
  'AI Infrastructure': image('ai-innovation.jpg'),
  'Private Networks': image('private-networks.jpg'),
  '5G Strategy': image('connectivity.jpg'),
  'Public Safety': image('safety-network.jpg'),
  '5G Research': image('research-papers.jpg'),
  'Small Cells': image('mobile-networks.jpg'),
  'Mobile Strategy': image('future-networks.jpg'),
  'Future Networks': image('future-networks.jpg'),
}

const newsCategoryImages: Record<string, string> = {
  'Artificial Intelligence': image('ai-innovation.jpg'),
  Awards: image('research-papers.jpg'),
  Engineering: image('safety-network.jpg'),
  'Health Tech': image('safety-network.jpg'),
  Innovation: image('future-networks.jpg'),
  News: image('city-infrastructure.jpg'),
  'Private Networks': image('private-networks.jpg'),
  'Public Sector': image('public-sector.jpg'),
  Telecommunications: image('mobile-networks.jpg'),
}

// Ordered most-specific-first: each news story is matched against its title + excerpt
// so the photo reflects what the story is actually about, not just its category.
const newsKeywordImages: { pattern: RegExp; image: string }[] = [
  { pattern: /open\s*ran|o-ran|\brapp\b|hiper-ran|sconda|core hdd|itrustric|software-defined radio|\bsdr\b/i, image: image('open-ran.jpg') },
  { pattern: /rail(way)?|\btrain\b|heartland|millbrook|bicester|bletchley/i, image: image('rail-transport.jpg') },
  { pattern: /port\s*comms|port industry|\bports\b/i, image: image('ports-logistics.jpg') },
  { pattern: /defence|\besn\b|emergency services network/i, image: image('defence-network.jpg') },
  { pattern: /health|echalliance|hospital|practitioner/i, image: image('safety-network.jpg') },
  { pattern: /award|shortlist|winner|winning|recognised|recognition/i, image: image('research-papers.jpg') },
  { pattern: /g-cloud|cloud procurement|data\s*centre|data\s*center/i, image: image('cloud-network.jpg') },
  { pattern: /\blab\b|laboratory|network operations centre/i, image: image('lab-testing.jpg') },
  { pattern: /\bkai\b|generative ai|artificial intelligence|machine learning|\bai\b/i, image: image('ai-innovation.jpg') },
  { pattern: /director of engineering|systems integration|quality of service|\bengineering\b/i, image: image('engineering-team.jpg') },
  { pattern: /glasgow|smart city|smart and connected|city chambers|kielder|christmas market/i, image: image('smart-city.jpg') },
  { pattern: /mwc|mobile world congress|connected britain|summit|expo|tech week|lamma|panel|sponsor|exhibit|christmas dinner|exclusive with|interview/i, image: image('conference.jpg') },
  { pattern: /private\s*network|pnaas|network-in-a-box|private\s*5g/i, image: image('private-networks.jpg') },
  { pattern: /public sector|council|government|crown commercial|\bofcom\b|borderlands/i, image: image('public-sector.jpg') },
  { pattern: /5g|mobile network|telecom/i, image: image('telecom-tower.jpg') },
]

// Fallback pools (by category) for the rare story that matches none of the keywords above.
const newsCategoryPool: Record<string, string[]> = {
  'Artificial Intelligence': [image('ai-innovation.jpg'), image('cloud-network.jpg'), image('data-centre.jpg')],
  Awards: [image('research-papers.jpg'), image('telecom-tower.jpg')],
  Engineering: [image('engineering-team.jpg'), image('lab-testing.jpg')],
  'Health Tech': [image('safety-network.jpg'), image('education.jpg')],
  Innovation: [image('future-networks.jpg'), image('conference.jpg'), image('smart-city.jpg')],
  News: [image('city-infrastructure.jpg'), image('conference.jpg'), image('research-papers.jpg')],
  'Private Networks': [image('private-networks.jpg'), image('connectivity.jpg')],
  'Public Sector': [image('public-sector.jpg'), image('city-infrastructure.jpg')],
  Telecommunications: [image('mobile-networks.jpg'), image('telecom-tower.jpg'), image('urban-rail.jpg')],
}

function hashText(text: string) {
  let hash = 0
  for (let i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) >>> 0
  return hash
}

export function getBlogImage(slug: string, tag: string) {
  return blogSlugImages[slug] ?? newsCategoryImages[tag] ?? insightFallbackImage
}

export function getCaseStudyImage(slug: string, tag: string) {
  return caseStudySlugImages[slug] ?? caseStudyTagFallbacks[tag] ?? insightFallbackImage
}

export function getWhitePaperImage(slug: string, topic: string) {
  return whitePaperSlugImages[slug] ?? whitePaperTopicFallbacks[topic] ?? insightFallbackImage
}

export function getNewsImage(text: string, category: string) {
  const match = newsKeywordImages.find(({ pattern }) => pattern.test(text))
  if (match) return match.image
  const pool = newsCategoryPool[category] ?? [insightFallbackImage]
  return pool[hashText(text) % pool.length]
}
