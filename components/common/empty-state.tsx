import { LucideIcon } from "lucide-react";
import { title } from "process";




export default function EmptyState({
    message,
    icon: Icon,
}: { 
    message: string;
    icon?: LucideIcon;
}) {
    
    return (
        <div className="empty-state">
            {Icon && (
                <Icon className="empty-state-icon w-10 h-10 text-gray-400" />
            )}
            <p className="text-lg font-medium">{message}</p>
        </div>
    );

}