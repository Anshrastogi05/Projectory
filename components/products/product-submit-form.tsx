"use client";
import { addProductAction } from "@/lib/products/product-action";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";
import { SparklesIcon } from "lucide-react";
import { useActionState } from "react";

const initialState = {
  success: false,
  error: {},
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );

  const { errors, message, success } = state;

  return (
    <form className="space-y-6" action={formAction}>
      <FormField
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Project"
        required
        onChange={() => {}}
        error={errors?.name?.[0]}
      />
      <FormField
        label="slug"
        name="slug"
        id="slug"
        placeholder="My project"
        required
        onChange={() => {}}
        error={errors?.slug?.[0]}
        helperText="URL-friendly version of your project name"
      />
      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="Tell me About your Project."
        required
        onChange={() => {}}
        error={errors?.description?.[0]}
        textarea
      />
      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A breif, catchy description of your project. "
        required
        onChange={() => {}}
        error={errors?.tagline?.[0]}
      />
      <FormField
        label="website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://www.yourproject.com"
        required
        onChange={() => {}}
        error={errors?.websiteUrl?.[0]}
        helperText="Enter your project website or landing page"
      />
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, Saas,Productive"
        required
        onChange={() => {}}
        error={errors?.tags?.[0]}
        helperText="Coma-seperated tags (e.g., AI,Saas, Productivity)"
      />

      <Button type="submit" size="lg" className="w-full">
        <SparklesIcon className="size-4" />
        Submit
      </Button>
    </form>
  );
}
