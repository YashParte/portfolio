import {
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Network,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  challenge: string;
  approach: string;
  tradeoff: string;
  outcome: string;
  stack: string[];
  visual: 'communications' | 'crm' | 'logistics' | 'tracker';
  githubUrl?: string;
  liveDemoUrl?: string;
  stars?: number;
};

export const profile = {
  name: 'Yash Parte',
  company: 'Writgen Group',
  email: 'parteyash@gmail.com',
  github: 'https://github.com/YashParte',
  // Add profile URLs here when ready; empty links are not shown on the site.
  linkedin: '',
};

export const roles = ['Full-Stack Developer', 'Open Source Contributor', 'Tech Writer'];

export const projects: Project[] = [
  {
    slug: 'customer-communications',
    number: '01',
    title: 'Customer communications hub',
    category: 'Customer experience',
    summary: 'Connected WhatsApp, SMS and call-centre workflows for customer support.',
    context: 'Support teams needed a clearer way to work across digital messaging and call-centre processes while keeping customer context close at hand.',
    challenge: 'Each channel and service workflow had its own requirements, owners and delivery partners. The work needed to fit the way support teams already handled customer conversations.',
    approach: 'Aligned service requirements with channel providers and application teams, then coordinated implementation changes across the connected workflows.',
    tradeoff: 'The work focused on fitting existing service operations and partner capabilities, rather than replacing every channel with one new system.',
    outcome: 'Digital messaging and service workflows brought into a more connected customer support experience.',
    stack: ['WhatsApp', 'SMS', 'Call-centre workflows', 'Application integrations'],
    visual: 'communications',
  },
  {
    slug: 'service-team-crm',
    number: '02',
    title: 'Service team CRM',
    category: 'Custom application',
    summary: 'A dedicated workspace for customer context, service workflows and machine support.',
    context: 'Service teams needed an application shaped around their day-to-day customer and machine support work.',
    challenge: 'The CRM needed to reflect practical team processes and keep change requests tied to user needs while an external partner handled development.',
    approach: 'Gathered and clarified stakeholder requirements, coordinated the development partner and tracked requested changes against service workflows.',
    tradeoff: 'A purpose-built CRM allowed the workflow to match the team, with delivery paced around partner capacity and evolving requirements.',
    outcome: 'Customer context and service workflows organized in a dedicated team workspace.',
    stack: ['Custom CRM', 'Service workflows', 'Requirements discovery', 'Vendor coordination'],
    visual: 'crm',
  },
  {
    slug: 'cargofl-logistics',
    number: '03',
    title: 'CargoFL logistics platform',
    category: 'Business platform',
    summary: 'Logistics management software supporting cargo movement and operational visibility.',
    context: 'Operations stakeholders needed a digital process to support cargo movement and share useful status across the work.',
    challenge: 'The platform had to fit existing logistics requirements and be adopted by the teams and partners involved in delivery.',
    approach: 'Connected operations stakeholders, implementation partners and end users through platform configuration, rollout and workflow adoption.',
    tradeoff: 'The implementation used a logistics platform and focused on fit and adoption instead of building a bespoke system from scratch.',
    outcome: 'A clearer digital process for logistics operations and the people coordinating cargo.',
    stack: ['CargoFL', 'Logistics workflows', 'Platform implementation', 'Change coordination'],
    visual: 'logistics',
  },
  {
    slug: 'engineering-change-tracker',
    number: '04',
    title: 'CDP & ECN tracker',
    category: 'Internal tools',
    summary: 'An in-house tracker for product and engineering change records.',
    context: 'Product and engineering teams needed a shared way to follow CDP and ECN records across the organization.',
    challenge: 'The workflow needed to make requests and progress easier to follow for the people involved in each change.',
    approach: 'Helped translate internal tracking requirements into a shared application workflow for product and engineering teams.',
    tradeoff: 'The tracker centers on the organization’s records and process, keeping the workflow specific to the teams using it.',
    outcome: 'A shared view of product and engineering change records and their progress.',
    stack: ['Custom-built application', 'CDP tracking', 'ECN workflows', 'Product operations'],
    visual: 'tracker',
  },
];

export type Skill = { name: string; icon: LucideIcon };
export type SkillGroup = { name: string; note: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages', note: 'The building blocks', items: [
      { name: 'JavaScript', icon: Code2 }, { name: 'TypeScript', icon: Code2 },
      { name: 'Python', icon: Code2 }, { name: 'Go', icon: Code2 }, { name: 'SQL', icon: Database },
    ],
  },
  {
    name: 'Frontend', note: 'Interfaces people enjoy using', items: [
      { name: 'React', icon: Workflow }, { name: 'Next.js', icon: Layers3 },
      { name: 'Vue', icon: Workflow }, { name: 'Nuxt', icon: Layers3 }, { name: 'Tailwind CSS', icon: Code2 },
    ],
  },
  {
    name: 'Backend', note: 'Data, services and integrations', items: [
      { name: 'Node.js', icon: Network }, { name: 'Express', icon: Network },
      { name: 'PostgreSQL', icon: Database }, { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database }, { name: 'GraphQL', icon: Boxes },
    ],
  },
  {
    name: 'DevOps', note: 'Build, ship and operate', items: [
      { name: 'Docker', icon: Boxes }, { name: 'Kubernetes', icon: Network },
      { name: 'AWS', icon: Cloud }, { name: 'Vercel', icon: Cloud },
      { name: 'CI/CD', icon: Workflow }, { name: 'GitHub Actions', icon: GitBranch },
    ],
  },
];

export const experience = [
  {
    company: 'Writgen Group',
    role: 'Assistant Manager',
    dates: 'Current',
    summary: 'Leading business application initiatives, Microsoft 365 administration and Power Platform work. Partnering with vendors on development changes and guiding developers and analysts toward practical outcomes.',
    technologies: ['Business applications', 'Microsoft 365', 'Power Platform', 'Power BI', 'Web development'],
    current: true,
  },
  {
    company: 'John Deere',
    role: 'Professional experience',
    dates: '1.5 years',
    summary: 'An early professional chapter that helped build experience in technology and business operations.',
    technologies: ['Enterprise technology', 'Business operations'],
    current: false,
  },
];

export const socialLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
].filter((link) => link.href);

