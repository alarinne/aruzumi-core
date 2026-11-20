export interface SkillGroup {
  category: string;
  technologies: string[];
}

export const HARD_SKILLS: SkillGroup[] = [
  {
    category: 'Backend',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Node.js'],
  },
  {
    category: 'Frontend',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Angular Material', 'Bootstrap'],
  },
  {
    category: 'Databases & Migrations',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Flyway'],
  },
  {
    category: 'Tools & Infrastructure',
    technologies: ['Git', 'Docker', 'Linux', 'GitLab CI/CD'],
  },
  {
    category: 'Monitoring',
    technologies: ['Grafana', 'Prometheus'],
  },
];

export interface SoftSkill {
  name: string;
  description: string;
}


export const SOFT_SKILLS: SoftSkill[] = [
  {
    name: 'Problem-solving',
    description: 'Investigate issues, break them down, and find practical solutions.',
  },
  {
    name: 'Ownership',
    description: 'Take responsibility for tasks and follow through on implementation.',
  },
  {
    name: 'Collaboration',
    description: 'Clarify requirements, discuss solutions, and share progress with the team.',
  },
  {
    name: 'Adaptability',
    description: 'Learn unfamiliar tools and technologies to solve the task at hand.',
  },
];
