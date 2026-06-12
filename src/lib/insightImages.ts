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
  'high-street-recovery': image('public-sector.jpg'),
  'tot-service-assurance': image('performance-testing.jpg'),
  'central-london-benchmarking': image('mobile-networks.jpg'),
  'data-offloading-wifi': image('data-centre.jpg'),
  'akt-stability-testing': image('safety-network.jpg'),
  'rich-communications-suite': image('connectivity.jpg'),
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

const newsImageRotation = [
  image('ai-innovation.jpg'),
  image('conference.jpg'),
  image('engineering-team.jpg'),
  image('lab-testing.jpg'),
  image('urban-rail.jpg'),
  image('smart-city.jpg'),
  image('cloud-network.jpg'),
  image('telecom-tower.jpg'),
  image('private-networks.jpg'),
  image('public-sector.jpg'),
  image('future-networks.jpg'),
  image('mobile-networks.jpg'),
  image('open-ran.jpg'),
  image('data-centre.jpg'),
  image('ports-logistics.jpg'),
  image('research-papers.jpg'),
]

export function getBlogImage(slug: string, tag: string) {
  return blogSlugImages[slug] ?? newsCategoryImages[tag] ?? insightFallbackImage
}

export function getCaseStudyImage(slug: string, tag: string) {
  return caseStudySlugImages[slug] ?? caseStudyTagFallbacks[tag] ?? insightFallbackImage
}

export function getWhitePaperImage(slug: string, topic: string) {
  return whitePaperSlugImages[slug] ?? whitePaperTopicFallbacks[topic] ?? insightFallbackImage
}

export function getNewsImage(category: string, index = -1) {
  if (index >= 0) return newsImageRotation[index % newsImageRotation.length]
  return newsCategoryImages[category] ?? insightFallbackImage
}
