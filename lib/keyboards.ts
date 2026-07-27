import { Keyboard } from '@/types/keyboard';

/**
 * The four Indic keyboards, in the same display order the apps themselves
 * use in their title-tap switcher (see `src/lib/siblings.ts` in each repo).
 *
 * Each app is its own repository and its own GitHub Pages deploy — they are
 * not subdirectories of this site, so `githubUrl` points at the standalone
 * repo rather than a path inside kesava.github.io.
 *
 * `dictionary` is deliberately honest about the gap between them: Telugu and
 * Hindi ship real corpora, Tamil and Kannada are still on the ~100-word seed
 * lists they were forked with. Update these when their corpora land.
 */
export const KEYBOARDS: Keyboard[] = [
  {
    id: 'telugu',
    latin: 'Telugu',
    native: 'తెలుగు',
    glyph: 'తె',
    description:
      'The original, and the most complete. Word predictions, a learner’s dictionary with English glosses and IAST, reverse lookup from English, and a word-of-the-day chip. The other three are forks of it.',
    dictionary: '54,198 words',
    script: 'Telugu (U+0C00–U+0C7F)',
    liveUrl: 'https://kesava.github.io/telugu-keyboard/',
    githubUrl: 'https://github.com/kesava/telugu-keyboard',
  },
  {
    id: 'hindi',
    latin: 'Hindi',
    native: 'हिन्दी',
    glyph: 'हि',
    description:
      'Devanagari, with the largest word list of the four — built from the hi_IN Hunspell dictionary. Adds a reph modifier and the nukta consonants (क़ ख़ ग़ ज़ फ़ ड़ ढ़) for Perso-Arabic loanwords.',
    dictionary: '216,007 words',
    script: 'Devanagari (U+0900–U+097F)',
    liveUrl: 'https://kesava.github.io/hindi-keyboard/',
    githubUrl: 'https://github.com/kesava/hindi-keyboard',
  },
  {
    id: 'tamil',
    latin: 'Tamil',
    native: 'தமிழ்',
    glyph: 'த',
    description:
      'Tamil’s smaller consonant inventory and its lack of voiced/aspirated distinctions make for a simpler grid than the others. Still on a seed word list — predictions are limited until a full corpus is added.',
    dictionary: 'Seed list (~100 words)',
    script: 'Tamil (U+0B80–U+0BFF)',
    liveUrl: 'https://kesava.github.io/tamil-keyboard/',
    githubUrl: 'https://github.com/kesava/tamil-keyboard',
  },
  {
    id: 'kannada',
    latin: 'Kannada',
    native: 'ಕನ್ನಡ',
    glyph: 'ಕ',
    description:
      'Closest of the four to Telugu — the two scripts share an ancestor and most of their structure. Also still on a seed word list pending a full corpus.',
    dictionary: 'Seed list (~100 words)',
    script: 'Kannada (U+0C80–U+0CFF)',
    liveUrl: 'https://kesava.github.io/kannada-keyboard/',
    githubUrl: 'https://github.com/kesava/kannada-keyboard',
  },
];

export function getAllKeyboards(): Keyboard[] {
  return KEYBOARDS;
}

export function getKeyboardById(id: string): Keyboard | undefined {
  return KEYBOARDS.find((kb) => kb.id === id);
}
