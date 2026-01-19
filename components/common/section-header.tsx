import { LucideIcon } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  Icon: LucideIcon;
  description: string;
};

export default function SectionHeader({
  title,
  Icon,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      
      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <Icon className="size-6 text-primary" />
        <h2 className="text-4xl font-bold tracking-tight">
          {title}
        </h2>
      </div>

      {/* Description below */}
      <p className="max-w-xl text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
