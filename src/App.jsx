import confetti from "canvas-confetti";
import { useCountdown } from "./Timeleft.jsx";
import { Hero, MemoryCard } from "./Hero.jsx";
import anita1 from "./assets/anita1.jpeg";
import anita2 from "./assets/anita2.jpeg";
import anita3 from "./assets/anita3.jpeg";
import anita4 from "./assets/anita4.jpeg";
import firstsxa from "./assets/firstsxa.jpeg";
import sxa from "./assets/sxa.jpeg";
import Me from "./assets/Me.jpeg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const memories = [
  { id: 1, img: firstsxa, caption: "Our first picture together" },
  { id: 2, img: Me, caption: "Our most recent picture together" },
  { id: 3, img: anita1, caption: "She’s my 10/10" },
  { id: 4, img: anita2, caption: "Steady topping the charts in my heart💓." },
  { id: 5, img: anita3, caption: "Fine girl with GLE😂" },
  { id: 6, img: anita4, caption: "My favorite person💖💎" },
  { id: 7, img: sxa, caption: "Life is better with you by my side." },
];

const AnniversaryJar = () => {
  const timeLeft = useCountdown("2025-03-15T00:00:00");
  const [showMessage, setShowMessage] = useState(false);

  const handleSurprise = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF6044", "#0d9488", "#ffffff"],
    });

    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  };

  return (
    <div className="bg-space-black min-h-screen selection:bg-neon-coral selection:text-white px-2 relative overflow-hidden">
      <Hero timeLeft={timeLeft} />

      <section className="max-w-7xl mx-auto py-32 px-6">
        <h3 className="text-4xl text-white text-center mb-20 font-light tracking-tight">
          Capturing <span className="text-neon-coral italic">Every Moment</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((memo, index) => (
            <MemoryCard key={memo.id} memo={memo} index={index} />
          ))}
        </div>
      </section>

      <section className="text-center py-32 border-t border-white/5">
        <h3 className="text-white text-3xl mb-10 font-light">
          To many more years of building together.
        </h3>
        <button
          onClick={handleSurprise}
          className="px-10 py-4 bg-neon-coral text-white rounded-full font-bold hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,96,68,0.4)]"
        >
          Click for a Surprise! 🎈
        </button>
      </section>

      {/* Romantic Message Modal */}
      <AnimatePresence>
        {showMessage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setShowMessage(false)}
            />

            {/* Glass Card */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center z-50 px-6"
            >
              <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-white shadow-2xl relative">
                
                <button
                  onClick={() => setShowMessage(false)}
                  className="absolute top-4 right-6 text-white/60 hover:text-white text-xl"
                >
                  ✕
                </button>

                <div className="space-y-6 leading-relaxed text-lg font-light">
                  <p>Hey Anita 🤍</p>

                  <p>
                    Exactly this time last year, a conversation started.
                    Nothing dramatic. Nothing loud.
                    Just two people talking.
                  </p>

                  <p>
                    But somehow, that simple moment became something I’m genuinely grateful for.
                  </p>

                  <p>
                    Over time, you stopped being “just someone I talk to” and became someone I look forward to.
                    Someone whose growth I admire. Someone whose presence feels different.
                  </p>

                  <p>
                    Somewhere between the random chats, the serious talks, and the quiet moments,
                    you became special to me.
                  </p>

                  <p>
                    I don’t know if you realize it, but you’ve added something beautiful to my 2025.
                  </p>

                  <p>
                    And today just feels like the right moment to say…
                    I’m really glad it started.
                  </p>

                  <p className="italic text-neon-coral">
                    Here’s to the day we began ✨
                  </p>

                  <p className="pt-6 text-right">— Sampson</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-xs text-white/30 tracking-[0.2em] uppercase">
        Built with React & Tailwind 4.0 by Sampson • 2026
      </footer>
    </div>
  );
};

export default AnniversaryJar;