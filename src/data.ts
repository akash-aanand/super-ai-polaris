
import { 
  Brain, 
  Cpu, 
  Globe, 
  GraduationCap, 
  Layout, 
  Lightbulb, 
  Users, 
  Zap, 
  BarChart, 
  ShieldCheck, 
  Code, 
  BookOpen, 
  Bot, 
  Terminal, 
  Server, 
  Database, 
  Lock, 
  Workflow, 
  Factory, 
  Building2, 
  Network, 
  MessageSquare, 
  Smartphone, 
  Layers, 
  HeartPulse, 
  Scale 
} from 'lucide-react';
import { BlogPost, ServicePageData } from './types';

// NOTE: Using local images from /img/ folder. Ensure these files exist in the public directory.

export const NAV_ITEMS = [
  { label: 'About Us', path: '/about', children: [
    { label: 'Company Profile', path: '/about' },
    { label: 'Leadership Team', path: '/founder' },
    { label: 'Blog', path: '/blog' },
  ]},
  { label: 'Education Solutions', path: '/services', children: [
    { label: 'K-12 AI Programs', path: '/services/k12' },
    { label: 'Higher Education', path: '/services/higher-ed' },
    { label: 'Super AI Labs', path: '/services/labs' },
    { label: 'AI Textbooks', path: '/services/textbooks' },
    { label: 'Teacher Training', path: '/services/teacher-training' },
  ]},
  { label: 'Enterprise Solutions', path: '/services/corporate', children: [
    { label: 'AI Chatbots', path: '/services/chatbots' },
    { label: 'Sector Specific', path: '/industries' },
  ]},
  { label: 'Partners', path: '/partners' },
  { label: 'Research', path: '/research' },
  { label: 'Contact Us', path: '/contact' },
];

export const TRUSTED_ORGS = [
  "AICTE", "Ministry of Education", "CBSE", "ICAR", "IARI", 
  "JNU", "BHU", "IIT Delhi", "Directorate of Education", 
  "Kendriya Vidyalaya", "AWS", "Google", "Microsoft", 
  "IBM", "LinkedIn", "Rajasthan Knowledge Corp"
];

// --- TEAM MEMBERS ---
export const TEAM_MEMBERS = [
    {
        name: "Jaydev Rath",
        role: "Founder & Director",
        bio: "Former Microsoft executive and an AI visionary with 20+ years of experience in cloud, AI, and public sector transformation. He leads the company's innovation agenda, product design, and public partnerships.",
        image: "./public/img/JaydevR.png"
    },
    {
        name: "Sahil Agarwal",
        role: "National Manager",
        bio: "Ex-Oracle, leads national deployment and rollout of AI labs and training initiatives with education and skill development departments.",
        image: "/img/SahilAgrawal.png"
    },
    {
        name: "Rajat Sahai",
        role: "Entrepreneur and business leader",
        bio: "Entrepreneur and business leader with 15+ years of experience in infrastructure, real estate, legal, and tech sectors. He drives strategic growth across multiple ventures, including Sparta Global Projects and Pintail Group, focusing on innovation, operations, and multi-sector expansion.",
        image: "/img/Rajat.png"
        
    },
    {
        name: "Ashok Pamadi",
        role: "Former CEO of NASSCOM Foundation",
        bio: "Purpose-driven leader with over 30 years in IT, diversity & inclusion, and social development. Former CEO of NASSCOM Foundation; currently advising HerKey and several social impact organizations.",
        image: "/img/Ashokpamadi.png"
    },
    {
        name: "Dhirendra Khadelwal",
        role: "Digital transformation expert",
        bio: "Digital transformation expert and NIT Rourkela alumnus. Founder and Managing Director of E Square System & Technologies, leading innovation in tech consulting and system integration.",
        image: "/img/DhirendraK.png"

    },
    {
        name: "Swapnashree Rath",
        role: "Director",
        bio: "Director and Individual Promoter at Super AI Polaris Pvt Ltd, contributing to advancements in AI-driven solutions and strategic business initiatives",
        image: "/img/Swapnashree.png"

    },
    {
        name: "Sanjay Mishra",
        role: "Chartered Accountant",
        bio: "Chartered Accountant with extensive experience in finance and compliance, providing strategic financial leadership across various sectors.",
        image: "/img/sanjayMishra.png"
    },
    {
        name: "Anu Joseph",
        role: "Master Trainer",
        bio: "Master Trainer and Training & Content Lead with 10+ years of experience in instructional design, content development, and capacity building. She drives impactful learning experiences through innovative training strategies.",
        image: "/img/AnuJoseph.png"
    },
    {
        name: "T. S. Sridhar",
        role: "Business Development Partner",
        bio: "Brings strategic leadership from past roles at Microsoft, Nokia, and Gillette; instrumental in scaling partnerships and market access",
        image: "/img/T.S.Sirdhar.png"
    }
];

