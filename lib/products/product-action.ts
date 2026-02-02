"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import { productSchema } from "@/lib/products/product-validation";
import { db } from "@/db";
import { products } from "@/db/schema";

type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message: string;
};

export const addProductAction = async (
  prevState: FormState,
  formData: FormData,
) => {
  console.log(formData);
  // auth

  try {
    const { userId, orgId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "you must be sign in to submit a project",
      };
    }
    if (!orgId) {
      return {
        success: false,
        message: "you must be part of an organization to submit a project",
      };
    }
    // data
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress || "no-email";

    // FormData
    const rawFormData = Object.fromEntries(formData.entries());

    // validate the FormData
    const validatedData = productSchema.safeParse(rawFormData);
    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
        message: "Invalid data",
      };
    }

    // ✅ Safe to use validated data
    const { name, slug, tagline, description, websiteUrl, tags } =
      validatedData.data;

    const tagsArray = tags ? tags.filter((tag) => typeof tag === "string") : [];

    // transform the data
    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteUrl,
      tags: tagsArray,
      status: "pending",
      submittedBy: email,
      organizationId: "",
      userId,
    });

    return {
      success: true,
      message: "Project added Successfully",
      errors: {},
    };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Validation failed. Please check the form.",
      };
    }

    return {
      success: false,
      errors: {},
      message: "Something went wrong",
    };
  }
};
