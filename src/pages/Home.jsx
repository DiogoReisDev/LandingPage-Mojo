import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CourseContent from '@/components/CourseContent';
import VideoGallery from '@/components/VideoGallery';
import PhotoCarousel from '@/components/PhotoCarousel';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mojo Dojo Tattoo - Workshop Presencial de Tatuagem</title>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Stats />
        <CourseContent />
        <VideoGallery />
        <PhotoCarousel />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}