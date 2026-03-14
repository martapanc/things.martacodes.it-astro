import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        published: z.boolean().default(true),
        category: z.enum([
            'ai',
            'software-development',
            'job-search',
            'advent-of-code',
            'uncategorized',
        ]),
        tags: z.array(z.string()).default([]),
        image: z.string().optional(),
        toc: z.boolean().default(false),
    }),
});

const updates = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        published: z.boolean().default(true),
        tags: z.array(z.string()).default([]),
        image: z.string().optional(),
    }),
});

export const collections = { posts, updates };
