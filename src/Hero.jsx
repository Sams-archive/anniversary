import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

// Import your assets
import Bg from './assets/Anitagood.jpeg';
import anita3 from './assets/anita3.jpeg';
import anita4 from './assets/anita4.jpeg';
import Me from './assets/Me.jpeg';
import SXA from './assets/sxa.jpeg';

export const Hero = ({ timeLeft }) => {
  const bgImages = [Bg, SXA, anita3, anita4, Me];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center p-4 bg-space-black overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="z-10"
      >
        <h2 className="text-neon-coral uppercase tracking-[0.3em] mb-4 font-bold">Happy Anniversary</h2>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">Sampson & Anita</h1>
        
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl inline-block">
          <div className="flex gap-8 text-4xl md:text-6xl font-light text-white">
            <Unit val={timeLeft.days} label="Days" />
            <Unit val={timeLeft.hours} label="Hrs" />
            <Unit val={timeLeft.mins} label="Mins" />
            <Unit val={timeLeft.secs} label="Secs" color="text-neon-coral" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImages[index]})` }}
        />
      </AnimatePresence>
    </section>
  );
};

const Unit = ({ val, label, color = "text-white" }) => (
  <div className="flex flex-col">
    <span className={color}>{val}</span>
    <span className="text-xs uppercase tracking-widest opacity-50">{label}</span>
  </div>
);

export const MemoryCard = ({ memo, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        onClick={() => setIsOpen(true)}
        whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
        className="bg-space-black p-4 rounded-xl border border-white/10 shadow-2xl cursor-pointer"
      >
        {/* FIX: Changed h-64 to aspect-square and object-cover to object-top/center to prevent bad clipping */}
        <div className="overflow-hidden rounded-lg mb-4 aspect-square bg-white/5">
          <img 
            src={memo.img} 
            alt={memo.caption} 
            className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" 
          />
        </div>
        <p className="text-center font-handwritten text-dusty-teal text-2xl">{memo.caption}</p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-screen flex flex-col items-center justify-center"
            >
              {/* FIX: object-contain here ensures the full photo shows in the popup */}
              <img 
                src={memo.img} 
                alt={memo.caption} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white text-xl md:text-3xl mt-4 font-handwritten text-center bg-black/40 px-4 py-2 rounded-lg">
                {memo.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;