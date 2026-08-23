import { defineCollection, z } from 'astro:content';

export const toolSchema = z.object({
  title: z.string(),
  titleEn: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  platform: z.string(),
  category: z.string(),
  features: z.array(z.object({
    title: z.string(),
    text: z.string(),
  })).default([]),
  stats: z.array(z.object({
    label: z.string(),
    value: z.string(),
    sub: z.string(),
  })).optional().default([]),
  faq: z.array(z.object({
    q: z.string(),
    a: z.string(),
  })).optional().default([]),
});

export type ToolData = z.infer<typeof toolSchema>;

export const collections = {
  tools: defineCollection({
    schema: toolSchema,
  }),
};