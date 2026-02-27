import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import porscheSport from "@/assets/porsche-sport.jpg";
import porscheHero from "@/assets/porsche-hero.jpg";

const stats = [
  { label: "0-60 mph", value: "3.2", unit: "s" },
  { label: "Top Speed", value: "184", unit: "mph" },
  { label: "Power", value: "518", unit: "hp" },
  { label: "Torque", value: "346", unit: "lb-ft" },
];

const SportMode = () => {
  const navigate = useNavigate();
  const [sportActive, setSportActive] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${
        sportActive ? "sport-gradient" : "bg-background"
      }`}
    >
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
        <button
          onClick={() => navigate("/configure")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs tracking-[0.2em] uppercase">Back</span>
        </button>
        <span
          className={`text-xs tracking-[0.3em] uppercase transition-colors duration-700 ${
            sportActive ? "text-accent" : "text-muted-foreground"
          }`}
        >
          Sport Mode
        </span>
        <div className="w-16" />
      </header>

      {/* Car image */}
      <div className="relative flex justify-center items-center mt-8 mb-8 px-8">
        <AnimatePresence mode="wait">
          <motion.img
            key={sportActive ? "sport" : "normal"}
            src={sportActive ? porscheSport : porscheHero}
            alt="Porsche"
            className="w-full max-w-5xl rounded-lg object-cover aspect-video"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        {sportActive && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/3 bg-accent/10 blur-[80px] rounded-full" />
          </motion.div>
        )}
      </div>

      {/* Toggle */}
      <div className="flex flex-col items-center gap-8 mb-12">
        <motion.button
          onClick={() => setSportActive(!sportActive)}
          className={`relative px-12 py-4 rounded-sm text-sm tracking-[0.3em] uppercase font-light border transition-all duration-700 ${
            sportActive
              ? "border-accent bg-accent/20 text-accent glow-red"
              : "border-border text-muted-foreground hover:border-foreground/30"
          }`}
          whileTap={{ scale: 0.97 }}
        >
          {sportActive ? "Sport Mode Active" : "Activate Sport Mode"}
        </motion.button>
      </div>

      {/* Stats */}
      <div className="px-8 md:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`text-center p-6 rounded-lg border transition-all duration-700 ${
                sportActive
                  ? "border-accent/30 bg-accent/5"
                  : "border-border bg-card"
              }`}
              animate={
                sportActive
                  ? { y: [20, 0], opacity: [0, 1] }
                  : { y: 0, opacity: 1 }
              }
              transition={{ delay: sportActive ? i * 0.15 : 0, duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                {stat.label}
              </p>
              <span
                className={`stat-number transition-colors duration-700 ${
                  sportActive ? "text-accent" : "text-foreground"
                }`}
              >
                {stat.value}
              </span>
              <span
                className={`text-sm ml-1 transition-colors duration-700 ${
                  sportActive ? "text-accent/70" : "text-muted-foreground"
                }`}
              >
                {stat.unit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next */}
      <div className="flex justify-center mt-12 pb-16">
        <Button variant="hero-outline" size="lg" onClick={() => navigate("/ar-experience")}>
          AR Experience
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default SportMode;
