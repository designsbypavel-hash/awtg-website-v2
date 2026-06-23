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

// Exact, hand-matched image for every current news story, keyed by its slug, so each
// of the 80+ "All News" cards shows a distinct photo that reflects what it's actually about.
const newsSlugImages: Record<string, string> = {
  'the-future-of-learning-is-here-inside-aruva-awtg-s-educational-ai-platform': image('ai-innovation.jpg'),
  'awtg-s-ai-journey-from-innovation-to-expansion': 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-and-lime-microsystems-announce-strategic-partnership-to-deliver-ai-ml-powered-software-defined-radio-solutions': image('open-ran.jpg'),
  'awtg-appointed-to-crown-commercial-service-technology-services-4-framework': image('public-sector.jpg'),
  'innovator-s-table-episode-5-matt-moayedi-awtg-director-of-engineering': image('engineering-team.jpg'),
  'innovator-s-table-episode-4-peter-najm-awtg-ai-product-manager': 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-is-ready-to-showcase-ai-centric-innovation-at-telecom-review-leaders-summit-2025': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-showcase-dsit-funded-5g-and-ai-innovation-at-the-future-network-programmes-event': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'innovator-s-table-episode-3-craig-bower-oxfordshire-county-council': image('rail-transport.jpg'),
  'innovator-s-table-episode-2-pete-compton-dsit-programme-manager': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'innovator-s-table-episode-1-dr-mike-short-awtg-s-executive-chairman': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-showcase-ai-innovation-at-telecom-review-leaders-summit-2025': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-at-connected-britain-2025-showcasing-innovation-collaboration-and-the-future-of-connectivity': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-featured-in-open-access-government-october-2025-edition': 'https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-at-portcomms-2025-driving-digital-innovation-in-the-port-industry': image('ports-logistics.jpg'),
  'sconda-project-closure-event': 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-celebrates-success-at-connected-britain-2025': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-granted-code-operator-status-by-ofcom': 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-leads-on-multiple-shortlisted-innovation-projects-at-connected-britain-awards-2025': image('research-papers.jpg'),
  'public-private-partnerships-accelerating-rural-rail-digital-transformation': image('urban-rail.jpg'),
  'awtg-at-euroxr-2025-driving-innovation-in-xr-ai-and-next-generation-connectivity': image('education.jpg'),
  'awtg-appoints-dr-mike-short-cbe-as-chairman': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-leads-milestone-open-ran-deployment-in-glasgow': 'https://images.unsplash.com/photo-1752159684779-0639174cdfac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-join-panel-on-the-future-of-enterprise-messaging-at-connected-britain-2025': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'digital-transformation-in-motion-across-the-borderlands-region': 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'digital-horizons-expanded-borderlands-5g-innovation-region-shortlisted-for-access-innovation': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'transforming-urban-connectivity-core-hdd-shortlisted-for-smart-places-award': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'driving-the-future-of-rail-england-s-connected-heartland-shortlisted-for-industrial-innovation-award': 'https://images.unsplash.com/photo-1758691736979-ff263c04b3d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'from-barrier-breaking-to-energy-saving-sconda-shortlisted-twice-at-connected-britain-awards-2025': 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-returns-as-a-major-sponsor-at-connected-britain-2025': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-demonstrates-5g-excellence-at-millbrook-proving-ground': 'https://images.unsplash.com/photo-1757980660089-354e059ae2fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-led-the-real-world-validation-of-ech-s-5g-railway-network-during-high-speed-millbrook-trials': 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-leads-groundbreaking-open-ran-deployment-in-central-glasgow': 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-s-impact-in-the-core-hdd-project-accelerating-5g-open-ran-for-high-density-urban-areas': image('mobile-networks.jpg'),
  'core-hdd-wins-at-small-cell-forum-awards-2025': image('telecom-tower.jpg'),
  'core-hdd-shortlisted-for-small-cell-forum-awards-2025': 'https://images.unsplash.com/photo-1742774101928-f7e92a471c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'abbey-alidoosti-to-share-insights-as-panelist-at-small-cells-world-summit-2025': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'introducing-awtg-s-evolved-network-in-a-box-powered-by-ran-automation': image('private-networks.jpg'),
  'awtg-at-the-echalliance-5-nations-ecosystem-gathering': image('safety-network.jpg'),
  'exclusive-with-awtg-ceo-building-the-middle-east-s-future-through-smart-connectivity': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-exhibit-at-scws-2025-showcasing-cutting-edge-innovations-in-connectivity-and-ai': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'hiper-ran-advancing-mobile-networks-with-awtg-s-expertise': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'unlocking-the-future-of-enterprise-connectivity-with-awtg-s-private-network-as-a-service': image('connectivity.jpg'),
  'awtg-celebrates-key-role-in-successful-completion-of-hiper-ran-project': 'https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-s-dsit-projects-recognised-at-the-future-networks-awards': 'https://images.unsplash.com/photo-1758873269013-d914addd5d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-supports-dsit-s-connected-reflections-live': 'https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-showcases-5g-and-ai-innovations-in-techforge-media-interview-at-iot-tech-expo-2025': 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-celebrates-excellence-at-cambridgeshire-county-council-s-employee-spotlight-awards': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-supports-historic-first-5g-augmented-reality-live-concert-in-cambridge': 'https://images.unsplash.com/photo-1677506050896-78bf4d8f5ce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-launches-5g-open-ran-lab': 'https://images.unsplash.com/photo-1745847768408-b7b83796cae6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-opens-network-operations-centre-to-innovation-companies': image('lab-testing.jpg'),
  'awtg-brings-pnaas-at-mwc-2025-the-next-evolution-in-private-5g-network-solutions': image('conference.jpg'),
  'awtg-to-showcase-cutting-edge-generative-ai-and-kai-telecom-ai-assistant-solutions-at-mwc-2025': 'https://images.unsplash.com/photo-1752155222944-675c2c3bfafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-introduce-its-multi-vendor-rapp-integration-at-mobile-world-congress-2025': 'https://images.unsplash.com/photo-1756830231350-3b501f63c5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-demonstrated-its-5g-technology-for-the-borderlands-5g-innovation-regions-programme': 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'collaboration-and-innovation-awtg-and-ech-s-5g-rail-project-meeting-over-luncheon': 'https://images.unsplash.com/photo-1684430598817-0c77ec7babfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-as-silver-sponsor-at-2025-iot-tech-expo-global-in-london': 'https://images.unsplash.com/photo-1698581075105-924b6c70b5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'dr-sanaz-soltani-joins-iot-tech-panel-to-discuss-ai-and-5g-innovations': 'https://images.unsplash.com/photo-1641243186881-575f6fdeac41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-represent-projects-at-dsit-and-uktin-s-the-role-of-connectivity-in-transforming-the-uk-event': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-successfully-showcased-cutting-edge-innovations-at-lamma-2025': 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-s-kai-ai-assistant-empowers-smes-through-cutting-edge-ai-solutions': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-showcases-agricultural-advancements-at-2025-lamma-show': 'https://images.unsplash.com/photo-1761839257961-4dce65b72d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-showcase-o-ran-innovations-at-2025-mobile-world-congress-in-barcelona': image('cloud-network.jpg'),
  'awtg-s-annual-christmas-dinner-celebrates-success-and-partnership': 'https://images.unsplash.com/photo-1758691737584-a8f17fb34475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-and-borderlands-5g-innovation-region-light-up-kielder-observatory-with-advanced-5g-connectivity': 'https://images.unsplash.com/photo-1461355114145-016691c9ee69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-deploy-5g-connectivity-for-england-s-connected-heartland-rail-project': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'borderlands-5g-innovation-region-team-s-cutting-edge-connectivity-at-glebe-park-christmas-market': image('smart-city.jpg'),
  'flexi-das-project-celebrates-groundbreaking-achievements-at-its-closing-event': image('future-networks.jpg'),
  'awtg-is-now-an-approved-g-cloud-14-uk-supplier': image('data-centre.jpg'),
  'dr-sanaz-soltani-featured-in-dsit-s-woman-in-digital-infrastructure-newsletter': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-s-ai-with-new-features-help-businesses-thrive': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'from-busy-to-breezy-awtg-s-kai-is-supercharging-businesses': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-at-the-forefront-of-connectivity-innovation-at-glasgow-event': image('city-infrastructure.jpg'),
  'awtg-to-speak-in-smart-and-connected-social-places-glasgow': 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-is-leading-the-charge-in-o-ran-innovation-with-dsit-projects': 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-showcases-cutting-edge-5g-solutions-at-portcomms-2024': 'https://images.unsplash.com/photo-1663079438222-7e525dcfef5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'itrustric-securing-open-ran-with-awtg-s-advanced-solution': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-to-deliver-5g-connectivity-rollout-across-borderlands-region': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-and-sconda-achieve-major-milestones-at-connected-britain-2024': 'https://images.unsplash.com/photo-1758873269117-d5845126928a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-leads-the-next-technical-phase-of-the-one-core-hdd-network': 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-exhibits-back-to-back-at-connected-britain-and-cambridge-tech-week': 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'awtg-is-delighted-to-be-part-of-core-project-at-cambridge-tech-week': 'https://images.unsplash.com/photo-1555529771-122e5d9f2341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'inside-awtg-s-london-lab-a-5g-and-o-ran-lab-creating-innovations-for-unrivaled-quality-of-service': 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
}

// Fallback for any future news item not yet in the exact map above: ordered most-specific-first,
// matched against the story's title + excerpt so the photo still reflects its actual content.
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

export function getNewsImage(slug: string, text: string, category: string) {
  const exact = newsSlugImages[slug]
  if (exact) return exact
  const match = newsKeywordImages.find(({ pattern }) => pattern.test(text))
  if (match) return match.image
  const pool = newsCategoryPool[category] ?? [insightFallbackImage]
  return pool[hashText(text) % pool.length]
}
