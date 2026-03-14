import { getCollection } from 'astro:content';

export async function getAllPostPreviews() {
    const posts = await getCollection('posts', ({ data }) => data.published);
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getAllUpdates() {
    const updates = await getCollection(
        'updates',
        ({ data }) => data.published
    );
    return updates.sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
    );
}

export function listCategoriesWithCounts(
    posts: Awaited<ReturnType<typeof getAllPostPreviews>>
) {
    const categoryMap: Record<string, number> = {};
    posts.forEach((post) => {
        const category = post.data.category;
        categoryMap[category] = (categoryMap[category] ?? 0) + 1;
    });
    return categoryMap;
}

export function listTags(
    posts: Awaited<ReturnType<typeof getAllPostPreviews>>
) {
    const tags = new Set<string>(posts.flatMap((post) => post.data.tags));
    return Array.from(tags)
        .filter((tag) => !!tag)
        .sort();
}

export function calcWordsAndReadingTime(content: string) {
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    return { wordCount, readingTime: `${readingTime} min.` };
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        // "1st January, 2024" style
    });
}
