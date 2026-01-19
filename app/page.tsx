
import HeroSection from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/featured-products";
import RecentlyProject from "@/components/landing-page/recentProject";
export default function Home() {
  return (
    <div>
     <HeroSection />

     <FeaturedProducts />
     <RecentlyProject />
    </div>
  );
}
