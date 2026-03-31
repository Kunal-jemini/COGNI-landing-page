import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero';
import ProductsSection from '@/components/ProductsSection';
import ShopBySection from '@/components/ui/ShopBy';
import AboutSection from '@/components/ui/about';
import ContactUsSection from '@/components/ui/contact-form';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ShopBySection />
      <AboutSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}