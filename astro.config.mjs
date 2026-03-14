// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { aocLang } from './src/lib/shiki-aoc-lang.ts';
import { aocTransformer } from './src/lib/shiki-aoc-transformer.ts';

export default defineConfig({
    site: 'https://things.martacodes.it',
    legacy: {
        collections: true,
    },
    image: {
        // We use Cloudinary for images, skip Astro's built-in image optimization
        service: { entrypoint: 'astro/assets/services/noop' },
    },
    vite: {
        ssr: {
            noExternal: ['@theme-toggles/react'],
        },
    },
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        mdx({
            remarkPlugins: [remarkGfm, remarkA11yEmoji],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
            shikiConfig: {
                theme: 'tokyo-night',
                langs: [aocLang],
                transformers: [aocTransformer()],
            },
        }),
        sitemap(),
    ],
});
