import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingWords from '@/components/FloatingWords';
import HeroSection from '@/components/HeroSection';
import LetterSection from '@/components/LetterSection';
import EmotionSection from '@/components/EmotionSection';
import ClosingSection from '@/components/ClosingSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scroll setup
    ScrollTrigger.defaults({
      markers: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-background">
      {/* Floating background words */}
      <FloatingWords />

      {/* Hero Section */}
      <HeroSection />

      {/* Letter Section */}
      <LetterSection />

      {/* Emotional Lines Section */}
      <EmotionSection />

      {/* Closing Section */}
      <ClosingSection />
    </main>
  );
};

export default Index;
