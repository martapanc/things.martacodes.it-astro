import type { ShikiTransformer } from 'shiki';

/**
 * Colors matching the original aoc.scss / highlight.js classes,
 * adapted for the tokyo-night dark background.
 */
const AOC_COLORS = {
    dot: 'rgba(248,250,252,0.30)',  // text-gray-50/35 → dimmed dots
    hash: '#e2e8f0',                 // text-slate-200  → walls
    up: '#16a34a',                   // text-green-600  → uppercase letters (robots, start pos)
    pipe: '#818cf8',                 // text-indigo-400 → pipes and dashes
    caret: '#60a5fa',                // text-blue-400   → direction carets (^><v)
    at: '#f59e0b',                   // text-amber-500  → @ symbols
    box: '#c2410c',                  // text-orange-700 → brackets []
} as const;

type AocType = keyof typeof AOC_COLORS;

function classifyAocToken(content: string): AocType | null {
    if (/^\.+$/.test(content)) return 'dot';
    if (/^#+$/.test(content)) return 'hash';
    if (/^[A-Z]+$/.test(content)) return 'up';
    if (/^[+\-|]+$/.test(content)) return 'pipe';
    if (/^[\^><v]+$/.test(content)) return 'caret';
    if (/^@+$/.test(content)) return 'at';
    if (/^[\[\]]+$/.test(content)) return 'box';
    return null;
}

export function aocTransformer(): ShikiTransformer {
    return {
        name: 'shiki-transformer-aoc',
        // Shiki v3: span(hast, line, col, lineElement, token)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        span(element: any, _line: any, _col: any, _lineEl: any, token: any) {
            if (this.options.lang !== 'aoc') return;

            const content = (token?.content ?? '').trim();
            const type = classifyAocToken(content);
            if (!type) return;

            element.properties ??= {};
            element.properties.style = `color:${AOC_COLORS[type]}`;
        },
    };
}
