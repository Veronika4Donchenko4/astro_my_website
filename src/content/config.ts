import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		})
	}),
});

export const collections = {
	projects: projectsCollection,
};
