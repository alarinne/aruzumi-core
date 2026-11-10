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
