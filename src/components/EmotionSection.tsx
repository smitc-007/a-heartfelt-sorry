import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const emotionalLines = [
  "You matter more than you know.",
  "Hurting you was never my intention.",
  "I miss the way we were.",
  "Every moment with you was a gift.",
  "I hope you find peace.",
  "You deserve all the happiness in the world.",
];

const EmotionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const lines = sectionRef.current.querySelectorAll('.emotion-line');

    lines.forEach((line, index) => {
      gsap.fromTo(
        line,
        {
          opacity: 0,
          x: index % 2 === 0 ? -60 : 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 px-6 flex items-center bg-lavender/30"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-16 md:space-y-24">
          {emotionalLines.map((line, index) => (
            <div
              key={index}
              className={`emotion-line opacity-0 ${
                index % 2 === 0 ? 'text-left' : 'text-right'
              }`}
            >
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                "{line}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionSection;
