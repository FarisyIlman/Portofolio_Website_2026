// data/portfolioData.ts
import { Skill, Project, TimelineEvent } from '@/types';

export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  { name: 'PHP', level: 85, category: 'Languages' },
  { name: 'Python', level: 80, category: 'Languages' },
  { name: 'TypeScript / JavaScript', level: 75, category: 'Languages' },
  { name: 'C++', level: 75, category: 'Languages' },
  { name: 'Java', level: 72, category: 'Languages' },

  // Frontend & UI
  { name: 'Next.js / React', level: 72, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 78, category: 'Frontend' },
  { name: 'Blade Templating', level: 80, category: 'Frontend' },
  { name: 'Bootstrap', level: 70, category: 'Frontend' },

  // Backend & Databases
  { name: 'Laravel', level: 85, category: 'Backend' },
  { name: 'Filament PHP', level: 78, category: 'Backend' },
  { name: 'MySQL / PostgreSQL', level: 80, category: 'Backend' },
  { name: 'Node.js / Express', level: 65, category: 'Backend' },
  { name: 'Telegram Bot API Integrations', level: 82, category: 'Backend' },

  // Machine Learning & Analytics
  { name: 'Scikit-Learn', level: 80, category: 'Machine Learning' },
  { name: 'PyTorch', level: 72, category: 'Machine Learning' },
  { name: 'TabNet / FT-Transformer', level: 70, category: 'Machine Learning' },
  { name: 'XGBoost / LightGBM', level: 75, category: 'Machine Learning' },
  { name: 'Pandas / NumPy', level: 82, category: 'Machine Learning' },

  // AI & Natural Language Processing
  { name: 'NLP & Expert Systems', level: 75, category: 'Machine Learning' },
  { name: 'Chatbot Backends / Webhooks', level: 80, category: 'Machine Learning' },

  // Cybersecurity & Systems
  { name: 'Kali Linux / Security Tools', level: 75, category: 'DevOps' },
  { name: 'Network Configuration & Security Routing', level: 72, category: 'DevOps' },


  // Infrastructure & Security
  { name: 'Linux System Admin', level: 78, category: 'DevOps' },
  { name: 'Wazuh SIEM', level: 75, category: 'DevOps' },
  { name: 'Git / GitHub', level: 82, category: 'DevOps' },

    // IoT & Embedded Hardware
  { name: 'ESP32', level: 78, category: 'IoT & Hardware' },
  { name: 'Arduino', level: 75, category: 'IoT & Hardware' },
  { name: 'Motor Drivers (L298N) & Robotics Chassis', level: 75, category: 'IoT & Hardware' },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 'edu-1',
    type: 'education',
    title: 'Undergraduate Informatics Student (Semester 7)',
    subtitle: 'Institut Teknologi Nasional (ITENAS)',
    period: '2023 - Present',
    responsibilities: [
      'Currently completing an undergraduate thesis benchmarking classical and deep learning methods (Logistic Regression, Random Forest, XGBoost/LightGBM, TabNet, FT-Transformer) on tabular data.',
      'Coursework in Deep Learning (IFB-454), including FT-Transformer implementation, loss function comparison, and regularization techniques.'
    ]
  },
  {
    id: 'lead-1',
    type: 'leadership',
    title: 'Secretary General (BPA)',
    subtitle: 'HMIF Student Body - ITENAS',
    period: '2026 - Present',
    responsibilities: [
      'Leading documentation and organizational workflows across HMIF ITENAS activities, including Dies Natalis and new student orientation.',
      'Coordinating internal council processes and formal organizational correspondence for the student body.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    slug: 'webptdi-gcg-module',
    title: 'PT Dirgantara Indonesia Good Corporate Governance Module',
    category: 'Web Development',
    shortDescription: 'A Laravel 12 module for managing corporate governance documents, with a centralized config registry and PDF viewer.',
    detailedDescription: 'Built and extended a GCG module inside a larger Laravel 12 web application (webptdi), including bug fixes, a centralized configuration registry, a PDF.js-based in-browser file viewer, and admin-facing upload functionality for governance documents.',
    problemStatement: 'The organization needed a reliable way for admins to upload, manage, and display governance documents without scattered configuration or unreliable file rendering.',
    solution: 'Refactored the module around a centralized config registry, integrated PDF.js for consistent in-browser document viewing, and built admin upload flows on top of Laravel and Filament.',
    role: 'Backend / Full-Stack Developer',
    technologies: ['Laravel 12', 'PHP', 'PDF.js', 'MySQL'],
    features: ['Centralized configuration registry', 'In-browser PDF viewer', 'Admin document upload management'],
    featured: true
  },
  {
    slug: 'wbs-portal-PTDI',
    title: 'PT Dirgantara Indonesia whistleblowing system Portal',
    category: 'Web Development',
    shortDescription: 'A Laravel 12 portal for managing whistleblowing reports, including admin dashboards and secure file handling.',
    detailedDescription: 'Developed a comprehensive whistleblowing portal for PT Dirgantara Indonesia, featuring admin dashboards, secure file handling, and streamlined report management.',
    problemStatement: 'The organization needed a reliable way for admins to upload, manage, and display whistleblowing reports without scattered configuration or unreliable file rendering.',
    solution: 'Refactored the module around a centralized config registry, integrated PDF.js for consistent in-browser document viewing, and built admin upload flows on top of Laravel and Filament.',
    role: 'Backend / Full-Stack Developer',
    technologies: ['Laravel 12', 'PHP', 'Filament', 'PDF.js', 'MySQL'],
    features: ['Centralized configuration registry', 'In-browser PDF viewer', 'Admin document upload management'],
    featured: true
  },
  {
    slug: 'ta-tabular-ml-benchmark',
    title: 'Tabular ML Benchmark Study (Undergraduate Thesis)',
    category: 'Machine Learning',
    shortDescription: 'A comparative benchmark of classical and deep learning methods on a single tabular dataset.',
    detailedDescription: 'Ongoing undergraduate thesis comparing five methods — Logistic Regression, Random Forest, XGBoost/LightGBM, TabNet, and FT-Transformer — on one tabular dataset, evaluating tradeoffs between classical and deep tabular learning approaches.',
    problemStatement: 'Deep learning methods for tabular data are often assumed to outperform classical models, but the tradeoffs in practice — accuracy, training cost, interpretability — are less clear-cut.',
    solution: 'Designed a controlled benchmark pipeline evaluating all five methods on the same dataset and metrics, building on prior coursework implementing FT-Transformer and TabNet.',
    role: 'Researcher',
    technologies: ['Python', 'PyTorch', 'Scikit-Learn', 'XGBoost', 'LightGBM', 'Pandas'],
    features: ['Five-method comparative benchmark', 'Consistent preprocessing and evaluation pipeline', 'Classical vs. deep tabular learning analysis'],
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
    shortDescription: 'A group project building a web-based mental health chatbot using Bayesian stress diagnosis.',
    detailedDescription: 'Contributed to MindMate, a group project implementing a Bayesian stress diagnosis tool with an HTML/JS frontend and a Node.js/Python backend, fixing UI bugs around question re-display and result rendering.',
    problemStatement: 'Users needed a simple, guided way to get a preliminary stress assessment through conversational interaction.',
    solution: 'Fixed frontend bugs affecting question flow and result/spinner rendering to make the diagnosis flow reliable end-to-end.',
    role: 'Frontend Developer',
    technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'Python'],
    features: ['Bayesian stress diagnosis logic', 'Conversational question flow', 'Result visualization'],
    featured: false
  },
  {
    slug: 'ft-transformer-tabular-datasets',
    title: 'FT-Transformer Across Four Tabular Datasets',
    category: 'Machine Learning',
    shortDescription: 'A Deep Learning coursework project implementing FT-Transformer on four different tabular datasets, with a full academic report.',
    detailedDescription: 'Implemented the FT-Transformer architecture from scratch for Deep Learning coursework (IFB-454), applying it across four distinct tabular datasets and writing an academic report analyzing its performance and behavior on each.',
    problemStatement: 'Transformer-based architectures are common for text and images, but their behavior on structured tabular data across varying dataset characteristics is less intuitive to predict.',
    solution: 'Implemented and trained FT-Transformer on four datasets with different sizes and feature types, documenting performance differences and practical implementation challenges in a written report.',
    role: 'Researcher / Student',
    technologies: ['Python', 'PyTorch', 'Pandas', 'Scikit-Learn'],
    features: ['Custom FT-Transformer implementation', 'Evaluation across four tabular datasets', 'Written academic performance report'],
    featured: false
  },
  {
    slug: 'knn-regression-notebook',
    title: 'KNN Regression Multi-Dataset Notebook',
    category: 'Machine Learning',
    shortDescription: 'A Google Colab notebook applying K-Nearest Neighbors regression across multiple datasets, restructured for clarity.',
    detailedDescription: 'Fixed and restructured a multi-dataset KNN Regression notebook in Google Colab, cleaning up the pipeline so each dataset could be processed and evaluated consistently.',
    problemStatement: 'The original notebook mixed logic across datasets in a way that made results hard to compare and debug.',
    solution: 'Refactored the notebook into a consistent per-dataset structure, fixing bugs in the regression and evaluation steps along the way.',
    role: 'Student',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Google Colab'],
    features: ['Multi-dataset KNN regression pipeline', 'Consistent preprocessing per dataset', 'Cleaned-up, restructured notebook'],
    featured: false
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
  { title: 'Graduate with an Informatics Bachelor’s Degree', timeline: 'Next Milestone', glow: 'from-amber-400 to-orange-500' },
  { title: 'Deepen expertise in Deep Learning and LLM Systems', timeline: 'Short-term Goal', glow: 'from-cyan-400 to-blue-500' },
  { title: 'Specialize in MLOps — deploying ML models as production systems', timeline: 'Mid-term Target', glow: 'from-blue-500 to-purple-600' },
  { title: 'Pursue a Master’s Degree in Computer Science', timeline: 'Long-term Horizon', glow: 'from-purple-500 to-pink-500' }
];