import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const words = [
  'Sorry',
  'Forgive Me',
  'I Care',
  'I Miss You',
  'My Heart',
  'Please',
  'Love',
  'Hope',
  'Together',
  'Always',
];

const FloatingWords = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wordElements = containerRef.current.querySelectorAll('.floating-word');
    
    wordElements.forEach((word, index) => {
      const delay = index * 0.8;
      const duration = 4 + Math.random() * 3;
      
      gsap.fromTo(
        word,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 0.06,
          y: 0,
          duration: 2,
          delay,
          ease: 'power2.out',
        }
      );

      gsap.to(word, {
        y: -30 + Math.random() * 60,
        x: -20 + Math.random() * 40,
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: delay + 2,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="floating-word absolute font-serif text-4xl md:text-6xl lg:text-8xl font-light select-none"
          style={{
            left: `${10 + (index % 5) * 20}%`,
            top: `${10 + Math.floor(index / 5) * 40 + (index % 3) * 15}%`,
            transform: `rotate(${-5 + Math.random() * 10}deg)`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default FloatingWords;