// --- ENTERPRISE PILLARS (3D Scroll Content) ---
export const ENTERPRISE_CONTENT = [
  {
    id: "neura-platform",
    title: "SUPER AI - NEURA",
    subtitle: "Unified Intelligence Suite",
    description: "Your Unified Suite for Private, Offline, and Intelligent AI Interactions. SUPER AI - NEURA is a privacy-first AI platform designed to redefine how organizations process information, interact with customers, and automate workflows — all offline.",
    features: [
      "Offline Operation – No Internet",
      "Zero Data Exposure",
      "Memory-aware Sessions",
      "20+ Languages + Semantic Search"
    ],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=1600",
    stats: "100% Privacy"
  },
  {
    id: "ai-agents",
    title: "Enterprise AI Agent Solutions",
    subtitle: "Workforce Automation",
    description: "Deploy cognitive agents that understand goals, break down tasks, and execute workflows. From CRM automation to complex scheduling, our agents act as digital employees.",
    features: [
      "Cognitive Agents (Multi-modal)",
      "Autonomous Task Execution",
      "AI Tutors & Learning Agents",
      "Domain-Specific Agents"
    ],
    icon: Bot,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1600",
    stats: "24/7 Uptime"
  },
  {
    id: "robotics",
    title: "Enterprise Robotics Solutions",
    subtitle: "Physical AI Integration",
    description: "Bridge the digital and physical worlds with AI on four legs and intelligent assistants. Our robotics solutions bring autonomy to surveillance, logistics, and interaction.",
    features: [
      "Quadruped Robot – AI on Four Legs",
      "Humanoid Robot – Intelligent Assistant",
      "Robotic Arm (Coming Soon)",
      "Visual SLAM & LiDAR"
    ],
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600",
    stats: "L4 Autonomy"
  }
];

// --- NEURA PRODUCT MODULES ---
export const NEURA_MODULES = [
  {
    title: "DLLM – NeuraDesk",
    description: "Understands PDFs, Word, Excel. Extracts insights, answers questions, and summarizes documents.",
    features: ["100% local compliance processing", "Handles 1000+ page manuals"],
    icon: Database,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "SLM – Neura-Edge",
    description: "Embedded AI for edge use. Enables offline voice, chat, and sensor automation with multilingual deployment readiness.",
    features: ["Speech-to-intent offline", "Local terminals & IoT sensors"],
    icon: Server,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "AI Chatbot Assistant",
    description: "Supports websites, WhatsApp, and apps. Features natural language processing and API triggers for 24/7 support.",
    features: ["Lead generation & feedback", "Real-time Actions (No Cloud)"],
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600"
  }
];

export const NEURA_KEY_FEATURES = [
    "Offline operation (no internet needed)",
    "Multi-file & messaging platform support",
    "Memory-aware sessions",
    "20+ language support & semantic search",
    "Zero data exposure & built-in encryption",
    "Easy API & tool integration"
];

export const AGENT_SOLUTIONS_DETAILS = [
    {
        title: "Cognitive Agents",
        features: ["Multi-modal input: text, voice, sensors", "CRM, email, and scheduling automation", "Contextual interaction with memory", "API integration with ERP, CRM, HRMS"]
    },
    {
        title: "Autonomous Task Agents",
        features: ["Task breakdown, execution, and correction", "LLM + rule-based automation", "Decision-making with tools like Slack, Jira, Zapier, Excel"]
    },
    {
        title: "AI Tutors & Learning Agents",
        features: ["Personalized learning, quizzes", "Voice-based Q&A and navigation", "LMS & classroom support", "NEP 2020 & AICTE aligned"]
    },
    {
        title: "Developer & Domain-Specific Agents",
        features: ["Custom agents for Healthcare, Legal", "Transport & Finance optimization", "Logistics automation"]
    }
];

