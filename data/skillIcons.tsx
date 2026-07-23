// data/skillIcons.tsx
// Maps skill names (as used in SKILLS_DATA) to brand icons.
// Requires: npm install react-icons
import React from 'react';
import {
  // Languages
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss,
  
  // Frontend
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiFramer,

  // Backend & Databases
  SiLaravel,
  SiFilament,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiRedis,
  SiPrisma,
  
  // Machine Learning & Data Science
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiJupyter,

  // DevOps, Security & Cloud
  SiLinux,
  SiUbuntu,
  SiKalilinux,
  SiDocker,
  SiGit,
  SiGithub,
  SiEspressif,
  SiArduino, // <-- Added Arduino Icon
  SiNginx,
  SiPostman,
  SiVercel,
  SiCloudflare,
} from 'react-icons/si';

import { 
  Brain, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Network, 
  Terminal, 
  Database,
  Layers
} from 'lucide-react';

// Fallback icon for skills without an official brand logo in simple-icons
const Fallback = ({ className }: { className?: string }) => <Brain className={className} />;

export const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  // --- Languages ---
  'PHP': SiPhp,
  'Python': SiPython,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'TypeScript / JavaScript': SiTypescript,
  'C++': SiCplusplus,
  'C': SiC,
  'HTML / CSS': SiHtml5,

  // --- Frontend ---
  'Next.js / React': SiNextdotjs,
  'Next.js': SiNextdotjs,
  'React': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Blade Templating': SiLaravel,
  'Vite': SiVite,
  'Framer Motion': SiFramer,

  // --- Backend & Databases ---
  'Laravel': SiLaravel,
  'Filament PHP': SiFilament,
  'MySQL / PostgreSQL': SiMysql,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Node.js / Express': SiNodedotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Prisma ORM': SiPrisma,
  'REST APIs': Network,

  // --- Machine Learning & AI ---
  'Scikit-Learn': SiScikitlearn,
  'PyTorch': SiPytorch,
  'TensorFlow': SiTensorflow,
  'TabNet / FT-Transformer': Layers,
  'XGBoost / LightGBM': TrendingUp,
  'Pandas / NumPy': SiPandas,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'OpenCV': SiOpencv,
  'Jupyter Notebooks': SiJupyter,

  // --- Security, DevOps & Hardware ---
  'Linux System Admin': SiLinux,
  'Linux': SiLinux,
  'Ubuntu': SiUbuntu,
  'Kali Linux': SiKalilinux,
  'Kali Linux / Security Tools': SiKalilinux,
  'Wazuh SIEM': ShieldCheck,
  'Docker': SiDocker,
  'Git / GitHub': SiGithub,
  'Git': SiGit,
  'GitHub': SiGithub,
  'ESP32': SiEspressif, // <-- Directly match 'ESP32'
  'ESP32 / Embedded C++': SiEspressif,
  'Arduino': SiArduino, // <-- Added Arduino mapping
  'Motor Drivers (L298N) & Robotics Chassis': Cpu, // <-- Added Hardware mapping
  'Microcontrollers / IoT': Cpu,
  'Nginx': SiNginx,
  'Postman': SiPostman,
  'Vercel': SiVercel,
  'Cloudflare': SiCloudflare,
  'Bash / Shell Scripting': Terminal,
  'Databases & Systems': Database,
};

export function getSkillIcon(name: string) {
  // Case-insensitive fallback matching if direct key doesn't hit
  const exactMatch = SKILL_ICONS[name];
  if (exactMatch) return exactMatch;

  const lowerName = name.toLowerCase();
  const matchedKey = Object.keys(SKILL_ICONS).find(
    (key) => key.toLowerCase() === lowerName
  );

  return matchedKey ? SKILL_ICONS[matchedKey] : Fallback;
}