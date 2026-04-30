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
    liveUrl: 'https://kesava.github.io/telugu-word-analysis',
    featured: true,
    category: 'Telugu Language Learning',
  },
  {
    id: 'telugu2iast',
    title: 'Telugu to IAST Converter',
    description: 'IAST (Latin script) to Telugu transliteration converter',
    longDescription: 'A bidirectional transliteration tool that converts between Telugu script and IAST (International Alphabet of Sanskrit Transliteration), enabling accurate romanization of Telugu text.',
    technologies: ['JavaScript', 'Unicode', 'Transliteration'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/telugu2iast',
    liveUrl: 'https://kesava.github.io/telugu2iast',
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
    id: 'telugu-wordle',
    title: 'Telugu Wordle',
    description: 'Telugu Wordle variant with template-based puzzle system',
    longDescription: 'An alternative Telugu Wordle implementation featuring a template-based HTML generation system with React loaded from CDN and Babel Standalone for runtime JSX transpilation.',
    technologies: ['React', 'JavaScript', 'Babel Standalone', 'Template Generation'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/telugu-wordle',
    liveUrl: 'https://kesava.github.io/telugu-wordle',
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
  {
    id: 'telugu-sandhi',
    title: 'Telugu Sandhi Splitter',
    description: 'Splits Telugu compound words into constituents using sandhi rules',
    longDescription: 'A computational linguistics tool that breaks apart Telugu sandhi (compound words) by applying Sanskrit and Dravidian sandhi rules, backed by a trie-based lexicon for candidate ranking and validation.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Computational Linguistics'],
    featured: true,
    category: 'Telugu Language Learning',
  },
  {
    id: 'pair-game',
    title: 'Pair Game',
    description: 'Word-matching game with pronunciation via Web Speech API',
    longDescription: 'A Next.js word-matching game where players pair words across languages, with audio pronunciation powered by the Web Speech API.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web Speech API'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/pair-game',
    liveUrl: 'https://kesava.github.io/pair-game',
    featured: false,
    category: 'Telugu Language Learning',
  },
  {
    id: 'cross-stitch',
    title: 'Cross-Stitch Pattern Generator',
    description: 'Converts images into cross-stitch patterns with DMC thread colors',
    longDescription: 'A modular web application that converts uploaded images into printable cross-stitch patterns, matching pixels to a palette of 160+ DMC thread colors using color-distance algorithms.',
    technologies: ['React', 'JavaScript', 'ES Modules', 'Canvas API'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/cross-stitch',
    liveUrl: 'https://kesava.github.io/cross-stitch',
    featured: true,
    category: 'Creative Tools',
  },
  {
    id: 'halftone-emboss',
    title: 'Halftone & Emboss',
    description: 'Converts raster images into vector SVG halftone and emboss art',
    longDescription: 'A client-side image processing tool that transforms photos into two distinct artistic effects: newspaper-style halftone dot patterns and 3D relief emboss effects, outputting clean vector SVGs.',
    technologies: ['React', 'JavaScript', 'SVG', 'Canvas API', 'Babel Standalone'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/halftone-emboss',
    liveUrl: 'https://kesava.github.io/halftone-emboss',
    featured: true,
    category: 'Creative Tools',
  },
  {
    id: 'puddle',
    title: 'Puddle (Telugu Wordle)',
    description: 'Alternative Telugu Wordle variant with a template-based system',
    longDescription: 'A Telugu Wordle variant that uses a template-based HTML generation system with React loaded from CDN, offering a different puzzle mechanic from the main Telugu Wordle.',
    technologies: ['React', 'JavaScript', 'Babel Standalone', 'Template Generation'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/puddle',
    liveUrl: 'https://kesava.github.io/puddle',
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
