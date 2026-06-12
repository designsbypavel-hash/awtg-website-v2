import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faNewspaper, faPlay } from '@fortawesome/free-solid-svg-icons'
import InsightImage from '@/components/InsightImage'
import { getNewsImage } from '@/lib/insightImages'

type NewsItem = {
  title: string
  date: string
  category: string
  excerpt: string
  youtubeEmbedUrl?: string
}

export type { NewsItem }

export const cleanText = (value: string) => value
  .replace(/[’‘]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/[–—]/g, '-')
  .replace(/â€™/g, "'")
  .replace(/â€˜/g, "'")
  .replace(/â€œ|â€�/g, '"')
  .replace(/â€“|â€”/g, '-')
  .replace(/Â/g, '')

export const createNewsSlug = (title: string) => cleanText(title)
  .toLowerCase()
  .replace(/&/g, ' and ')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

export const getNewsHref = (item: NewsItem) => `/insights/news/${createNewsSlug(item.title)}`

export const newsItems: NewsItem[] = [
  {
    title: 'The Future of Learning is Here: Inside Aruva, AWTG’s Educational AI Platform',
    date: 'May 4, 2026',
    category: 'Artificial Intelligence',
    excerpt: 'Shaping the future of education with Aruva, AWTG’s AI-powered platform designed to connect institutions, educators and learners through smarter collaboration and digital-first learning.',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/L20VwApk4q4?feature=oembed',
  },
  {
    title: 'AWTG’s AI Journey: From Innovation to Expansion',
    date: 'April 29, 2026',
    category: 'Artificial Intelligence',
    excerpt: 'From early innovation to where AWTG is today, the company’s AI journey continues to push the boundaries of what is possible with technology, clarity and real-world impact.',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/BAvyHUxvlfM?feature=oembed',
  },
  {
    title: 'AWTG and Lime Microsystems Announce Strategic Partnership to Deliver AI/ML-Powered Software-Defined Radio Solutions',
    date: 'April 20, 2026',
    category: 'Innovation',
    excerpt: 'AWTG and Lime Microsystems announced a strategic partnership bringing artificial intelligence and machine learning capabilities to LimeSDR software-defined radio platforms.',
  },
  {
    title: 'AWTG Appointed to Crown Commercial Service Technology Services 4 Framework',
    date: 'December 23, 2025',
    category: 'Public Sector',
    excerpt: 'AWTG has been selected as a supplier on Crown Commercial Service’s Technology Services 4 framework, securing positions across key lots for public sector technology delivery.',
  },
  {
    title: 'Innovator’s Table Episode 5: Matt Moayedi, AWTG Director of Engineering',
    date: 'December 16, 2025',
    category: 'Engineering',
    excerpt: 'Matt Moayedi shares how AWTG builds flexible, future-ready digital infrastructure across sectors from smart cities and public networks to edge computing and AI.',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/jd4rkMayo_U?feature=oembed',
  },
  {
    title: 'Innovator’s Table Episode 4: Peter Najm, AWTG AI Product Manager',
    date: 'December 8, 2025',
    category: 'Artificial Intelligence',
    excerpt: 'Peter Najm discusses how AWTG uses AI to drive efficiency, automation and transparency across customer service, smart cities and other operational settings.',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/bupY1MLSTBw?feature=oembed',
  },
  {
    title: 'AWTG is Ready to Showcase AI-Centric Innovation at Telecom Review Leaders’ Summit 2025',
    date: 'November 28, 2025',
    category: 'Artificial Intelligence',
    excerpt: 'AWTG joined the global technology community as a Gold Sponsor at Telecom Review Leaders’ Summit 2025 in Dubai, highlighting AI-led innovation across connectivity and digital transformation.',
  },
  {
    title: 'AWTG to Showcase DSIT-Funded 5G and AI Innovation at the Future Network Programmes Event',
    date: 'November 28, 2025',
    category: 'Innovation',
    excerpt: 'AWTG prepared to demonstrate 5G solutions and AI-powered platforms at the Future Network Programmes: Legacy and Launchpad event in London.',
  },
  {
    title: 'Innovator’s Table Episode 3: Craig Bower, Oxfordshire County Council',
    date: 'November 25, 2025',
    category: 'Public Sector',
    excerpt: 'Craig Bower discusses how 5G trials along a major rail corridor can help shape the UK’s digital transport future, with AWTG as technology and delivery partner.',
  },
  {
    title: 'Innovator’s Table Episode 2: Pete Compton, DSIT Programme Manager',
    date: 'November 19, 2025',
    category: 'Telecommunications',
    excerpt: 'Pete Compton shares insights on Open RAN deployment at scale in dense UK cities and the public-private collaboration behind the SCONDA project.',
  },
  {
    title: 'Innovator’s Table Episode 1: Dr. Mike Short, AWTG’s Executive Chairman',
    date: 'November 18, 2025',
    category: 'Innovation',
    excerpt: 'Dr. Mike Short shares his vision for inclusive, sustainable digital transformation, from long-term social value to Open RAN, AI and national connectivity.',
  },
  {
    title: 'AWTG to Showcase AI Innovation at Telecom Review Leaders’ Summit 2025',
    date: 'November 10, 2025',
    category: 'Artificial Intelligence',
    excerpt: 'AWTG announced its participation at Telecom Review Leaders’ Summit 2025, demonstrating how AI-powered platforms are transforming operations across telecoms and public services.',
  },
  {
    title: 'AWTG at Connected Britain 2025: Showcasing Innovation, Collaboration, and the Future of Connectivity',
    date: 'October 29, 2025',
    category: 'Telecommunications',
    excerpt: 'Connected Britain 2025 brought AWTG’s technology to life through private 5G, FlexRAN and Kai AI demonstrations focused on practical connectivity outcomes.',
  },
  {
    title: 'AWTG Featured in Open Access Government October 2025 Edition',
    date: 'October 10, 2025',
    category: 'Public Sector',
    excerpt: 'AWTG was featured for its work on smart agents and smarter cities, highlighting AI-powered platforms and private network solutions for public sector innovation.',
  },
  {
    title: 'AWTG at PortComms 2025: Driving Digital Innovation in the Port Industry',
    date: 'October 8, 2025',
    category: 'Private Networks',
    excerpt: 'AWTG attended PortComms 2025 to explore how private 5G, advanced connectivity and wireless innovation are shaping digital transformation in ports.',
  },
  {
    title: 'SCONDA Project Closure Event',
    date: 'October 1, 2025',
    category: 'Telecommunications',
    excerpt: 'The SCONDA consortium celebrated the successful completion of the UK’s first dense urban Open RAN small cell deployment in Glasgow city centre.',
  },
  {
    title: 'AWTG Celebrates Success at Connected Britain 2025',
    date: 'September 26, 2025',
    category: 'Private Networks',
    excerpt: 'AWTG demonstrated a fully operational private 5G live setup on the exhibition floor, showcasing OFCOM-licensed N77 mid-band spectrum performance.',
  },
  {
    title: 'AWTG Granted Code Operator Status by Ofcom',
    date: 'September 19, 2025',
    category: 'Telecommunications',
    excerpt: 'Ofcom granted AWTG Code Operator status under the UK Electronic Communications Code, recognising AWTG as a trusted operator for communications networks.',
  },
  {
    title: 'AWTG Leads on Multiple Shortlisted Innovation Projects at Connected Britain Awards 2025',
    date: 'September 18, 2025',
    category: 'Innovation',
    excerpt: 'Four major projects involving AWTG were shortlisted at Connected Britain Awards 2025, reflecting the company’s role in digital infrastructure innovation.',
  },
  {
    title: 'Public-Private Partnerships: Accelerating Rural Rail Digital Transformation',
    date: 'September 9, 2025',
    category: 'Public Sector',
    excerpt: 'The England’s Connected Heartland 5G Railway initiative shows how local government coordination, national funding and private-sector expertise can transform rural rail connectivity.',
  },
  {
    title: 'AWTG at EuroXR 2025: Driving Innovation in XR, AI, and Next-Generation Connectivity',
    date: 'August 29, 2025',
    category: 'Innovation',
    excerpt: 'AWTG attended EuroXR 2025 as part of the SPIRIT consortium, supporting pioneering initiatives in immersive technologies and next-generation connectivity.',
  },
  {
    title: 'AWTG Appoints Dr. Mike Short CBE as Chairman',
    date: 'August 19, 2025',
    category: 'News',
    excerpt: 'AWTG announced Dr. Mike Short CBE as Chairman, bringing global telecommunications, satcomms, innovation and research experience to the company’s next phase.',
  },
  {
    title: 'AWTG Leads Milestone Open RAN Deployment in Glasgow',
    date: 'August 15, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG led the roll-out of a large-scale Open RAN network in Glasgow, marking a milestone for open and interoperable telecom infrastructure.',
  },
  {
    title: 'AWTG to Join Panel on the Future of Enterprise Messaging at Connected Britain 2025',
    date: 'August 13, 2025',
    category: 'Artificial Intelligence',
    excerpt: 'Peter Najm joined a Connected Britain panel exploring how verified channels, AI and trusted networks are transforming customer experiences.',
  },
  {
    title: 'Digital Transformation in Motion Across the Borderlands Region',
    date: 'August 11, 2025',
    category: 'Public Sector',
    excerpt: 'AWTG highlighted its role as technology and delivery partner for the Borderlands 5G Innovation Region programme across Scotland and northern England.',
  },
  {
    title: 'Digital Horizons Expanded: Borderlands 5G Innovation Region Shortlisted for Access Innovation',
    date: 'August 7, 2025',
    category: 'Public Sector',
    excerpt: 'The Borderlands 5G Innovation Region programme was shortlisted for Access Innovation at Connected Britain Awards, with AWTG as key technology and delivery partner.',
  },
  {
    title: 'Transforming Urban Connectivity: CORE HDD Shortlisted for Smart Places Award',
    date: 'August 6, 2025',
    category: 'Telecommunications',
    excerpt: 'The Cambridgeshire Open RAN Ecosystem consortium was shortlisted for the Smart Places Award, with AWTG supporting as technical lead partner.',
  },
  {
    title: 'Driving the Future of Rail: England’s Connected Heartland Shortlisted for Industrial Innovation Award',
    date: 'August 6, 2025',
    category: 'Private Networks',
    excerpt: 'England’s Connected Heartland was shortlisted for Industrial Innovation, demonstrating how 5G can improve rail, transport and rural infrastructure.',
  },
  {
    title: 'From Barrier-Breaking to Energy-Saving: SCONDA Shortlisted Twice at Connected Britain Awards 2025',
    date: 'August 5, 2025',
    category: 'Telecommunications',
    excerpt: 'The SCONDA Open RAN project was shortlisted in the Sustainability and Barrier Removal categories at Connected Britain Awards 2025.',
  },
  {
    title: 'AWTG Returns as a Major Sponsor at Connected Britain 2025',
    date: 'August 1, 2025',
    category: 'Innovation',
    excerpt: 'AWTG returned as a major sponsor at Connected Britain 2025, showcasing digital connectivity, telecoms engineering and AI-powered innovation.',
  },
  {
    title: 'AWTG Demonstrates 5G Excellence at Millbrook Proving Ground',
    date: 'July 29, 2025',
    category: 'Private Networks',
    excerpt: 'AWTG demonstrated 5G mobile private network capabilities at Millbrook Proving Ground as technology and delivery partner for England’s Connected Heartland.',
  },
  {
    title: 'AWTG Led the Real-World Validation of ECH’s 5G Railway Network During High-Speed Millbrook Trials',
    date: 'July 17, 2025',
    category: 'Private Networks',
    excerpt: 'AWTG led high-speed 5G railway network validation at Millbrook, demonstrating the potential of advanced connectivity for the future of rail.',
  },
  {
    title: 'AWTG Leads Groundbreaking Open RAN Deployment in Central Glasgow',
    date: 'June 25, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG hosted a milestone event at Glasgow City Chambers to showcase dense urban Open RAN technology integrated into an existing brownfield network.',
  },
  {
    title: 'AWTG’s Impact in the CORE HDD Project: Accelerating 5G Open RAN for High-Density Urban Areas',
    date: 'June 6, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG supported CORE HDD, a DSIT-funded initiative delivering a multi-vendor 5G Open RAN neutral host platform for high-demand urban areas.',
  },
  {
    title: 'CORE HDD Wins at Small Cell Forum Awards 2025',
    date: 'June 4, 2025',
    category: 'Awards',
    excerpt: 'The CORE HDD consortium, with AWTG as technical lead, won Outstanding Contribution to Emerging Technology at the Small Cell Forum Awards 2025.',
  },
  {
    title: 'CORE HDD Shortlisted for Small Cell Forum Awards 2025',
    date: 'May 29, 2025',
    category: 'Awards',
    excerpt: 'CORE HDD was shortlisted for Outstanding Contribution to Emerging Technologies at the Small Cell Forum Mobile Network Awards.',
  },
  {
    title: 'Abbey Alidoosti to Share Insights as Panelist at Small Cells World Summit 2025',
    date: 'May 21, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG’s CEO Abbey Alidoosti joined a deployment best practice panel focused on collaborative work with local authorities.',
  },
  {
    title: 'Introducing AWTG’s Evolved Network-in-a-Box – Powered by RAN Automation',
    date: 'May 20, 2025',
    category: 'Private Networks',
    excerpt: 'AWTG introduced an evolved Network-in-a-Box and Cells on Wheels solution for events, pop-up venues, rural communities and temporary deployments.',
  },
  {
    title: 'AWTG at the ECHAlliance 5 Nations Ecosystem Gathering',
    date: 'May 13, 2025',
    category: 'Health Tech',
    excerpt: 'AWTG joined the ECHAlliance gathering to discuss smart health, generative AI for healthcare and GDPR-compliant solutions for practitioners and hospitals.',
  },
  {
    title: 'Exclusive with AWTG CEO: Building the Middle East’s Future through Smart Connectivity',
    date: 'May 8, 2025',
    category: 'News',
    excerpt: 'AWTG CEO Abbey Alidoosti discussed engineering services, technology solutions and the company’s strategic focus on the Middle East with Telecom Review.',
  },
  {
    title: 'AWTG to Exhibit at SCWS 2025, Showcasing Cutting-Edge Innovations in Connectivity and AI',
    date: 'April 21, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG announced its participation at Small Cells World Summit 2025, showcasing DSIT-funded work in national connectivity and AI.',
  },
  {
    title: 'HiPer-RAN: Advancing Mobile Networks with AWTG’s Expertise',
    date: 'April 11, 2025',
    category: 'Telecommunications',
    excerpt: 'HiPer-RAN, led by the University of Surrey with AWTG expertise, advanced mobile network infrastructure through intelligent and high-performing RAN innovation.',
  },
  {
    title: 'Unlocking the Future of Enterprise Connectivity with AWTG’s Private Network as a Service',
    date: 'April 7, 2025',
    category: 'Private Networks',
    excerpt: 'AWTG’s PNaaS combines radio access, core, transport and enterprise IT network layers to simplify secure enterprise mobile connectivity.',
  },
  {
    title: 'AWTG Celebrates Key Role in Successful Completion of HiPer-RAN Project',
    date: 'April 4, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG marked its role as technical work packages lead in the successful completion of the HiPer-RAN project and Open RAN automation work.',
  },
  {
    title: 'AWTG’s DSIT Projects Recognised at The Future Networks Awards',
    date: 'March 25, 2025',
    category: 'Awards',
    excerpt: 'Several DSIT-funded projects involving AWTG were recognised at The Future Networks Awards, including HiPer-RAN winning the Incremental Innovation Award.',
  },
  {
    title: 'AWTG Supports DSIT’s Connected Reflections Live',
    date: 'March 18, 2025',
    category: 'Innovation',
    excerpt: 'AWTG supported Connected Reflections Live, a DSIT and UKTIN event exploring the UK innovation ecosystem and future network technology.',
  },
  {
    title: 'AWTG Showcases 5G and AI Innovations in TechForge Media Interview at IoT Tech Expo 2025',
    date: 'March 13, 2025',
    category: 'Artificial Intelligence',
    excerpt: 'Ian Vernon discussed AWTG’s 5G, generative AI and private network technologies in a TechForge Media interview at IoT Tech Expo 2025.',
  },
  {
    title: 'AWTG Celebrates Excellence at Cambridgeshire County Council’s Employee Spotlight Awards',
    date: 'March 13, 2025',
    category: 'Public Sector',
    excerpt: 'AWTG served as headline sponsor of Cambridgeshire County Council’s Employee Spotlight Awards, recognising local public service achievements.',
  },
  {
    title: 'AWTG Supports Historic First 5G Augmented Reality Live Concert in Cambridge',
    date: 'March 12, 2025',
    category: 'Innovation',
    excerpt: 'AWTG supported the first augmented reality live concert at Cambridge Corn Exchange through the CORE project’s 5G and Open RAN technology.',
  },
  {
    title: 'AWTG Launches 5G Open RAN Lab',
    date: 'March 2, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG opened its 5G Open RAN Lab in London for enterprises, start-ups and developers to test and trial O-RAN applications.',
  },
  {
    title: 'AWTG Opens Network Operations Centre to Innovation Companies',
    date: 'February 28, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG opened its Network Operations Centre to companies across the UK to support innovative telecom and IT network operations.',
  },
  {
    title: 'AWTG Brings PNaaS at MWC 2025 – The Next Evolution in Private 5G Network Solutions',
    date: 'February 28, 2025',
    category: 'Private Networks',
    excerpt: 'AWTG introduced Private Network as a Service at MWC 2025 to simplify and accelerate enterprise mobile private network adoption.',
  },
  {
    title: 'AWTG to Showcase Cutting-Edge Generative AI and Kai Telecom AI Assistant Solutions at MWC 2025',
    date: 'February 25, 2025',
    category: 'Artificial Intelligence',
    excerpt: 'AWTG announced generative AI solutions and the Kai Telecom AI Assistant for Mobile World Congress 2025.',
  },
  {
    title: 'AWTG to Introduce its Multi-Vendor rApp Integration at Mobile World Congress 2025',
    date: 'February 24, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG prepared to showcase multi-vendor rApp integration at MWC 2025, supporting intelligent and interoperable network operations.',
  },
  {
    title: 'AWTG Demonstrated its 5G Technology for the Borderlands 5G Innovation Regions Programme',
    date: 'February 17, 2025',
    category: 'Public Sector',
    excerpt: 'AWTG hosted the Borderlands 5GIR programme team at its laboratory, demonstrating advanced technologies aligned to DSIT-funded project objectives.',
  },
  {
    title: 'Collaboration and Innovation: AWTG and ECH’s 5G Rail Project Meeting over Luncheon',
    date: 'February 4, 2025',
    category: 'Private Networks',
    excerpt: 'AWTG hosted England’s Connected Heartland partners at its lab to discuss 5G rail project goals, future plans and private network capabilities.',
  },
  {
    title: 'AWTG as Silver Sponsor at 2025 IoT Tech Expo Global in London',
    date: 'February 3, 2025',
    category: 'Innovation',
    excerpt: 'AWTG joined IoT Tech Expo Global as Silver Sponsor, showcasing private network and IoT technology powered by its AI platform.',
  },
  {
    title: 'Dr. Sanaz Soltani Joins IoT Tech Panel to Discuss AI and 5G Innovations',
    date: 'January 23, 2025',
    category: 'Artificial Intelligence',
    excerpt: 'Dr. Sanaz Soltani joined an IoT Tech Expo panel to discuss how AI and 5G are driving innovation for customers and connected industries.',
  },
  {
    title: 'AWTG to Represent Projects at DSIT and UKTIN’s The Role of Connectivity in Transforming the UK Event',
    date: 'January 23, 2025',
    category: 'Public Sector',
    excerpt: 'AWTG represented the Borderlands 5G Innovation Region at a DSIT and UKTIN event on connectivity’s role in transforming UK industries and services.',
  },
  {
    title: 'AWTG Successfully Showcased Cutting-edge Innovations at Lamma 2025',
    date: 'January 20, 2025',
    category: 'Innovation',
    excerpt: 'AWTG showcased DSIT-funded projects at Lamma 2025, including Borderlands 5GIR and England’s Connected Heartland railway innovation.',
  },
  {
    title: 'AWTG’s Kai AI Assistant Empowers SMEs Through Cutting-Edge AI Solutions',
    date: 'January 16, 2025',
    category: 'Artificial Intelligence',
    excerpt: 'AWTG highlighted how Kai helps SMEs tackle complex challenges and apply transformative AI across multiple industries.',
  },
  {
    title: 'AWTG Showcases Agricultural Advancements at 2025 Lamma Show',
    date: 'January 15, 2025',
    category: 'Innovation',
    excerpt: 'AWTG attended Lamma Show 2025 with Borderlands 5GIR partners, showcasing advanced technologies for agriculture and rural connectivity.',
  },
  {
    title: 'AWTG to Showcase O-RAN Innovations at 2025 Mobile World Congress in Barcelona',
    date: 'January 10, 2025',
    category: 'Telecommunications',
    excerpt: 'AWTG announced plans to showcase O-RAN innovations and SCONDA consortium work at Mobile World Congress 2025.',
  },
  {
    title: 'AWTG’s Annual Christmas Dinner Celebrates Success and Partnership',
    date: 'December 20, 2024',
    category: 'News',
    excerpt: 'AWTG hosted its annual Christmas Dinner at Home House in London, bringing together teams and clients to celebrate partnership and success.',
  },
  {
    title: 'AWTG and Borderlands 5G Innovation Region Light Up Kielder Observatory with Advanced 5G Connectivity',
    date: 'December 19, 2024',
    category: 'Public Sector',
    excerpt: 'AWTG and the Borderlands 5GIR team implemented a 5G O-RAN pop-up site at Kielder Observatory to demonstrate regional connectivity use cases.',
  },
  {
    title: 'AWTG to Deploy 5G Connectivity for England’s Connected Heartland Rail Project',
    date: 'December 11, 2024',
    category: 'Private Networks',
    excerpt: 'AWTG was selected to deliver 5G broadband connectivity along the Bicester Village to Bletchley railway line for England’s Connected Heartland.',
  },
  {
    title: 'Borderlands 5G Innovation Region Team’s Cutting-Edge Connectivity at Glebe Park Christmas Market',
    date: 'December 4, 2024',
    category: 'Public Sector',
    excerpt: 'AWTG and Borderlands 5GIR partners showcased wireless technology at Glebe Park Christmas Market as part of the DSIT-funded innovation region.',
  },
  {
    title: 'Flexi-DAS Project Celebrates Groundbreaking Achievements at its Closing Event',
    date: 'November 13, 2024',
    category: 'Telecommunications',
    excerpt: 'The Flexi-DAS project marked its closing event, recognising achievements from AWTG, University of Surrey, DSIT and project partners.',
  },
  {
    title: 'AWTG is now an approved G-Cloud 14 UK supplier',
    date: 'November 11, 2024',
    category: 'Public Sector',
    excerpt: 'AWTG announced approval as a G-Cloud 14 supplier, supporting streamlined cloud procurement for UK public sector organisations.',
  },
  {
    title: 'Dr. Sanaz Soltani Featured in DSIT’s Woman in Digital Infrastructure Newsletter',
    date: 'November 1, 2024',
    category: 'News',
    excerpt: 'AWTG recognised Dr. Sanaz Soltani’s feature in DSIT’s Women in Digital Infrastructure newsletter and her contribution to DSIT-funded projects.',
  },
  {
    title: 'AWTG’s AI with New Features Help Businesses Thrive',
    date: 'October 24, 2024',
    category: 'Artificial Intelligence',
    excerpt: 'AWTG unveiled new Kai capabilities designed to help businesses make smarter decisions, automate workflows and optimise operations.',
  },
  {
    title: 'From Busy to Breezy: AWTG’s Kai is Supercharging Businesses',
    date: 'October 24, 2024',
    category: 'Artificial Intelligence',
    excerpt: 'Kai introduced customisation features that allow businesses to tailor their AI assistant persona, colours, logo and customer-facing experience.',
  },
  {
    title: 'AWTG at the Forefront of Connectivity Innovation at Glasgow Event',
    date: 'October 21, 2024',
    category: 'Telecommunications',
    excerpt: 'AWTG presented connectivity developments at the Smart and Connected Social Places event at Glasgow City Chambers.',
  },
  {
    title: 'AWTG to Speak in Smart and Connected Social Places – Glasgow',
    date: 'October 17, 2024',
    category: 'Telecommunications',
    excerpt: 'AWTG announced speaker participation at Glasgow’s Smart and Connected Social Places event, discussing SCONDA and urban connectivity.',
  },
  {
    title: 'AWTG is Leading the Charge in O-RAN Innovation with DSIT Projects',
    date: 'October 11, 2024',
    category: 'Telecommunications',
    excerpt: 'AWTG highlighted its role in SCONDA, CORE HDD and HiPer-RAN, advancing Open RAN interoperability and innovation through DSIT-funded programmes.',
  },
  {
    title: 'AWTG Showcases Cutting-Edge 5G Solutions at PortComms 2024',
    date: 'October 9, 2024',
    category: 'Private Networks',
    excerpt: 'AWTG exhibited private and enterprise network innovations across telecoms, AI and IoT at PortComms 2024.',
  },
  {
    title: 'iTRUSTRIC – Securing Open RAN with AWTG’s Advanced Solution',
    date: 'October 7, 2024',
    category: 'Telecommunications',
    excerpt: 'AWTG introduced iTRUSTRIC, a security solution designed to protect Open RAN networks, improve visibility and support compliance.',
  },
  {
    title: 'AWTG to Deliver 5G Connectivity Rollout Across Borderlands Region',
    date: 'October 3, 2024',
    category: 'Public Sector',
    excerpt: 'AWTG was appointed technology and delivery partner for a 5G project across the Borderlands region spanning southern Scotland and northern England.',
  },
  {
    title: 'AWTG and SCONDA Achieve Major Milestones at Connected Britain 2024',
    date: 'October 1, 2024',
    category: 'Telecommunications',
    excerpt: 'AWTG and SCONDA marked major milestones at Connected Britain 2024, showcasing Open RAN innovation and project progress.',
  },
  {
    title: 'AWTG Leads the Next Technical Phase of the ONE CORE HDD Network',
    date: 'September 19, 2024',
    category: 'Telecommunications',
    excerpt: 'AWTG announced the next phase of ONE CORE HDD, moving from initial testing to live operations with the network fully activated.',
  },
  {
    title: 'AWTG Exhibits Back-to-Back at Connected Britain and Cambridge Tech Week',
    date: 'September 13, 2024',
    category: 'Innovation',
    excerpt: 'AWTG exhibited at Connected Britain and Cambridge Tech Week, highlighting telecoms innovation and technical leadership.',
  },
  {
    title: 'AWTG is Delighted to be Part of CORE Project at Cambridge Tech Week',
    date: 'September 11, 2024',
    category: 'Telecommunications',
    excerpt: 'AWTG participated in Cambridge Tech Week as a consortium partner and technical lead of the CORE Open RAN project.',
  },
  {
    title: 'Inside AWTG’s London Lab: A 5G and O-RAN Lab Creating Innovations for Unrivaled Quality of Service',
    date: 'September 2, 2024',
    category: 'Telecommunications',
    excerpt: 'AWTG highlighted its London lab and work in 5G O-RAN systems integration, quality of service and next-generation telecom innovation.',
  },
]

