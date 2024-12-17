import { HighlightedText, Marquee } from "../../components";
import { AboutSection, FeaturedProduct, HeroSection, ProductsSection } from "./components";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HighlightedText />
      <ProductsSection />
      <Marquee /> 
      <FeaturedProduct />
    </>
    
  )
}
