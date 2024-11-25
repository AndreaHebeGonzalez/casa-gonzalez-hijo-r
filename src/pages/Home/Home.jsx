import { Marquee } from "../../components";
import { AboutSection, FeaturedProduct, HeroSection, ProductsSection } from "./components";


export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <Marquee /> 
      <FeaturedProduct />
    </>
    
  )
}