export const ROBOTICS_SOLUTIONS_DETAILS = [
    { title: "Quadruped Robot", desc: "AI on Four Legs." },
    { title: "Humanoid Robot", desc: "Intelligent Assistant." },
    { title: "Robotic Arm", desc: "Coming Soon." }
];

// --- EDUCATIONAL LABS (Agents & Robotics) ---
export const LABS_DATA = [
  {
    category: "AI Agent Lab",
    title: "School Education",
    items: [
      "Voice/chatbot agents",
      "Block-based logic builders",
      "NLP & emotion detection",
      "Simulated AI classroom scenarios"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
  },
  {
    category: "AI & Robotics Labs",
    title: "School Education (Grades 6–12)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    items: [
      "DIY kits: obstacle avoiders, line followers",
      "Object/face recognition modules",
      "Block-based & Python coding",
      "NEP-aligned curriculum + LMS"
    ]
},
  {
    category: "Skill Development",
    title: "Higher Education",
    items: [
      "Humanoids, IoT kits",
      "Raspberry Pi, Arduino, ESP32",
      "SLAM, speech AI, cloud simulation",
      "Industry-ready certifications"
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  }
];

// --- DEPLOYMENT & ECOSYSTEM DATA ---
export const DEPLOYMENT_STATS = [
  { label: "Industries", value: "IT, BPO, BFSI, Industry 4.0", icon: Factory },
  { label: "Public Sector", value: "Smart Governance, Utilities", icon: Building2 },
  { label: "Education", value: "E-learning, Skill Labs", icon: GraduationCap },
];

export const ECOSYSTEM_PARTNERS = [
  "LangChain", "Auto-GPT", "OpenAI", "Microsoft", "Google Cloud", "IBM Watson", "CBSE", "AICTE", "IITs", "Super AI R&D"
];

// --- CUSTOM SOLUTIONS DATA ---
export const CUSTOM_SOLUTIONS_DATA = [
  {
    question: "End-to-End Solution Development",
    answer: "We handle the entire lifecycle from problem definition to deployment, ensuring your custom AI solution fits perfectly into your existing infrastructure."
  },
  {
    question: "Domain-Specific AI Models",
    answer: "Tailored predictive models for maintenance, computer vision for surveillance, and NLP for specialized legal or medical documents. Includes predictive analytics and CV."
  },
  {
    question: "Legacy & IoT System Integration",
    answer: "Seamlessly connect modern AI agents with legacy ERP systems and industrial IoT sensors without overhauling your tech stack."
  },
  {
    question: "Agile Prototyping & Deployment",
    answer: "Rapid MVP development followed by scalable deployment on your preferred cloud or on-premise servers."
  },
  {
    question: "Use Cases",
    answer: "Predictive maintenance, CRM automation, smart logistics, surveillance, quality checks."
  }
];

export const BOOK_SERIES = [
  {
    grade: "1st",
    title: "Tiny Techies",
    subtitle: "Coding and AI for Young Learners",
    color: "bg-[#89CFF0]", // Sky Blue
    gradeColor: "#EC4899", // Pink
    nepColor: "#EC4899",   // Pink
    image: "/img/bookCover1.png"
  },
  {
    grade: "2st",
    title: "Smart Start",
    subtitle: "Coding and AI for Young Learners",
    image: "/img/bookCover2.png"
  },
  {
    grade: "3rd",
    title: "Digital Buddies",
    subtitle: "Computers and AI for Beginners",
    image: "/img/bookCover3.png"
  },
  {
    grade: "4th",
    title: "Digital Buddies",
    subtitle: "Computers and AI for Beginners",
    image: "/img/bookCover4.png"
  },
  {
    grade: "5th",
    title: "Tech Explorers",
    subtitle: "A Journey into Computers and AI",
    image: "/img/bookCover5.png"
  },
  {
    grade: "6th",
    title: "Code Create Conquer",
    subtitle: "AI and Computer Application",
    image: "/img/bookCover6.png"
  },
  {
    grade: "7th",
    title: "The Tech World",
    subtitle: "Exploring Computer With AI",
    image: "/img/bookCover7.png"
  },
  {
    grade: "8th",
    title: "Future Ready",
    subtitle: "AI and Computer Skills for Tomorrow",
    image: "/img/bookCover8.png"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Bridging the Academia-Industry Gap',
    excerpt: 'How AICTE-aligned virtual internships are solving the employability crisis for engineering graduates.',
    date: 'Oct 12, 2023',
    author: 'Editorial Team',
    category: 'Education Policy',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'The Role of NEAT in Modern Education',
    excerpt: 'Understanding the National Educational Alliance for Technology and its impact on student skilling.',
    date: 'Nov 05, 2023',
    author: 'Tech Policy Desk',
    category: 'Government Initiatives',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'AI in Faculty Development',
    excerpt: 'Why upskilling professors is the first step towards an AI-native campus environment.',
    date: 'Dec 10, 2023',
    author: 'Learning & Dev',
    category: 'FDP',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
  }
];

export const SERVICES_DATA: Record<string, ServicePageData> = {
  'k12': {
    id: 'k12',
    title: 'K-12 AI Programs',
    subtitle: 'Inspiring Young Innovators from Grade 1 to 12.',
    description: 'Our K-12 curriculum introduces students to the world of Artificial Intelligence through hands-on learning, coding, simulations, and real-world problem-solving. Aligned with NEP 2020 and global AI ethics standards.',
    features: [
      'AI Basics & Generative AI',
      'Block-based & Python Coding',
      'Math, Science & Language Tools',
      '21st Century Skill Development'
    ],
    benefits: [
      { title: 'Future Readiness', description: 'Prepares students for a tech-driven future from an early age.' },
      { title: 'Cognitive Growth', description: 'Enhances critical thinking and logical reasoning skills.' }
    ]
  },
  'higher-ed': {
    id: 'higher-ed',
    title: 'Higher Education Bridging',
    subtitle: 'AI Skill Development for Universities & Colleges.',
    description: 'Tailored for BCA, B.Sc, B.Tech, BBA, and MBA programs. We bridge the gap between academic theory and industry application through integrated modules and capstone projects.',
    features: [
      'Foundations of AI & ML',
      'Generative AI & LLM Tools',
      'Capstone Projects',
      'Internship & Placement Support'
    ],
    benefits: [
      { title: 'Employability', description: 'Produces AI-skilled graduates ready for high-growth careers.' },
      { title: 'Industry Relevance', description: 'Curriculum updated in real-time with industry trends.' }
    ]
  },
  'labs': {
    id: 'labs',
    title: 'Super AI Labs',
    subtitle: 'Next-Gen Robotics & AI Innovation Hub.',
    description: 'A future-ready innovation space that immerses students in AI, Robotics, and Automation. Features plug-and-play tools and ready curriculum to turn imagination into intelligent solutions.',
    features: [
      'AI Dog Robots (Gesture/Voice Control)',
      'Self-Driving Car Kits',
      'Modular Robot Arms',
      'Generative AI Stations',
      'Edge AI & Vision Tools'
    ],
    benefits: [
      { title: 'Hands-on Application', description: 'Students build smart waste sorters, emotion detectors, and more.' },
      { title: 'Infrastructure', description: 'Complete hardware and software ecosystem setup.' }
    ]
  },
  'textbooks': {
    id: 'textbooks',
    title: 'AI Textbooks (Grades 1-12)',
    subtitle: 'Making complex concepts simple and exciting.',
    description: 'Comprehensive AI textbooks aligned with NCERT, CBSE, and NEP guidelines. Titles include "Tech Explorers", "Code Create Conquer", and "Future Ready".',
    features: [
      'Interactive Stories & Visuals',
      'Integrated Coding Exercises',
      'Teacher Lesson Plans',
      'Assessments & Projects'
    ],
    benefits: [
      { title: 'Standardized Learning', description: 'Ensures consistent quality of AI education across grades.' },
      { title: 'Engagement', description: 'Gamified content keeps young learners interested.' }
    ]
  },
  'teacher-training': {
    id: 'teacher-training',
    title: 'AI for Teacher Training',
    subtitle: 'Empowering Educators to Lead with AI.',
    description: 'We equip teachers with the skills and confidence to integrate AI into their teaching practice, covering ethics, bias, and automated lesson planning.',
    features: [
      'AI Tools for Classroom',
      'Ethics & Responsible AI',
      'Automated Lesson Planning',
      'Student-facing Tool Training'
    ],
    benefits: [
      { title: 'Efficiency', description: 'Reduces administrative workload for teachers.' },
      { title: 'Modern Pedagogy', description: 'Enables tech-rich learning environments.' }
    ]
  },
  'chatbots': {
    id: 'chatbots',
    title: 'Enterprise AI Chatbots',
    subtitle: 'Intelligent Conversation Systems for Institutions.',
    description: 'Deploy advanced chatbots for administration, student support, and learning assistance. We offer SLM (Small Language Models) for cost-effective, fast responses.',
    features: [
      'SLM Chatbots (Fast, Offline-ready)',
      'Neura-AI Chatbots (Lightweight LLMs)',
      'WhatsApp Form-Based Bots',
      'FAQ Structured Bots'
    ],
    benefits: [
      { title: '24/7 Support', description: 'Instant answers for student and parent queries.' },
      { title: 'Data Collection', description: 'Structured data gathering via conversational flows.' }
    ]
  }
};

export const PARTNERS = [
  'AICTE', 'Ministry of Education', 'NEAT', 'AWS', 'Google', 'Microsoft'
];

// Lat/Long coordinates for 3D placement
// Primary Hub: India
export const GLOBAL_PRESENCE = [
  { name: "India", lat: 20.59, lng: 78.96, isHub: true, region: "Asia" },
  { name: "Mexico", lat: 23.63, lng: -102.55, region: "Americas" },
  { name: "United States (USA)", lat: 37.09, lng: -95.71, region: "Americas" },
  { name: "Canada", lat: 56.13, lng: -106.34, region: "Americas" },
  { name: "Italy", lat: 41.87, lng: 12.56, region: "Europe" },
  { name: "United Kingdom (UK)", lat: 55.37, lng: -3.43, region: "Europe" },
  { name: "Ghana", lat: 7.94, lng: -1.02, region: "Africa" },
  { name: "South Africa", lat: -30.55, lng: 22.93, region: "Africa" },
  { name: "Oman", lat: 21.47, lng: 55.97, region: "Middle East" },
  { name: "Bahrain", lat: 26.06, lng: 50.55, region: "Middle East" },
  { name: "Dubai (UAE)", lat: 25.20, lng: 55.27, region: "Middle East" },
  { name: "Sri Lanka", lat: 7.87, lng: 80.77, region: "Asia" },
  { name: "Malaysia", lat: 4.21, lng: 101.97, region: "Asia" },
  { name: "Caribbean Islands", lat: 18.00, lng: -66.00, region: "Americas" }
];

export const INDUSTRIES = [
  { 
      title: 'Higher Education', 
      icon: GraduationCap, 
      desc: 'Universities and Engineering Colleges.',
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
  },
  { 
      title: 'Government', 
      icon: Globe, 
      desc: 'Public sector skilling initiatives.',
      image: "https://images.unsplash.com/photo-1577760219663-fd81f71422d5?auto=format&fit=crop&q=80&w=800"
  },
  { 
      title: 'Technology', 
      icon: Cpu, 
      desc: 'Corporate training and assessment.',
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
  },
  { 
      title: 'Research', 
      icon: Brain, 
      desc: 'R&D labs and innovation hubs.',
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
  },
  { 
      title: 'Healthcare', 
      icon: HeartPulse, 
      desc: 'AI diagnostics and patient data management.',
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  { 
      title: 'Legal', 
      icon: Scale, 
      desc: 'Document intelligence and case law analysis.',
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
  },
];

export const FAQS = [
  {
    question: "Is Super AI Polaris AICTE approved?",
    answer: "Yes, Super AI Polaris is a recognized corporate partner for AICTE Internships, ensuring our programs meet strict government quality standards."
  },
  {
    question: "How do the Virtual Internships work?",
    answer: "Students access our cloud-based platform to complete modules and projects. Mentorship is provided virtually, allowing students to learn from anywhere."
  },
  {
    question: "Do you offer certificates?",
    answer: "Yes, upon successful completion, students receive industry-recognized certificates that are valid for academic credits in many universities."
  },
  {
    question: "What is included in the Super AI Lab?",
    answer: "The lab includes hardware like AI Dog Robots, Self-Driving Car kits, and workstations, along with a complete software curriculum."
  }
];

export const TESTIMONIALS = [
  {
    quote: "The internship provided me with real-world exposure that my textbooks never could. The project experience helped me land my first job.",
    author: "Aditya K.",
    role: "Engineering Graduate"
  },
  {
    quote: "Super AI Polaris's FDP program completely changed how our department approaches teaching Machine Learning.",
    author: "Dr. R. Sharma",
    role: "HOD, Computer Science"
  },
  {
    quote: "A seamless platform for fulfilling AICTE internship requirements. The support team was incredibly helpful.",
    author: "Priya M.",
    role: "B.Tech Student"
  }
];