export const categoryColours: Record<string, string> = {
  'Artificial Intelligence': 'bg-[#228DC1]/10 text-[#228DC1]',
  Awards: 'bg-amber-50 text-amber-700',
  Engineering: 'bg-slate-100 text-slate-700',
  'Health Tech': 'bg-rose-50 text-rose-700',
  Innovation: 'bg-indigo-50 text-indigo-700',
  News: 'bg-[#0a1628]/8 text-[#0a1628]',
  'Private Networks': 'bg-emerald-50 text-emerald-700',
  'Public Sector': 'bg-violet-50 text-violet-700',
  Telecommunications: 'bg-sky-50 text-sky-700',
}

const featured = newsItems[0]
const spotlight = newsItems.slice(1, 4)

const newsVideoUrlsBySlug: Record<string, string> = {
  [createNewsSlug('The Future of Learning is Here: Inside Aruva, AWTG Educational AI Platform')]: 'https://www.youtube.com/embed/L20VwApk4q4?feature=oembed',
  [createNewsSlug("AWTG's AI Journey: From Innovation to Expansion")]: 'https://www.youtube.com/embed/BAvyHUxvlfM?feature=oembed',
  [createNewsSlug("Innovator's Table Episode 5: Matt Moayedi, AWTG Director of Engineering")]: 'https://www.youtube.com/embed/jd4rkMayo_U?feature=oembed',
  [createNewsSlug("Innovator's Table Episode 4: Peter Najm, AWTG AI Product Manager")]: 'https://www.youtube.com/embed/bupY1MLSTBw?feature=oembed',
  [createNewsSlug('Digital Transformation in Motion Across the Borderlands Region')]: 'https://www.youtube.com/embed/wCm4Joz-fsk?feature=oembed',
  [createNewsSlug('AWTG Demonstrates 5G Excellence at Millbrook Proving Ground')]: 'https://www.youtube.com/embed/Td8h9IA6d_k?feature=oembed',
  [createNewsSlug('AWTG Showcases 5G and AI Innovations in TechForge Media Interview at IoT Tech Expo 2025')]: 'https://www.youtube.com/embed/OzSouZ-tWp8?feature=oembed',
  [createNewsSlug('AWTG at Connected Britain 2025: Showcasing Innovation, Collaboration, and the Future of Connectivity')]: 'https://www.youtube.com/embed/mvU4CO9D_LU?feature=oembed',
  [createNewsSlug('AWTG Launches 5G Open RAN Lab')]: 'https://www.youtube.com/embed/-_4iIZ-KgPw?feature=oembed',
  [createNewsSlug("AWTG's AI with New Features Help Businesses Thrive")]: 'https://www.youtube.com/embed/HmfT7lvOSsY?feature=oembed',
  [createNewsSlug('AWTG is Delighted to be Part of CORE Project at Cambridge Tech Week')]: 'https://www.youtube.com/embed/qbIXZ3XAVuM?feature=oembed',
}

