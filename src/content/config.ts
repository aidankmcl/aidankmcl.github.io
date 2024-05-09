import { z, defineCollection, reference } from "astro:content";

const experiences = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum(["fulltime", "contract"]),
    company: z.string(),
    start: z.date(),
    end: z.date().optional(),
    skills: z.array(reference("skills")),
  }),
});

const skills = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    years: z.number(),
    type: z.enum(["primary", "secondary", "hobby"]),
    category: z.enum(["Languages", "Frameworks", "Databases", "Dev Tooling + Infra", "Design", "3D"]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    blurb: z.string(),
    thumbnail: image(),
    skills: z.array(reference("skills")),
    start: z.date(),
    end: z.date().optional(),
    git: z.string().optional(),
    featured: z.boolean().optional(),
    company: reference("experiences").optional(),
  }),
});

export const collections = {
  experiences,
  skills,
  projects,
};
