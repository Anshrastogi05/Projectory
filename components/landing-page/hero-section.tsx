
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ArrowRightIcon, GroupIcon, RocketIcon, SparkleIcon, User, UserIcon } from "lucide-react";
import { stat } from "fs/promises";
import StatsCard from "./stats-card";


const LiveBadge = () => {
  return (
    <Badge 
    variant="outline"
    className="px-4 py-2 mb-8 text-sm background-blur-sm">
        <span className="relative flex h-2 w-2">
        <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-75"/>

        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary">
        </span>
        </span>
       <span className="text-muted-foreground ml-2">
    join thousands of developers sharing their work
         </span>
  </Badge>
    );
};

const statsData = [
  {
    icon: RocketIcon,
    label: "Projects Shared",
    value: "1,200+",
  },
  {
    icon: UserIcon,
    label: "Active Users",  
    value: "5,000+",
  },
  {
    icon: GroupIcon,  
    label: "Communities",
    value: "30+",
  },
];




export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
    <div className="wrapper">
        
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center gap-6">
        <LiveBadge />
      <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight font-bold max-w-5xl">Share what You've Built</h1>
      <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-6 max-w-5xl">Learn from the Real-Work</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto"> A community platform to showcase your projects, ai/ml application, apps, saas website, extensions and learn from real-world work and update your resume.</p>
      <p className="text-lg  text-muted-foreground max-w-2xl mx-auto ">learn from real-world work and update your resume.</p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
     <Button asChild size="lg" className="text-base px-8 shadow-lg">
      <Link href="/submit">
       <SparkleIcon className="size-5"/>
      Submit Your Project
      </Link>
     
     </Button>
     <Button asChild size="lg" className="text-base px-8 shadow-lg"
      variant="secondary"
      >
      <Link href="/explore">
      Explore Projects
      <ArrowRightIcon className="size-5"/>
      </Link>
      </Button>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-12 gap-6 sm:gap-85 max-w-2xl w-full">
      {statsData.map((stat) => (
        <StatsCard key={stat.label} {...stat} />
      ))}
      
     </div>
     </div>
    </div>
    </section>
  );
}