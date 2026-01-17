import { LucideIcon } from "lucide-react";

export default function SectionHeader({title, Icon, description}: 
    {title: string;
    Icon: LucideIcon;
    description: string;
    }  ) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-center gap-3 mv-3">
        <Icon className="size-6 text-primary" />
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </div>
  );
}