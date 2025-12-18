import { Project } from '@/types/project';

// Projects ranked by technical significance and impact
export const projects: Project[] = [
  {
    id: 'nanobasic',
    title: 'NanoBasic Interpreter',
    description: 'Complete BASIC interpreter with lexer, parser, AST, and debugger',
    longDescription: 'A full-featured BASIC interpreter implementation with tokenization, parsing, abstract syntax tree generation, and debugging capabilities.',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'Compiler Design'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/nanobasic',
    liveUrl: 'https://kesava.github.io/nanobasic',
    featured: true,
    category: 'Development Tools',
  },
  {
    id: 'telugu-word-analysis',
    title: 'Telugu Word Analysis',
    description: 'Linguistic analysis tool with syllable-based Telugu analysis',
    longDescription: 'Advanced linguistic analysis tool featuring syllable-based analysis of over 54,000 Telugu words across 27+ linguistic categories.',
    technologies: ['JavaScript', 'Chart.js', 'Python', 'Computational Linguistics'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/telugu-word-analysis',
    featured: true,
    category: 'Telugu Language Learning',
  },
  {
    id: 'telugu2iast',
    title: 'Telugu to IAST Converter',
    description: 'IAST (Latin script) to Telugu transliteration converter',
    longDescription: 'A bidirectional transliteration tool that converts between Telugu script and IAST (International Alphabet of Sanskrit Transliteration), enabling accurate romanization of Telugu text.',
    technologies: ['JavaScript', 'Unicode', 'Transliteration'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/iast-telugu',
    liveUrl: 'https://kesava.github.io/iast-telugu',
    featured: true,
    category: 'Telugu Language Learning',
  },
  {
    id: 'digit-recognition',
    title: 'Digit Recognition',
    description: 'Machine learning model for handwritten digit recognition',
    longDescription: 'A neural network-based digit recognition system trained on handwritten digits, featuring real-time prediction and visualization of model confidence.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'JavaScript', 'Canvas API'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/digit-recognition',
    liveUrl: 'https://kesava.github.io/digit-recognition',
    featured: true,
    category: 'Machine Learning',
  },
  {
    id: 'pair-game',
    title: 'Pair Game',
    description: 'Word-matching game with Web Speech API for pronunciation practice',
    longDescription: 'Next.js application featuring word-matching games with text-to-speech pronunciation support using the Web Speech API.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web Speech API'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/pair-game',
    liveUrl: 'https://kesava.github.io/pair-game',
    featured: true,
    category: 'Telugu Language Learning',
  },
  {
    id: 'telugu-quiz',
    title: 'Telugu Quiz',
    description: 'Interactive Telugu language quiz application with routing and animations',
    longDescription: 'A React-based Telugu language learning quiz with multiple routes, animated transitions, and comprehensive testing.',
    technologies: ['React', 'TypeScript', 'React Router', 'CSS Modules'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/telugu-quiz',
    liveUrl: 'https://kesava.github.io/telugu-quiz',
    featured: false,
    category: 'Telugu Language Learning',
  },
  {
    id: 'puddle',
    title: 'Puddle',
    description: 'Telugu Wordle variant with template-based puzzle system',
    longDescription: 'An alternative Telugu Wordle implementation featuring a template-based HTML generation system with React loaded from CDN and Babel Standalone for runtime JSX transpilation.',
    technologies: ['React', 'JavaScript', 'Babel Standalone', 'Template Generation'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/puddle',
    liveUrl: 'https://kesava.github.io/puddle',
    featured: false,
    category: 'Telugu Language Learning',
  },
  {
    id: 'telugu-new-words',
    title: 'Telugu New Words',
    description: 'Vocabulary builder for learning new Telugu words',
    longDescription: 'An interactive application for expanding Telugu vocabulary with spaced repetition, pronunciation guides, and contextual examples.',
    technologies: ['React', 'JavaScript', 'Local Storage', 'Web Speech API'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/telugu-new-words',
    liveUrl: 'https://kesava.github.io/telugu-new-words',
    featured: false,
    category: 'Telugu Language Learning',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach((project) => {
    if (project.category) {
      categories.add(project.category);
    }
  });
  return Array.from(categories).sort();
}
