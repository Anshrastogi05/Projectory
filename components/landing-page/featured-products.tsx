// import SectionHeader from "@/components/common/section-header";
// import { ArrowRightIcon, StarIcon } from "lucide-react";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import ProductCard from "@/components/products/product-card"; //“Go to components/products/product-card.tsx and bring me ProductCard.”
// // @ = src directory
// import { getFeaturedProducts } from "@/lib/products/product-select";

// // const featuredProducts = [
// //   {
// //     id: 1,
// //     name: "AI Resume Builder",
// //     description: "Create professional resumes with AI assistance.",
// //     tags: ["AI", "Resume", "Builder"],
// //     votes: 109,
// //     isFeatured: true,
// //   },
// //   {
// //     id: 2,
// //     name: "Project Tracker",
// //     description: "Track your projects and tasks efficiently.",
// //     tags: ["Productivity", "Management"],
// //     votes: 87,
// //     isFeatured: true,

// //   },
// // ]
// export default async function FeaturedProducts() {
//   const featuredProducts = await getFeaturedProducts
//   ();
//   return (
//     <section className="py-20 bg-muted/20">
//       <div className="wrapper">
//         <div className="flex items-center justify-between mb-8">
//           <SectionHeader title="Featured Products" Icon={StarIcon}
//           description="Top picks from our community this week"
//           />
//           <Button variant="outline" asChild className="hidden sm:flex">
//             <Link href="/explore">View All<ArrowRightIcon className="ml-2"/>
//             </Link>
//             </Button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//          {featuredProducts.map((product) => (
//    <ProductCard key={product.id} product={product} /> //This sends the entire product object into ProductCard.
//   ))

//          }
//         </div>
//       </div>
//     </section>
//   );
// }

import { Suspense } from "react";
import FeaturedProductsList from "./featured-products-list";

export default function FeaturedProducts() {
  return (
    <Suspense fallback={<FeaturedProductsSkeleton />}>
      <FeaturedProductsList />
    </Suspense>
  );
}

function FeaturedProductsSkeleton() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="text-center">Loading featured products...</div>
      </div>
    </section>
  );
}
