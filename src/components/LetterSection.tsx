import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const letterParagraphs = [
  "I've been carrying these words for a while now, searching for the right moment, the right way to say them. But there's no perfect way to apologize — only an honest one.",
  "I know I hurt you. And I'm not here to make excuses or explain away what I did. I'm here because you deserve to know how deeply sorry I am.",
  "Looking back, I see the moments where I failed you. The times I should have listened more carefully, spoken more gently, loved you more openly. I wasn't the person you needed me to be.",
  "You trusted me with your heart, and I didn't treat it with the care it deserved. That's something I'll always carry with me.",
  "But I want you to know this: my remorse isn't about wanting things to go back to how they were. It's about acknowledging the pain I caused someone who means everything to me.",
  "You are kind, patient, and full of light. You didn't deserve to feel hurt because of me. And I am so, so sorry.",
];

const LetterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!sectionRef.current) return;

    const paragraphs = sectionRef.current.querySelectorAll('.letter-paragraph');

    paragraphs.forEach((para, index) => {
      gsap.fromTo(
        para,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: para,
            start: 'top 85%',
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
      className="letter-section min-h-screen py-24 md:py-32 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            A Letter From My Heart
          </span>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {letterParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="letter-paragraph text-emotional text-lg md:text-xl leading-relaxed opacity-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
