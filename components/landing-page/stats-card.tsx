import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
export default function StatsCard(
    {
        icon: Icon,
        value,
        label,
        hasBorder = false,
    }: {
        icon: LucideIcon;
        value: string;
        label: string;
        hasBorder?: boolean;
    }
){
    return (
        <div className={cn("space-y-2", hasBorder && "sm:border-l sm:px-6 border-muted/50"
        )}>
            
    <div className="flex items-center justify-center flex-col gap-2">
        <Icon className="size-8 text-primary/70 mb-2"/>
        <p className="text-3xl sm:text-4xl font-bold">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
    </div>
        </div>
    );
}
