
import RecentProjectClient from "./recent-project-client";
import { getRecentProject } from "@/lib/products/product-select";

export default async function RecentProject() {
  const recentlyProject = await getRecentProject();
  return <RecentProjectClient recentlyProject = {recentlyProject}
  />;
}
