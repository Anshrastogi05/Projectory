// import Link from "next/link";
// import {Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "../ui/badge";
// import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "lucide-react";
// import { Button } from "../ui/button";
// import { cn } from "@/lib/utils";



// interface Product {
//     id: number;
//     name: string;
//     description: string;
//     tags: string[];
//     votes: number;
//     isFeatured: boolean;
// }
// export default function ProductCard({ product }: {
//     product: Product;  
// }) {
//     const hasVoted = false; // Replace with actual voting logic
//     return (
//         <Link href={`/products/${product.id}`}> 
//             <Card className="group card-hover hover:bg-primary-foreground/10 min-h-[200px] border-solid border-gray-300">
//             <CardHeader>
//                 <div className="flex items-start gap-4">
//                     <div className="flex-1 min-w-0">
//                 <CardTitle className="text-lg font-semibold">
//                     {product.name}</CardTitle>
//                     {product.isFeatured && (
//                         <Badge className="mt-2 bg-primary text-primary-foreground">
//                             <StarIcon className="size-3 fill-current"/>
//                              Featured
//                         </Badge>
//                     )}
//                     </div>
//                     <CardDescription>{product.description}</CardDescription>
//                     </div>
 
//                     {/* voting button */}
//                   <div className="px-4 pb-4 flex items-center justify-between">
//                         <span className="text-sm font-medium text-muted-foreground">
//                             {product.votes} Votes
//                         </span>
//                        <div className="flex items-center gap-1">
//               <Button variant="ghost" size="icon-sm" 
//               className={cn("h-8 w-8 text-primary hover:bg-primary/10", hasVoted ? "bg-primary/10 text-primary hover:bg-primary/20" : "hover:bg-primary/10 hover:text-primary")}>
//                 <ChevronUpIcon className="size-4"/>
//               </Button>
//               <span className="text-sm font-semibold transition-colors text-foreground">
//                 10
//               </span>
//               <Button variant="ghost" size="icon-sm"
//                 className={cn("h-8 w-8 text-primary hover:bg-primary/10 hover:text-destructive", hasVoted?"text-destructive" : "opacity-50 cursor-not-allowed")}>
//                 <ChevronDownIcon className="rotate-180 size-4"/>
//               </Button>
//             </div>
//                     </div>
//             </CardHeader>
//                 <div className="p-4 pt-0">
//                     <div className="text-sm">
//                         <p className="text-muted-foreground mt-1">{product.description}</p>
//                     </div>
//                 </div>
//             </Card>
       
//     );
// };


"use client";

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const hasVoted = false;

  return (
    <Card className="group hover:bg-primary-foreground/10 border-gray-400">
      {/* CLICKABLE AREA */}
      <Link href={`/products/${product.id}`} className="block">
        <CardHeader>
          <div className="flex items-start gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors font-semibold">
                  {product.name}
                </CardTitle>

                {product.isFeatured && (
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <StarIcon className="size-3 fill-current mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription className="mt-2">
                {product.description}
              </CardDescription>
            </div>

            {/* VOTING AREA (NOT INSIDE LINK) */}
            <div className="flex flex-col items-end gap-1 shrink-0">
              <Button variant="ghost" size="icon-sm" className={cn("h-8 w-8 text-primary hover:bg-primary/10",
                hasVoted ? "hover:bg-primary/20 hover:text-primary" : "hover:bg-primary/20 hover:text-primary"
              )}>
                <ChevronUpIcon className="size-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {product.votes} votes
              </span>
              <Button variant="ghost" size="icon-sm" className={cn("h-8 w-8 text-primary hover:bg-primary/10",
                hasVoted ? "text-destructive" : "opacity-50 cursor-not-allowed"
              )}>
                <ChevronDownIcon className="size-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Link>

      <div className="flex flex-wrap gap-2 p-4 pt-0">
        {product.tags.map(tag => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs rounded-md"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
