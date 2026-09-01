import { Skill, Project, TimelineEvent } from '@/types';

export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  { name: 'PHP', level: 'Advanced', category: 'Languages' },
  { name: 'Python', level: 'Advanced', category: 'Languages' },
  { name: 'TypeScript / JavaScript', level: 'Intermediate', category: 'Languages' },
  { name: 'C++', level: 'Intermediate', category: 'Languages' },
  { name: 'Java', level: 'Intermediate', category: 'Languages' },

  // Frontend & UI
  { name: 'Next.js / React', level: 'Intermediate', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend' },
  { name: 'Blade Templating', level: 'Advanced', category: 'Frontend' },
  { name: 'Bootstrap', level: 'Intermediate', category: 'Frontend' },

  // Backend & Databases
  { name: 'Laravel', level: 'Advanced', category: 'Backend' },
  { name: 'Filament PHP', level: 'Advanced', category: 'Backend' },
  { name: 'MySQL / PostgreSQL', level: 'Advanced', category: 'Backend' },
  { name: 'Node.js / Express', level: 'Intermediate', category: 'Backend' },
  { name: 'Telegram Bot API Integrations', level: 'Advanced', category: 'Backend' },

  // Machine Learning & Analytics
  { name: 'Scikit-Learn', level: 'Advanced', category: 'Machine Learning' },
  { name: 'PyTorch', level: 'Intermediate', category: 'Machine Learning' },
  { name: 'TabNet / FT-Transformer', level: 'Intermediate', category: 'Machine Learning' },
  { name: 'XGBoost / LightGBM', level: 'Intermediate', category: 'Machine Learning' },
  { name: 'Pandas / NumPy', level: 'Advanced', category: 'Machine Learning' },

  // AI & Natural Language Processing
  { name: 'NLP & Expert Systems', level: 'Intermediate', category: 'Machine Learning' },
  { name: 'Chatbot Backends / Webhooks', level: 'Advanced', category: 'Machine Learning' },

  // Cybersecurity & Systems
  { name: 'Kali Linux / Security Tools', level: 'Intermediate', category: 'DevOps' },
  { name: 'Network Configuration & Security Routing', level: 'Intermediate', category: 'DevOps' },

  // Infrastructure & Security
  { name: 'Linux System Admin', level: 'Intermediate', category: 'DevOps' },
  { name: 'Wazuh SIEM', level: 'Intermediate', category: 'DevOps' },
  { name: 'Git / GitHub', level: 'Advanced', category: 'DevOps' },

  // IoT & Embedded Hardware
  { name: 'ESP32', level: 'Advanced', category: 'IoT & Hardware' },
  { name: 'Arduino', level: 'Intermediate', category: 'IoT & Hardware' },
  { name: 'Motor Drivers (L298N) & Robotics Chassis', level: 'Intermediate', category: 'IoT & Hardware' },
  { name: 'DHT 11 & 22 Sensors', level: 'Advanced', category: 'IoT & Hardware' },
  { name: 'MQTT', level: 'Intermediate', category: 'IoT & Hardware' },
  { name: 'Mosquitto', level: 'Intermediate', category: 'IoT & Hardware' },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 'lead-1',
    type: 'leadership',
    title: 'Secretary General (BPA)',
    subtitle: 'HMIF Student Body - ITENAS',
    period: 'Feb 2026 - Agu 2026',
    responsibilities: [
      'Leading documentation and organizational workflows across HMIF ITENAS activities.',
      'Coordinating internal council processes and formal organizational correspondence.'
    ]
  },
  {
    id: 'lead-2',
    type: 'leadership',
    title: 'Head of Human Resources Development Division',
    subtitle: 'HMIF Student Body - ITENAS',
    period: 'Jan 2025 - Dec 2025',
    responsibilities: [
      'Planning, Solving, and Executing member development programs and internal talent evaluation.',
      'Fostering leadership succession and organizational growth.'
    ]
  },
  {
    id: 'lead-3',
    type: 'leadership',
    title: 'Household Division Staff Member',
    subtitle: 'HMIF Student Body - ITENAS',
    period: 'Jun 2024 - Dec 2024',
    responsibilities: [
      'Safeguarding, managing, and documenting the assets of the HMIF ITENAS organization.',
      'Ensuring the smooth handling of logistics and the organizations internal needs.'
    ]
  },
  {
    id: 'exp-2',
    type: 'leadership',
    title: 'Chief Executive of the New Member Acceptance 2024',
    subtitle: 'Itenas No Nippon Kurabu (INKU)',
    period: 'Jul 2024 - Sep 2024',
    responsibilities: [
      'Lead and coordinate the entire new member onboarding process, including selection, orientation, and integration into the organization.',
      'Design, delegate, and oversee internal and external workflows to ensure the onboarding process runs smoothly and efficiently.'
    ]
  },
  {
    id: 'exp-1',
    type: 'leadership',
    title: 'Head of Logistics Division for the 2024 Graduation',
    subtitle: 'HMIF Student Body - ITENAS',
    period: 'Jul 2024 - Sep 2024',
    responsibilities: [
      'Lead and coordinate the entire logistics process for the graduation event, including venue setup, facilities, and infrastructure.',
      'Document logistics needs, schedule deliveries, and ensure all equipment is available on time.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    slug: 'webptdi-gcg-module',
    title: 'PT Dirgantara Indonesia Company Website',
    category: 'Web Development',
    shortDescription: 'A Laravel 12 project about PT Dirgantara Indonesia Company Website.',
    detailedDescription: 'Built and extended a GCG module inside a larger Laravel 12 web application (webptdi), including bug fixes, a centralized configuration registry, a PDF.js-based in-browser file viewer, and admin-facing upload functionality for governance documents.',
    problemStatement: 'The organization needed a reliable way for admins to upload, manage, and display governance documents without scattered configuration or unreliable file rendering.',
    solution: 'Refactored the module around a centralized config registry, integrated PDF.js for consistent in-browser document viewing, and built admin upload flows on top of Laravel and Filament.',
    role: 'Backend / Full-Stack Developer',
    technologies: ['Laravel 12', 'PHP', 'PDF.js', 'MySQL'],
    features: ['Centralized configuration registry', 'In-browser PDF viewer', 'Admin document upload management'],
    featured: true,
    liveUrl: 'https://www.indonesian-aerospace.com/en/'
  },
  {
    slug: 'wbs-portal-PTDI',
    title: 'PT Dirgantara Indonesia Whistleblowing System Portal',
    category: 'Web Development',
    shortDescription: 'A Laravel 12 portal for managing whistleblowing reports, including admin dashboards and secure file handling.',
    detailedDescription: 'Developed a comprehensive whistleblowing portal for PT Dirgantara Indonesia, featuring admin dashboards, secure file handling, and streamlined report management.',
    problemStatement: 'The organization needed a secure, reliable portal for reporting misconduct with strict confidentiality and proper admin verification workflow.',
    solution: 'Engineered a secure portal using Laravel 12 and Filament with encrypted file storage and structured audit logging.',
    role: 'Backend / Full-Stack Developer',
    technologies: ['Laravel 12', 'PHP', 'Filament', 'PDF.js', 'MySQL'],
    features: ['Encrypted report handling', 'Custom Filament admin dashboard', 'In-browser PDF review'],
    featured: true,
    liveUrl: 'https://wbs.indonesian-aerospace.com/'
  },
  {
    slug: 'ta-indonesian-hybrid-rag-optimization',
    title: 'Indonesian Hybrid RAG System Optimization (Undergraduate Thesis)',
    category: 'Machine Learning',
    shortDescription: 'Optimization and evaluation of an Indonesian Hybrid RAG system combining sparse and dense retrieval using the RAGAS framework.',
    detailedDescription: 'Ongoing undergraduate thesis focused on optimizing an Indonesian Hybrid Retrieval-Augmented Generation (RAG) system based on BM25 and BGE-M3. The study evaluates system performance and retriever tradeoffs using key metrics from the RAGAS evaluation framework.',
    problemStatement: 'Single-retrieval RAG pipelines often struggle with complex Indonesian queries due to limitations in capturing both exact keyword matches and deep semantic context, while systematic evaluation using standardized frameworks remains underexplored.',
    solution: 'Built a hybrid retrieval pipeline integrating sparse (BM25) and dense (BGE-M3) methods, optimizing the retrieval parameters and quantitatively assessing performance using RAGAS metrics.',
    role: 'Researcher',
    technologies: ['Python', 'LangChain', 'PyTorch', 'BM25', 'BGE-M3', 'RAGAS Framework', 'Hugging Face'],
    features: [
      'Hybrid retrieval architecture (BM25 + BGE-M3)',
      'End-to-end Indonesian language RAG optimization',
      'Comprehensive evaluation using RAGAS metrics'
    ],
    featured: true
  },
  {
    slug: 'wazuh-telegram-alerting',
    title: 'Wazuh Security Alert Pipeline',
    category: 'Security',
    shortDescription: 'Custom detection rules and Telegram-based alerting on top of a Wazuh SIEM deployment.',
    detailedDescription: 'Configured a Wazuh security lab on Ubuntu/VMware, including active response, custom detection rules, and a webhook integration that routes alerts to Telegram. Involved debugging Wazuh’s decoder pipeline and working around regex engine limitations.',
    problemStatement: 'Security alerts sitting only in the Wazuh dashboard are easy to miss without constant console access.',
    solution: 'Built custom detection rules and an active response pipeline, then wired alerts into a Telegram webhook for real-time notification.',
    role: 'Security Lab Engineer',
    technologies: ['Wazuh SIEM', 'Linux', 'Telegram API', 'Ubuntu Networking'],
    features: ['Custom detection rules', 'Active response automation', 'Real-time Telegram alerting'],
    featured: false
  },
  {
    slug: 'mindmate-mental-health-chatbot',
    title: 'MindMate — Bayesian Stress Diagnosis Chatbot',
    category: 'Web Development',
    shortDescription: 'A web-based mental health chatbot using Bayesian stress diagnosis.',
    detailedDescription: 'Contributed to MindMate, a project implementing a Bayesian stress diagnosis tool with an HTML/JS frontend and a Node.js/Python backend, fixing UI bugs around question re-display and result rendering.',
    problemStatement: 'Users needed a simple, guided way to get a preliminary stress assessment through conversational interaction.',
    solution: 'Fixed frontend bugs affecting question flow and result/spinner rendering to make the diagnosis flow reliable end-to-end.',
    role: 'Frontend Developer',
    technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'Python'],
    features: ['Bayesian stress diagnosis logic', 'Conversational question flow', 'Result visualization'],
    featured: false,
    githubUrl: 'https://github.com/FarisyIlman/MindMate_Sistem_pakar_dan_bahasa_alamiah_'
  },
  {
    slug: 'ft-transformer-tabular-datasets',
    title: 'FT-Transformer Across Four Tabular Datasets',
    category: 'Machine Learning',
    shortDescription: 'A Deep Learning project implementing FT-Transformer on four different tabular datasets with an academic report.',
    detailedDescription: 'Implemented the FT-Transformer architecture from scratch for Deep Learning coursework (IFB-454), applying it across four distinct tabular datasets and writing an academic report analyzing its performance and behavior on each.',
    problemStatement: 'Transformer-based architectures are common for text and images, but their behavior on structured tabular data across varying dataset characteristics is less intuitive to predict.',
    solution: 'Implemented and trained FT-Transformer on four datasets with different sizes and feature types, documenting performance differences and practical implementation challenges in a written report.',
    role: 'Researcher / Student',
    technologies: ['Python', 'PyTorch', 'Pandas', 'Scikit-Learn'],
    features: ['Custom FT-Transformer implementation', 'Evaluation across four tabular datasets', 'Written academic performance report'],
    featured: false,
    githubUrl: 'https://github.com/FarisyIlman/DeepLearning_FT-Transformer'
  },
  {
    slug: 'knn-regression-notebook',
    title: 'KNN Regression Multi-Dataset Notebook',
    category: 'Machine Learning',
    shortDescription: 'A Google Colab notebook applying K-Nearest Neighbors regression across multiple datasets.',
    detailedDescription: 'Fixed and restructured a multi-dataset KNN Regression notebook in Google Colab, cleaning up the pipeline so each dataset could be processed and evaluated consistently.',
    problemStatement: 'The original notebook mixed logic across datasets in a way that made results hard to compare and debug.',
    solution: 'Refactored the notebook into a consistent per-dataset structure, fixing bugs in the regression and evaluation steps along the way.',
    role: 'Student',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Google Colab'],
    features: ['Multi-dataset KNN regression pipeline', 'Consistent preprocessing per dataset', 'Cleaned-up, restructured notebook'],
    featured: false,
    githubUrl: 'https://github.com/FarisyIlman/Deep_Learning_with_regression_method_on_4_different_dataset'
  },
  {
    slug: 'esp32-robotic-chassis',
    title: 'ESP32 Four-Wheel Robot Chassis',
    category: 'IoT / Embedded',
    shortDescription: 'An ESP32-driven robot chassis with dual H-bridge motor control across four wheels.',
    detailedDescription: 'Assembled, wired, and programmed a four-wheeled robot platform controlled by an ESP32 microcontroller and an L298N dual H-bridge motor driver, coordinating synchronized movement across all wheels.',
    problemStatement: 'Coordinating consistent, synchronized motion across four independently driven wheels using a single H-bridge driver setup.',
    solution: 'Implemented PWM-based motor control firmware to synchronize direction and speed across all four wheels.',
    role: 'Embedded Systems Developer',
    technologies: ['ESP32', 'C++', 'L298N H-Bridge Driver', 'PWM Control'],
    features: ['Synchronized 4-wheel drive', 'PWM speed control', 'Basic sensor feedback loop'],
    featured: false
  }
];

