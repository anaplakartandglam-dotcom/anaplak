"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ----------------------------
      MOBILE DETECTION
  ----------------------------- */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* ----------------------------
      TYPEWRITER ANIMATION LOGIC
  ----------------------------- */
  const words = ["signature looks", "salon perfection", "luxury styling", "hairstyles"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Disable typewriter effect on mobile
    if (isMobile) {
      setDisplayedWord(words[0]); // Show first word without animation
      return;
    }

    const currentWord = words[wordIndex];
    let speed = isDeleting ? 70 : 120;

    const timeout = setTimeout(() => {
      setDisplayedWord((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );

      // Word fully typed → wait → start deleting
      if (!isDeleting && displayedWord === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      }

      // Word fully deleted → next word
      if (isDeleting && displayedWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting, wordIndex, isMobile]);

  /* ----------------------------
          FADE-IN ON SCROLL
  ----------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0E0E0E] py-24 md:py-32">

      {/* FULL-WIDTH GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 px-6 lg:px-12 xl:px-20">

        {/* LEFT IMAGE BLOCK */}
        <div
          className={`transition-all duration-[1200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <img
            src="/gal15.JPG"
            className="w-full h-[650px] md:h-[780px] object-cover object-top rounded-xl"
          />


          <h6 className="uppercase mt-6 text-white font-semibold text-[20px] leading-relaxed max-w-[450px] text-justify">
            Embrace exceptional hair artistry guided by experts who honor your comfort, your time, and your transformation journey.
          </h6>
        </div>

        {/* RIGHT CONTENT BLOCK */}
        <div
          className={`transition-all duration-[1200ms] delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h6 className="uppercase text-[#C8AFAE] tracking-[0.3em] text-[20px] mb-6">
            about premium hair salon
          </h6>

          {/* ----------------------------
             HEADING + TYPEWRITER EFFECT
          ----------------------------- */}
          <h2 className="text-white font-bold text-[44px] md:text-[52px] leading-[1.2] max-w-2xl mb-6">
            Find the perfect balance between elegance and comfort with{" "}
            <span
              className="text-[#C8AFAE]"
            >
              {displayedWord}
              {!isMobile && <span className="inline-block w-[2px] h-[1em] bg-[#C8AFAE] ml-1 animate-pulse"></span>}
            </span>
          </h2>

          <p className="text-[#C2C2C2] text-[20px] leading-[1.75] max-w-2xl mb-12 text-justify">
            Welcome to ANAPLAK ART AND GLAM SALON — where beauty meets luxury. Located in the heart of Chennai ,Maduravoyal, we are a premier destination for personalized hair care, creative styling, and rejuvenating beauty experiences.
            At ANAPLAK ART AND GLAM SALON , we believe your hair is an expression of who you are. Our mission is to help you look and feel your absolute best with expert services rooted in innovation, premium products, and individualized care.
          </p>

          {/* BOTTOM IMAGE BLOCK */}
          <div className="relative w-full">
            <img
              src="/gallery3.JPG"
              className="w-full h-[480px] md:h-[580px] object-cover object-[50%_15%] rounded-xl"
            />


            {/* ROTATING LOGO */}
            {/* ROTATING LOGO — TOP RIGHT CORNER */}
            <div
              className="
    w-[100px] h-[100px]
    md:w-[120px] md:h-[120px]
    absolute
    -top-8 md:-top-10
    -right-8 md:-right-10
    rounded-full
    bg-white
    flex items-center justify-center
    rotate-slow-delay
    pointer-events-none
    shadow-lg
  "
            >
              <img
                src="/newk.png"
                className="w-[70%] h-auto object-contain"
                alt="Anaplak Logo"
              />
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
