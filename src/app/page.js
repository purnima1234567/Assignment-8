import BrandSection from "@/components/homesections/BrandSection";
import HeroSections from "@/components/homesections/HeroSection";
import ProductsCard from "@/components/homesections/ProductsCard";
import TipsSection from "@/components/homesections/TipsSection";
import Image from "next/image";

export default function Home() {
  return (
      <div className="container mx-auto mt-10">

        <HeroSections />

       <div className="mt-16">
         <ProductsCard />
       </div>

       <TipsSection />
       <BrandSection />

        
      </div>
  );
}