export const FUTURE_AMBITIONS = [
  {
    id: 'amb-1',
    title: 'Graduate with an Informatics Bachelors Degree',
    timeline: 'Next Milestone',
    glow: 'from-amber-400 to-orange-500',
    description: 'Completing undergraduate thesis work at ITENAS on Indonesian Hybrid RAG Optimization with strong academic rigor.',
    goals: ['Complete thesis defense with high marks', 'Publish research results on Hybrid RAG benchmark']
  },
  {
    id: 'amb-2',
    title: 'Deepen Expertise in Deep Learning & LLM Systems',
    timeline: 'Short-term Goal',
    glow: 'from-cyan-400 to-blue-500',
    description: 'Mastering advanced RAG techniques, fine-tuning open-source LLMs, and expanding NLP pipeline capabilities.',
    goals: ['Implement domain-specific LLM fine-tuning', 'Build scalable vector search architectures']
  },
  {
    id: 'amb-3',
    title: 'Specialize in MLOps — Production System Deployment',
    timeline: 'Mid-term Target',
    glow: 'from-blue-500 to-purple-600',
    description: 'Bridging the gap between ML models and enterprise infrastructure using CI/CD pipelines, containerization, and monitoring.',
    goals: ['Deploy automated model monitoring pipelines', 'Build zero-downtime inference webhooks']
  },
  {
    id: 'amb-4',
    title: 'Pursue a Masters Degree in Computer Science',
    timeline: 'Long-term Horizon',
    glow: 'from-purple-500 to-pink-500',
    description: 'Advancing formal research in Artificial Intelligence, distributed computing systems, and automated intelligence.',
    goals: ['Secure postgraduate fellowship/scholarship', 'Conduct advanced research on AI system efficiency']
  }
];