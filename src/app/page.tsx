import { readdir } from 'fs/promises';
import { join } from 'path';

// Updated imports to match exact file names
import Header from "@/components/header/header";
import PageLayout from "@/components/layout/page-layout";
import HeroSection from "@/components/hero/hero-section";
import AboutSection from "@/components/about/about-section";
import ProductCardsSection from "@/components/card-home/card-home";
import ProcessSection from "@/components/procesul_nostru/procesul-nostru";
import Gallery from "@/components/galerie/galerie";
import TestimonialsCarousel from '@/components/testimoniale/testimoniale';
import Footer from "@/components/footer/footer";

async function getGalleryImages() {
  const galleryPath = join(process.cwd(), 'public', 'galerie');
  try {
    const files = await readdir(galleryPath);
    return files.filter(file => file.endsWith('.webp'));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}

export default async function Home() {
  const images = await getGalleryImages();
  
  return (
    <PageLayout>
      <Header />
      <main className="relative">
        <div className="relative min-h-screen">
          <HeroSection />
        </div>
        <AboutSection />
        <ProductCardsSection />
        <ProcessSection />
        <div className="relative">
          <Gallery images={images} />
        </div>
        <div className="relative">
          <TestimonialsCarousel />
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
}