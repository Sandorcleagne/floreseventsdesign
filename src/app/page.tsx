import BlogSection from "@/components/BlogSection/BlogSection";
import FeaturedProducts from "@/components/FeatuedProducts/FeaturedProducts";
import Footer from "@/components/Footer/Footer";
import ImageGridHomePage from "@/components/ImageGridHomePage/ImageGridHomePage";

export default function Home() {
  return (
    <>
      <ImageGridHomePage />
      <FeaturedProducts />
      {/* <BlogSection /> */}
      <Footer />
    </>
  );
}
