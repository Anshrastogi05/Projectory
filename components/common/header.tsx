import { Link, SparkleIcon } from "lucide-react";

export default function Header() {
    return (
        <Link  href="/" className="flex items-center gap-2 group">
            <div className="size-6 rounded-lg bg-primary flex items-center justify-center" >
            <SparkleIcon className="size-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Projectory</span>
        </Link>

    );
};

