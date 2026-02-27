import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sun, Moon } from "lucide-react";
import porscheFront from "@/assets/porsche-front.jpg";
import porscheSide from "@/assets/porsche-side.jpg";
import porscheInterior from "@/assets/porsche-interior.jpg";

const views = [
  { id: "front", label: "Front", image: porscheFront },
  { id: "side", label: "Profile", image: porscheSide },
  { id: "interior", label: "Interior", image: porscheInterior },
];

const CarExploration = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState(0);
  const [nightMode, setNightMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${nightMode ? "bg-background" : "cinematic-gradient"}`}>
      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs tracking-[0.2em] uppercase">Back</span>
        </button>
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          360° Exploration
        </span>
        <button
          onClick={() => setNightMode(!nightMode)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {nightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          <span className="text-xs tracking-[0.2em] uppercase">
            {nightMode ? "Night" : "Day"}
          </span>
        </button>
      </header>

      {/* Car display */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            className="relative w-full max-w-4xl aspect-video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={views[activeView].image}
              alt={views[activeView].label}
              className={`w-full h-full object-contain transition-all duration-700 ${
                nightMode ? "" : "brightness-125 contrast-90"
              }`}
            />
            {/* Ambient glow under car */}
            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 rounded-full blur-3xl transition-colors duration-700 ${
                nightMode ? "bg-accent/10" : "bg-foreground/5"
              }`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* View selector */}
      <div className="flex flex-col items-center gap-8 pb-16">
        <div className="flex items-center gap-4">
          {views.map((view, i) => (
            <button
              key={view.id}
              onClick={() => setActiveView(i)}
              className={`view-btn ${i === activeView ? "active" : ""}`}
            >
              {view.label}
            </button>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex items-center gap-2">
          {views.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveView(i)}
              className={`nav-dot ${i === activeView ? "active" : ""}`}
            />
          ))}
        </div>

        <Button
          variant="hero-outline"
          size="lg"
          onClick={() => navigate("/configure")}
        >
          Configure Yours
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CarExploration;
