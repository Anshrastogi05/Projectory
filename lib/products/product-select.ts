// import {db} from "@/db";
// import { products } from "@/db/schema";
// import { desc,eq } from 'drizzle-orm'
// export async function getFeaturedProducts() {
//     const productsData = await db
//     .select()
//     .from(products)
//     .where(eq(products.status, 'approved'))
//     .orderBy(desc(products.voteCount));

//     return productsData;
// }

// export async function getRecentProject()
// {
//    const productsData = await getFeaturedProducts();
//    const oneWeekAgo = new Date();
//    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

//     return productsData.filter (
//         (product) =>
//             product.createdAt &&
//             new Date(product.createdAt.toISOString()) >=
//             oneWeekAgo
//       );

// }

import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";
import { InferSelectModel } from "drizzle-orm";
/**
 * This type comes from your DB schema
 * (adjust fields if needed)
 */
export type Project = InferSelectModel<typeof products>;
export async function getFeaturedProducts() {
  return await db
    .select()
    .from(products)
    // ✅ FIX 1: match DB value exactly
    .where(eq(products.status, "approved"))
    // ✅ FIX 2: handle NULL vote_count safely
    .orderBy(desc(sql`COALESCE(${products.voteCount}, 0)`));
}

export async function getRecentProject() {
  const productsData = await getFeaturedProducts();

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productsData.filter(
    (product) => product.createdAt && product.createdAt >= oneWeekAgo,
  );
}
