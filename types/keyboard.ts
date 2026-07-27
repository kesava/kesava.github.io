export interface Keyboard {
  id: string;
  /** English name, e.g. "Telugu". */
  latin: string;
  /** Endonym in its own script, e.g. "తెలుగు". */
  native: string;
  /** Single akshara used as the app's launcher icon, e.g. "తె". */
  glyph: string;
  description: string;
  liveUrl: string;
}
