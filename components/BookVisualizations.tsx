'use client';

import Link from 'next/link';
import { Book } from '@/lib/books';

export interface BookWithDate extends Book {
  yearNum: number | null;
  readDate: Date | null;
}

export function attachDates(books: Book[], dates: Record<string, string>): BookWithDate[] {
  return books.map((b) => {
    const yearNum = b.year ? Number(b.year) : null;
    const raw = dates[b.slug];
    const postDate = raw ? new Date(raw) : null;
    const postValid = postDate && !isNaN(postDate.getTime());
    const readDate =
      postValid && yearNum && postDate.getFullYear() === yearNum ? postDate : null;
    return { ...b, yearNum, readDate };
  });
}

function dayOfYear(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function weeksBetween(a: Date, b: Date): number {
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24 * 7));
}

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

function getYears(books: BookWithDate[]): number[] {
  const ys = new Set<number>();
  books.forEach((b) => {
    if (b.yearNum) ys.add(b.yearNum);
  });
  return Array.from(ys).sort();
}

// ─────────────────────────────────────────────────────────────────────────────
// A — Weekly sparkline
// ─────────────────────────────────────────────────────────────────────────────
export function WeeklySparkline({ books }: { books: BookWithDate[] }) {
  const dated = books.filter((b) => b.readDate).sort((a, b) => a.readDate!.getTime() - b.readDate!.getTime());
  if (dated.length === 0) return null;

  const startYear = dated[0].readDate!.getFullYear();
  const start = new Date(startYear, 0, 1);
  const today = new Date();
  const totalWeeks = weeksBetween(start, today) + 1;

  const counts = new Array(totalWeeks).fill(0);
  dated.forEach((b) => {
    const w = weeksBetween(start, b.readDate!);
    if (w >= 0 && w < totalWeeks) counts[w]++;
  });

  const W = 600;
  const H = 36;
  const max = Math.max(...counts, 1);
  const barW = W / totalWeeks;

  const years = getYears(books);

  return (
    <div className="mb-12">
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-serif text-sm text-neutral-500 dark:text-neutral-400">Reading pace</span>
        <span className="font-serif text-sm text-neutral-500 dark:text-neutral-400">
          {dated.length} of {books.length} books with known dates
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H + 14}`} className="w-full text-neutral-700 dark:text-neutral-300" preserveAspectRatio="none">
        {counts.map((c, i) => {
          if (c === 0) return null;
          const h = (c / max) * H;
          return (
            <rect
              key={i}
              x={i * barW}
              y={H - h}
              width={Math.max(barW - 0.3, 0.6)}
              height={h}
              fill="currentColor"
              opacity={0.85}
            />
          );
        })}
        <line x1={0} y1={H} x2={W} y2={H} stroke="currentColor" strokeWidth={0.4} opacity={0.4} />
        {years.map((y) => {
          const x = (weeksBetween(start, new Date(y, 0, 1)) / totalWeeks) * W;
          return (
            <text key={y} x={x + 2} y={H + 11} fontSize={9} fill="currentColor" opacity={0.55} fontFamily="serif">
              {y}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Level 1 — Year sparkbar (replaces year pills, acts as filter)
// ─────────────────────────────────────────────────────────────────────────────
export function YearSparkbar({
  books,
  selectedYear,
}: {
  books: BookWithDate[];
  selectedYear: string | null;
}) {
  const years = getYears(books);
  const counts = years.map((y) => books.filter((b) => b.yearNum === y).length);
  const max = Math.max(...counts, 1);
  const total = books.length;

  return (
    <div className="mb-16">
      <h2 className="font-display text-2xl font-bold mb-6 text-heading">Year Read</h2>
      <div className="flex items-end gap-6">
        <Link
          href="/books"
          className={`group flex flex-col items-center ${!selectedYear ? 'text-heading' : 'text-neutral-500 dark:text-neutral-400 hover:text-heading'}`}
        >
          <span className="font-serif text-xs mb-1">{total}</span>
          <div
            className={`w-12 ${!selectedYear ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-500 dark:group-hover:bg-neutral-400'} transition-colors`}
            style={{ height: 80 }}
          />
          <span className="font-serif text-xs mt-2">all</span>
        </Link>
        {years.map((y, i) => {
          const isSel = selectedYear === String(y);
          const h = Math.max((counts[i] / max) * 80, 4);
          return (
            <Link
              key={y}
              href={`/books?year=${y}`}
              className={`group flex flex-col items-center ${isSel ? 'text-heading' : 'text-neutral-500 dark:text-neutral-400 hover:text-heading'}`}
            >
              <span className="font-serif text-xs mb-1">{counts[i]}</span>
              <div
                className={`w-12 ${isSel ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-500 dark:group-hover:bg-neutral-400'} transition-colors`}
                style={{ height: h }}
              />
              <span className="font-serif text-xs mt-2">{y}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// B — Monthly small multiples
// ─────────────────────────────────────────────────────────────────────────────
export function MonthlyMultiples({ books }: { books: BookWithDate[] }) {
  const dated = books.filter((b) => b.readDate);
  if (dated.length === 0) return null;

  const years = getYears(books);
  // year -> [month counts]
  const grid: Record<number, number[]> = {};
  years.forEach((y) => (grid[y] = new Array(12).fill(0)));
  dated.forEach((b) => {
    const y = b.readDate!.getFullYear();
    const m = b.readDate!.getMonth();
    if (grid[y]) grid[y][m]++;
  });

  const allCounts = Object.values(grid).flat();
  const max = Math.max(...allCounts, 1);
  const today = new Date();

  return (
    <div className="mb-12">
      <h3 className="font-serif text-sm text-neutral-500 dark:text-neutral-400 mb-3">Books finished per month</h3>
      <div className="font-serif text-neutral-700 dark:text-neutral-300">
        <div className="grid items-center text-xs" style={{ gridTemplateColumns: '3rem repeat(12, 1fr) 3rem' }}>
          <div />
          {MONTHS.map((m, i) => (
            <div key={i} className="text-center text-neutral-500 dark:text-neutral-400 pb-1">
              {m}
            </div>
          ))}
          <div className="text-right text-neutral-500 dark:text-neutral-400 pb-1">Σ</div>
        </div>
        {years.map((y) => {
          const row = grid[y];
          const total = row.reduce((a, b) => a + b, 0);
          return (
            <div key={y} className="grid items-center gap-px text-xs" style={{ gridTemplateColumns: '3rem repeat(12, 1fr) 3rem' }}>
              <div className="text-neutral-500 dark:text-neutral-400 py-1">{y}</div>
              {row.map((c, mi) => {
                const future = y === today.getFullYear() && mi > today.getMonth();
                const op = c === 0 ? 0 : 0.15 + 0.85 * (c / max);
                return (
                  <div key={mi} className="flex items-center justify-center" style={{ height: 22 }}>
                    {future ? (
                      <div className="w-full h-full" />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: `rgba(127,127,127,${op})` }}
                        title={`${y}-${String(mi + 1).padStart(2, '0')}: ${c} book${c === 1 ? '' : 's'}`}
                      >
                        {c > 0 && <span className="text-[10px] text-neutral-900 dark:text-neutral-100">{c}</span>}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="text-right text-neutral-700 dark:text-neutral-300 py-1">{total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// C — Cumulative pace overlay
// ─────────────────────────────────────────────────────────────────────────────
export function CumulativePace({ books }: { books: BookWithDate[] }) {
  const dated = books.filter((b) => b.readDate);
  if (dated.length === 0) return null;

  const years = getYears(books);
  const today = new Date();
  const todayDoy = dayOfYear(today);
  const todayYear = today.getFullYear();

  // For each year, build sorted day-of-year array
  const series: Record<number, { doy: number; cum: number }[]> = {};
  years.forEach((y) => {
    const events = dated
      .filter((b) => b.readDate!.getFullYear() === y)
      .map((b) => dayOfYear(b.readDate!))
      .sort((a, b) => a - b);
    series[y] = events.map((doy, i) => ({ doy, cum: i + 1 }));
  });

  const maxCum = Math.max(...years.map((y) => series[y].length), 1);

  const W = 600;
  const H = 200;
  const padL = 28;
  const padR = 56;
  const padT = 10;
  const padB = 24;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const xScale = (doy: number) => padL + (doy / 365) * innerW;
  const yScale = (cum: number) => padT + innerH - (cum / maxCum) * innerH;

  const monthTicks = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const monthLabels = MONTHS;

  // Path for each year
  const paths: Record<number, string> = {};
  years.forEach((y) => {
    const pts = series[y];
    if (pts.length === 0) {
      paths[y] = '';
      return;
    }
    let d = `M ${xScale(0)} ${yScale(0)}`;
    let cum = 0;
    pts.forEach((p) => {
      d += ` L ${xScale(p.doy)} ${yScale(cum)}`;
      cum = p.cum;
      d += ` L ${xScale(p.doy)} ${yScale(cum)}`;
    });
    const endDoy = y === todayYear ? todayDoy : 365;
    d += ` L ${xScale(endDoy)} ${yScale(cum)}`;
    paths[y] = d;
  });

  // Opacities: most recent year strongest
  const yearOpacity = (y: number, i: number) => {
    if (y === todayYear) return 1;
    return 0.35 + 0.25 * (i / Math.max(years.length - 1, 1));
  };

  return (
    <div className="mb-12">
      <h3 className="font-serif text-sm text-neutral-500 dark:text-neutral-400 mb-3">Cumulative pace by day of year</h3>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full text-neutral-700 dark:text-neutral-300">
        {/* range frame (Tufte): just two short axis segments */}
        <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke="currentColor" strokeWidth={0.4} opacity={0.4} />
        <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} stroke="currentColor" strokeWidth={0.4} opacity={0.4} />

        {/* sparse y ticks: 0, maxCum */}
        <text x={padL - 4} y={padT + innerH + 3} fontSize={9} textAnchor="end" fill="currentColor" opacity={0.55} fontFamily="serif">0</text>
        <text x={padL - 4} y={padT + 4} fontSize={9} textAnchor="end" fill="currentColor" opacity={0.55} fontFamily="serif">{maxCum}</text>

        {/* month ticks */}
        {monthTicks.map((t, i) => (
          <text key={i} x={xScale(t) + 2} y={padT + innerH + 12} fontSize={9} fill="currentColor" opacity={0.45} fontFamily="serif">
            {monthLabels[i]}
          </text>
        ))}

        {/* today marker */}
        <line
          x1={xScale(todayDoy)}
          y1={padT}
          x2={xScale(todayDoy)}
          y2={padT + innerH}
          stroke="currentColor"
          strokeWidth={0.4}
          opacity={0.25}
          strokeDasharray="2 2"
        />

        {/* one line per year */}
        {years.map((y, i) => {
          const pts = series[y];
          const last = pts[pts.length - 1];
          if (!last) return null;
          const endDoy = y === todayYear ? todayDoy : 365;
          const endX = xScale(endDoy);
          const endY = yScale(last.cum);
          return (
            <g key={y} opacity={yearOpacity(y, i)}>
              <path d={paths[y]} fill="none" stroke="currentColor" strokeWidth={1.2} />
              <text x={endX + 4} y={endY + 3} fontSize={10} fill="currentColor" fontFamily="serif">
                {y} · {last.cum}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="font-serif text-xs text-neutral-500 dark:text-neutral-400 mt-2 italic">
        Steeper slope = faster pace. {todayYear} line ends at today.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Topic stats helpers
// ─────────────────────────────────────────────────────────────────────────────
interface TopicStat {
  tag: string;
  total: number;
  byYear: Record<number, number>;
  recCount: number;
}

const BORING_TAGS = new Set(['books']);

function computeTopicStats(books: BookWithDate[]): TopicStat[] {
  const map = new Map<string, TopicStat>();
  books.forEach((b) => {
    const y = b.yearNum;
    const isRec = b.recommendationLevel === 'recommended' || b.recommendationLevel === 'highly_recommended';
    b.tags.forEach((t) => {
      if (BORING_TAGS.has(t)) return;
      const s = map.get(t) ?? { tag: t, total: 0, byYear: {}, recCount: 0 };
      s.total++;
      if (y) s.byYear[y] = (s.byYear[y] ?? 0) + 1;
      if (isRec) s.recCount++;
      map.set(t, s);
    });
  });
  return Array.from(map.values()).sort((a, b) => b.total - a.total || a.tag.localeCompare(b.tag));
}

// ─────────────────────────────────────────────────────────────────────────────
// Level 2 — Topics frequency list with year strip
// ─────────────────────────────────────────────────────────────────────────────
export function TopicsFrequencyList({ books }: { books: BookWithDate[] }) {
  const stats = computeTopicStats(books);
  const years = getYears(books);
  const multi = stats.filter((s) => s.total >= 2);
  const singletons = stats.filter((s) => s.total === 1);
  const max = multi[0]?.total ?? 1;
  const maxBarW = 140;

  return (
    <div className="mb-16">
      <h2 className="font-display text-2xl font-bold mb-2 text-heading">Topics</h2>
      <p className="font-serif text-xs text-neutral-500 dark:text-neutral-400 mb-6">
        Bar = book count. Year strip shows {years.join(' · ')}.
      </p>
      <div className="space-y-1">
        {multi.map((s) => {
          const yearMax = Math.max(...Object.values(s.byYear), 1);
          return (
            <div key={s.tag} className="grid items-center gap-3 text-sm" style={{ gridTemplateColumns: '8rem 1fr 2rem 3rem' }}>
              <Link
                href={`/blog/tag/${s.tag}`}
                className="font-serif text-neutral-700 dark:text-neutral-300 hover:text-heading transition-colors truncate"
              >
                {s.tag}
              </Link>
              <div className="flex items-center">
                <div
                  className="bg-neutral-400 dark:bg-neutral-500"
                  style={{ width: `${(s.total / max) * maxBarW}px`, height: 10 }}
                />
                <span className="font-serif text-xs text-neutral-500 dark:text-neutral-400 ml-2">{s.total}</span>
              </div>
              <div className="flex gap-px">
                {years.map((y) => {
                  const c = s.byYear[y] ?? 0;
                  const op = c === 0 ? 0 : 0.15 + 0.85 * (c / yearMax);
                  return (
                    <div
                      key={y}
                      className="w-2 h-3"
                      style={{ backgroundColor: op === 0 ? 'transparent' : `rgba(127,127,127,${op})` }}
                      title={`${y}: ${c}`}
                    />
                  );
                })}
              </div>
              <span className="font-serif text-xs text-neutral-500 dark:text-neutral-400">
                {s.recCount > 0 ? `★${s.recCount}` : ''}
              </span>
            </div>
          );
        })}
      </div>
      {singletons.length > 0 && (
        <p className="font-serif text-xs text-neutral-500 dark:text-neutral-400 mt-4 leading-relaxed">
          <span className="text-neutral-700 dark:text-neutral-300">Also (1 each): </span>
          {singletons.map((s, i) => (
            <span key={s.tag}>
              <Link href={`/blog/tag/${s.tag}`} className="hover:text-heading transition-colors">
                {s.tag}
              </Link>
              {i < singletons.length - 1 && ' · '}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Level 3 — Topic × Year heatmap
// ─────────────────────────────────────────────────────────────────────────────
export function TopicHeatmap({ books }: { books: BookWithDate[] }) {
  const stats = computeTopicStats(books).filter((s) => s.total >= 2);
  const years = getYears(books);
  const max = Math.max(...stats.flatMap((s) => Object.values(s.byYear)), 1);

  return (
    <div className="mb-16">
      <h2 className="font-display text-2xl font-bold mb-2 text-heading">Topic × Year</h2>
      <p className="font-serif text-xs text-neutral-500 dark:text-neutral-400 mb-6">
        Ink density = books per (topic, year). ★ = recommended.
      </p>
      <div
        className="grid items-center text-xs gap-x-3"
        style={{ gridTemplateColumns: `9rem repeat(${years.length}, 1.5rem) 1.5rem 2rem` }}
      >
        <div />
        {years.map((y) => (
          <div key={y} className="text-center text-neutral-500 dark:text-neutral-400 pb-1 font-serif">
            {`'${String(y).slice(2)}`}
          </div>
        ))}
        <div className="text-center text-neutral-500 dark:text-neutral-400 pb-1 font-serif">★</div>
        <div className="text-right text-neutral-500 dark:text-neutral-400 pb-1 font-serif">Σ</div>
        {stats.map((s) => (
          <div key={s.tag} className="contents">
            <Link
              href={`/blog/tag/${s.tag}`}
              className="font-serif text-neutral-700 dark:text-neutral-300 hover:text-heading transition-colors truncate py-0.5"
            >
              {s.tag}
            </Link>
            {years.map((y) => {
              const c = s.byYear[y] ?? 0;
              const op = c === 0 ? 0 : 0.15 + 0.85 * (c / max);
              return (
                <div
                  key={y}
                  className="flex items-center justify-center"
                  style={{ height: 18, backgroundColor: c === 0 ? 'transparent' : `rgba(127,127,127,${op})` }}
                  title={`${s.tag} · ${y}: ${c}`}
                >
                  {c > 0 && <span className="text-[10px] text-neutral-900 dark:text-neutral-100">{c}</span>}
                </div>
              );
            })}
            <div className="text-center text-amber-500 font-serif text-[11px]">{s.recCount > 0 ? s.recCount : ''}</div>
            <div className="text-right font-serif text-neutral-700 dark:text-neutral-300">{s.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
