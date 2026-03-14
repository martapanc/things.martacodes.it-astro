import type { LanguageRegistration } from 'shiki';

/**
 * Custom Shiki language for Advent of Code grid visualizations.
 * Maps to classes that aoc.scss styles target.
 */
export const aocLang: LanguageRegistration = {
    name: 'aoc',
    scopeName: 'source.aoc',
    fileTypes: [],
    patterns: [
        {
            name: 'keyword.other.hash.aoc',
            match: '#',
        },
        {
            name: 'variable.other.caret.aoc',
            match: '[\\^><v]',
        },
        {
            name: 'comment.block.dot.aoc',
            match: '\\.',
        },
        {
            name: 'entity.name.class.aoc',
            match: '[A-Z]',
        },
        {
            name: 'support.function.pipe.aoc',
            match: '[+|\\-]',
        },
        {
            name: 'constant.character.at.aoc',
            match: '@',
        },
        {
            name: 'string.quoted.box.aoc',
            match: '[\\[\\]]',
        },
    ],
    repository: {},
};
