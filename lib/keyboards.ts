import { Keyboard } from '@/types/keyboard';

/**
 * The four Indic keyboards, in the same display order the apps themselves
 * use in their title-tap switcher (see `src/lib/siblings.ts` in each repo).
 *
 * Each app is its own repository and its own GitHub Pages deploy — they are
 * not subdirectories of this site.
 *
 * The descriptions are deliberately honest about the gap between them:
 * Telugu and Hindi ship real corpora, Tamil and Kannada are still on the
 * ~100-word seed lists they were forked with. Update these when their
 * corpora land.
 */
export const KEYBOARDS: Keyboard[] = [
  {
    id: 'telugu',
    latin: 'Telugu',
    native: 'తెలుగు',
    glyph: 'తె',
    description:
      'The original, and the most complete. A 54,000-word dictionary with English glosses and IAST, reverse lookup, and a word of the day. The other three are forks of it.',
    liveUrl: 'https://kesava.github.io/telugu-keyboard/',
  },
  {
    id: 'hindi',
    latin: 'Hindi',
    native: 'हिन्दी',
    glyph: 'हि',
    description:
      'Devanagari, with the largest word list of the four at 216,000 entries. Adds a reph modifier and the nukta consonants — क़ ख़ ग़ ज़ फ़ ड़ ढ़ — for Perso-Arabic loanwords.',
    liveUrl: 'https://kesava.github.io/hindi-keyboard/',
  },
  {
    id: 'tamil',
    latin: 'Tamil',
    native: 'தமிழ்',
    glyph: 'த',
    description:
      'A simpler grid than the others — Tamil has fewer consonants and no voiced or aspirated distinctions. Still on a seed word list, so predictions are thin.',
    liveUrl: 'https://kesava.github.io/tamil-keyboard/',
  },
  {
    id: 'kannada',
    latin: 'Kannada',
    native: 'ಕನ್ನಡ',
    glyph: 'ಕ',
    description:
      'Closest of the four to Telugu — the two scripts share an ancestor and most of their structure. Also still on a seed word list.',
    liveUrl: 'https://kesava.github.io/kannada-keyboard/',
  },
];

export function getAllKeyboards(): Keyboard[] {
  return KEYBOARDS;
}

export function getKeyboardById(id: string): Keyboard | undefined {
  return KEYBOARDS.find((kb) => kb.id === id);
}
