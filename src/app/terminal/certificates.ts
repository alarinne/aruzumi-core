export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  credentialUrl?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    issued: 'Jul 2025',
    credentialUrl: 'https://www.credly.com/badges/db7514d0-d772-4db1-873f-1d6994f366bd/print',
  },
  {
    id: 'neural-networks',
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI · Coursera',
    issued: 'Feb 2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/ZO7L3HJ3MJAS',
  },
  {
    id: 'improving-neural-networks',
    title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
    issuer: 'DeepLearning.AI · Coursera',
    issued: 'Jan 2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/9L4DB42ZU58T',
  },
  {
    id: 'structuring-ml-projects',
    title: 'Structuring Machine Learning Projects',
    issuer: 'DeepLearning.AI · Coursera',
    issued: 'Jan 2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/OQQK4461IXW2',
  },
  {
    id: 'linux-essentials',
    title: 'Linux Essentials Professional Development Certificate',
    issuer: 'Cisco',
    issued: 'Apr 2024',
  },
  {
    id: 'scala-functional-programming',
    title: 'Functional Programming Principles in Scala (Scala 2 version)',
    issuer: 'École Polytechnique Fédérale de Lausanne',
    issued: 'Feb 2023',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/LJ6Y5BF5EK2H',
  },
];
