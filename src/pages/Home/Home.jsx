import {  Marquee } from "../../components";
import { AboutSection, FeaturedProduct, HeroSection, ProductsSection, HighlightedText } from "./components";

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
