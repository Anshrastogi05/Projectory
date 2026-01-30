import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
}

export const FormField = ({
  label,
  name,
  id,
  placeholder,
  required,
  onChange,
  error,
  helperText,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
      {helperText && (
        <p id={`${id}-helper`} className="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};
