export interface Keyboard {
  id: string;
  /** English name, e.g. "Telugu". */
  latin: string;
  /** Endonym in its own script, e.g. "తెలుగు". */
  native: string;
  /** Single akshara used as the app's launcher icon, e.g. "తె". */
  glyph: string;
  description: string;
  /** Human-readable corpus size, or a note that it's still a seed list. */
  dictionary: string;
  /** Script name and its Unicode block. */
  script: string;
  liveUrl: string;
  githubUrl: string;
}
