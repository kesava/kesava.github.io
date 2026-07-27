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
    liveUrl: 'https://kesava.github.io/telugu-sandhi',
    category: 'Telugu Language Learning',
  },
  {
    id: 'telugu-padyam',
    title: 'Telugu Padyam — ఛందో మందిరం',
    description: 'Inspects a Telugu padyam and reports its meter, ganas, yati, and prāsa',
    longDescription: 'A prosody analyzer for Telugu classical verse. Given a padyam, it segments aksharas, marks laghu/guru weights, identifies ganas, matches the closest chandas (vṛtta meter) with a confidence score, highlights yati and prāsa, and offers conservative sandhi/padaccheda hints alongside a reading line with yati pauses.',
    technologies: ['React', 'TypeScript', 'Computational Linguistics', 'Telugu Prosody'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/telugu-padyam',
    liveUrl: 'https://kesava.github.io/telugu-padyam',
    featured: true,
    category: 'Telugu Language Learning',
  },
  {
    id: 'chandhassu',
    title: 'Chandhassu — Sanskrit Prosody',
    description: 'Interactive companion to an essay on Sanskrit meters (chandas)',
    longDescription: 'Teaches classical Sanskrit meters — fixed sequences of laghu (short) and guru (long) syllables — through Web Audio playback, tap-along demos, a de Bruijn sequence explainer, a gallery of 18 canonical meters with verses, and an ear-training quiz.',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Web Audio API'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/chandhassu',
    liveUrl: 'https://kesava.github.io/chandhassu',
    featured: true,
    category: 'Telugu Language Learning',
  },
  {
    id: 'learn-telugu',
    title: 'Learn Telugu',
    description: 'Mobile-friendly Telugu course for a heritage learner',
    longDescription: 'A structured Telugu learning app adapting the Central Institute of Indian Languages\' Intensive Course in Telugu lesson-by-lesson. Built originally for a ten-year-old heritage learner in the family, with mobile-first interactions and validated content pipelines.',
    technologies: ['JavaScript', 'HTML', 'Static Site', 'Language Pedagogy'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/learn-telugu',
    liveUrl: 'https://kesava.github.io/learn-telugu',
    featured: false,
    category: 'Telugu Language Learning',
  },
  {
    id: 'indic-keyboards',
    title: 'Indic Script Keyboards',
    description: 'Virtual keyboards for Telugu, Hindi, Tamil, and Kannada',
    longDescription: 'A family of four on-screen keyboards for typing Indic scripts in the browser. Each tracks the akshara you are part-way through and reshapes the key grid accordingly — vowel signs after a bare consonant, real conjuncts after a virama — with dictionary-backed word prediction, ITRANS romanised input, and English reverse lookup. All four install as offline PWAs. Telugu and Hindi ship full corpora (54k and 216k words); Tamil and Kannada are still on seed word lists.',
    technologies: ['React', 'TypeScript', 'Vite', 'PWA', 'Indic Unicode'],
    // Four standalone repos, not subdirectories of this site — the landing
    // page links out to each one.
    githubUrl: 'https://github.com/kesava/telugu-keyboard',
    liveUrl: '/keyboards',
    featured: true,
    category: 'Indic Language Tools',
  },
  {
    id: 'calendars',
    title: 'Calendars Across Traditions',
    description: 'Comparison of Gregorian, Hindu, Islamic, and Jewish calendars',
    longDescription: 'A reference tool that renders the Gregorian, Hindu, Islamic, and Jewish calendars side by side, with date-arithmetic helpers and a leap-year explorer. Useful for cross-referencing festival dates and historical events across calendrical systems.',
    technologies: ['JavaScript', 'HTML', 'Calendar Algorithms'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/calendars',
    liveUrl: 'https://kesava.github.io/calendars',
    featured: false,
    category: 'Reference Tools',
  },
  {
    id: 'explainers',
    title: 'Interactive Explainers',
    description: 'One-page React explainers with visualizations and exercises',
    longDescription: 'A growing collection of interactive, one-page explainers. Each teaches a single concept through visualizations, step-through animations, interactive demos, fill-in-the-blank exercises, and recall flash cards — one directory per topic, auto-registered into a shared shell.',
    technologies: ['React', 'Vite', 'HashRouter', 'Interactive Learning'],
    githubUrl: 'https://github.com/kesava/kesava.github.io/tree/main/explainers',
    liveUrl: 'https://kesava.github.io/explainers',
    featured: true,
    category: 'Explainers',
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
