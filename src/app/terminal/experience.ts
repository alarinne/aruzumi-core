export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  website: string;
  period: string;
  responsibilities: string[];
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'rater',
    role: 'Full-Stack Developer',
    company: 'Rater',
    website: 'https://rater.kz/',
    period: 'Feb 2026 — Present',
    responsibilities: [
      'Develop features for the Monopolist platform using Angular and Spring Boot.',
      'Developed backend components for an external system integration, including API requests, callback handling, and authentication configuration.',
      'Work with PostgreSQL and database migrations.',
    ],
  },
  {
    id: 'dynamics',
    role: 'Full-Stack Developer',
    company: 'Dynamics Technologies',
    website: 'https://dbt.asia/',
    period: 'Aug 2025 — Jan 2026',
    responsibilities: [
      'Built an internal tool to automate work completion reports, replacing manual task-by-task entry.',
      'Implemented CSV-to-Excel generation using Java and Apache POI, with predefined templates and automatic text wrapping.',
    ],
  },
  {
    id: '7generation',
    role: 'DevOps Support Intern',
    company: '7Generation',
    website: 'https://7generation.net/',
    period: 'Mar 2025 — May 2025',
    responsibilities: [
      'Analyzed PCAP files to identify routing issues and traffic anomalies.',
      'Investigated session asymmetry and validated load balancing behavior.',
      'Assisted DevOps engineers in troubleshooting infrastructure incidents.',
    ],
  },
];

export const WORK_TEXT = [
  'Full-Stack Developer | DBT Asia',
  'Aug 2025 - Present',
  '',
  '- Develop web applications with Java, Spring Boot, and Angular.',
  '- Implement integrations with external systems.',
  '- Work with PostgreSQL databases and schema migrations.',
].join('\n');
