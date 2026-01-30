"use client";

import { FormField } from "@/components/forms/form-field";
export default function ProductSubmitForm() {
  return (
    <form className="space-y-8">
      <FormField
        label="product name"
        name="name"
        id="name"
        placeholder="My Project"
        onChange={() => {}}
        error=""
      />
      <div className="space-y-2">
        <Label htmlFor="Slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          placeholder="my-project "
          required
          onChange={() => {}}
        />
      </div>
    </form>
  );
}
