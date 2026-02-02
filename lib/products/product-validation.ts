import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(120, { message: "Name must be less than 120 characters." }),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least of 3 characters" })
    .max(140, { message: "Slug must be less than 140 characters." }),
  description: z.string().optional(),
  tagline: z
    .string()
    .max(200, { message: "Tagline must be less than 200 characters." }),

  websiteUrl: z.string().min(1, { message: "Website URL is required" }),
  tags: z
    .string()
    .min(1, { message: "Atleast one tag is required" })
    .transform((val) => val.split(",").map((tag) => tag.trim().toLowerCase())),
});