export const getNewsVideoUrl = (item: NewsItem) => item.youtubeEmbedUrl ?? newsVideoUrlsBySlug[createNewsSlug(item.title)]

export default function InsightsNewsPage() {
  const activeCategory = 'All'

  const filteredNews = useMemo(
    () => activeCategory === 'All' ? newsItems : newsItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const visibleNews = filteredNews.filter((item) => item.title !== featured.title)

  return (
    <>
      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16 items-end">
            <div>
              <h1 className="font-serif-display text-[#0a1628] leading-[1.1] mb-6">
                Latest news from AWTG.
              </h1>
              <p className="text-[#0a1628]/60 text-[18px] font-normal max-w-2xl leading-[1.7]">
                Company announcements, project milestones, awards, media coverage and event updates from AWTG’s work across AI, 5G, Open RAN, private networks and public sector innovation.
              </p>
            </div>
            <div className="border-l-2 border-[#228DC1] pl-6 py-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/55 mb-3">Coverage</p>
              <p className="font-h2 text-[#0a1628]">{newsItems.length}</p>
              <p className="text-[#0a1628]/60 text-sm leading-relaxed mt-2">news updates from the AWTG newsroom archive.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 border border-gray-100">
            <Link to={getNewsHref(featured)} className="group lg:col-span-3 p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/60">Featured</span>
                <span className="w-8 h-px bg-gray-200" />
                <span className={`text-[13px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 ${categoryColours[featured.category]}`}>
                  {featured.category}
                </span>
              </div>
              <h2 className="font-h2 text-[#0a1628] mb-5 group-hover:text-[#228DC1] transition-colors">
                {cleanText(featured.title)}
              </h2>
              <p className="text-[#0a1628]/70 text-[16px] font-normal leading-[1.8] max-w-2xl mb-9">
                {cleanText(featured.excerpt)}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 text-[#0a1628]/60 text-xs border-t border-gray-100 pt-7">
                <span className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="w-3 h-3" /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-2 text-[#228DC1] font-semibold uppercase tracking-[0.12em]">
                  Read story                </span>
              </div>
            </Link>
            <div className="lg:col-span-2 bg-[#f0f7fc] border border-[#228DC1]/15 p-8 lg:p-10 flex flex-col justify-between min-h-[360px]">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#228DC1] mb-7">Latest briefings</p>
                <div className="space-y-6">
                  {spotlight.map((item) => (
                    <Link key={item.title} to={getNewsHref(item)} className="group block border-t border-[#228DC1]/15 pt-5">
                      <p className="text-[#0a1628]/45 text-xs mb-2">{item.date}</p>
                      <h3 className="font-h5 text-[#0a1628] group-hover:text-[#228DC1] transition-colors">{cleanText(item.title)}</h3>
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 text-[#228DC1] text-sm font-semibold hover:text-[#1a7fa8] transition-colors">
                Media enquiries              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="type-label text-[#0a1628]/55 mb-3">All News</p>
              <h2 className="font-h2 text-[#0a1628]">
                {activeCategory === 'All' ? 'Media coverage and announcements.' : activeCategory}
              </h2>
            </div>
            <p className="text-[#0a1628]/60 text-sm">{filteredNews.length} items</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {visibleNews.map((item, index) => {
              const isWide = index === 0
              const isAccent = index === 4 || index === 10 || index === 16
              const hasVideo = !!getNewsVideoUrl(item)

              if (isWide) {
                return (
                  <Link
                    key={`${item.title}-${item.date}`}
                    to={getNewsHref(item)}
                    className="group xl:col-span-2 md:col-span-2 relative overflow-hidden min-h-[360px] flex flex-col justify-end"
                  >
                    <InsightImage src={getNewsImage(item.category, index)} alt={cleanText(item.title)} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                    {hasVideo && (
                      <div className="absolute top-5 left-5 h-10 w-10 bg-white/15 border border-white/25 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPlay} className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="relative p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 bg-white/15 text-white border border-white/25">
                          {item.category}
                        </span>
                        <span className="text-white/50 text-xs">{item.date}</span>
                      </div>
                      <h3 className="font-h4 text-white mb-3 group-hover:text-[#7ac4e0] transition-colors">{cleanText(item.title)}</h3>
                      <p className="text-white/70 text-sm leading-relaxed max-w-xl">{cleanText(item.excerpt)}</p>
                    </div>
                  </Link>
                )
              }

              if (isAccent) {
                return (
                  <Link
                    key={`${item.title}-${item.date}`}
                    to={getNewsHref(item)}
                    className="group bg-[#0a1628] flex flex-col p-8 min-h-[300px]"
                  >
                    <div className="flex items-center gap-3 mb-auto">
                      {hasVideo && <FontAwesomeIcon icon={faPlay} className="w-3.5 h-3.5 text-[#7ac4e0]" />}
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 bg-white/10 text-white/80">
                        {item.category}
                      </span>
                    </div>
                    <div className="mt-10">
                      <h3 className="font-h5 text-white mb-3 group-hover:text-[#7ac4e0] transition-colors">{cleanText(item.title)}</h3>
                      <p className="text-white/60 text-[13px] leading-[1.7] mb-5">{cleanText(item.excerpt)}</p>
                      <div className="flex items-center gap-2 text-[#7ac4e0] text-xs font-semibold pt-4 border-t border-white/10">
                        {hasVideo ? 'Watch story' : 'Read story'}
                      </div>
                    </div>
                  </Link>
                )
              }

              return (
                <Link
                  key={`${item.title}-${item.date}`}
                  to={getNewsHref(item)}
                  className="group bg-white border border-gray-100 hover:border-[#228DC1] transition-all overflow-hidden"
                >
                  <div className="h-44 relative overflow-hidden">
                    <InsightImage src={getNewsImage(item.category, index)} alt={cleanText(item.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 h-9 w-9 bg-white/90 flex items-center justify-center text-[#228DC1]">
                      <FontAwesomeIcon icon={hasVideo ? faPlay : faNewspaper} className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-[12px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 ${categoryColours[item.category] ?? 'bg-[#0a1628]/8 text-[#0a1628]'}`}>
                        {item.category}
                      </span>
                      <span className="text-[#0a1628]/50 text-xs">{item.date}</span>
                    </div>
                    <h3 className="font-h5 text-[#0a1628] mb-3 group-hover:text-[#228DC1] transition-colors">
                      {cleanText(item.title)}
                    </h3>
                    <p className="text-[#0a1628]/60 text-[14px] font-normal leading-[1.7]">
                      {cleanText(item.excerpt)}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[#228DC1] text-xs font-semibold uppercase tracking-[0.12em]">
                      {hasVideo ? 'Watch story' : 'Read story'}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="type-label text-[#228DC1] mb-4">Talk to AWTG</p>
            <h2 className="font-h2 text-[#0a1628]">
              Don’t see what<br />you’re looking for?
            </h2>
            <p className="text-[#0a1628]/60 text-sm leading-relaxed mt-4 max-w-xl">
              Speak to the team about media enquiries, project updates, partnerships or the latest work across AWTG’s innovation portfolio.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-7 py-3.5 bg-[#228DC1] text-white text-sm font-medium hover:bg-[#1a6e99] transition-all inline-flex items-center gap-2"
          >
            Get in touch          </Link>
        </div>
      </section>
    </>
  )
}
