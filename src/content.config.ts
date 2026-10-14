import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 团队成员：一篇 Markdown = 一位成员
const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    name_en: z.string().optional(),
    role: z.string(),
    photo: z.string().optional(),
    research: z.string().optional(),
    email: z.string().optional(),
    bio: z.string().optional(),
    order: z.number().default(999),
  }),
});

// 发表论文：一篇 Markdown = 一篇论文（年份用于倒序与筛选）
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    doi: z.string().default(''),
    pmid: z.string().default(''),
    citation: z.string().optional(),
  }),
});

// 新闻动态：一篇 Markdown = 一条新闻
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { members, publications, news };
