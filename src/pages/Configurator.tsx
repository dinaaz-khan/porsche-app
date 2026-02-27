import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Gauge, Mountain, Zap } from "lucide-react";
import porscheHero from "@/assets/porsche-hero.jpg";
import porscheFront from "@/assets/porsche-front.jpg";
import porscheSide from "@/assets/porsche-side.jpg";

const models = [
  { id: "911", name: "911 Carrera", power: "385 hp", price: "From $113,300", image: porscheSide },
  { id: "gt3", name: "911 GT3", power: "502 hp", price: "From $169,700", image: porscheFront },
  { id: "gt3rs", name: "911 GT3 RS", power: "518 hp", price: "From $223,800", image: porscheHero },
];

const styles = [
  { id: "comfort", name: "Comfort", icon: Mountain, desc: "Refined luxury for everyday driving" },
  { id: "sport", name: "Sport", icon: Gauge, desc: "Dynamic balance of power and control" },
  { id: "track", name: "Track", icon: Zap, desc: "Uncompromised performance" },
];

const Configurator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const steps = ["Select Model", "Driving Style", "Your Configuration"];

  const canProceed = step === 0 ? !!selectedModel : step === 1 ? !!selectedStyle : true;

  const chosenModel = models.find((m) => m.id === selectedModel);
  const chosenStyle = styles.find((s) => s.id === selectedStyle);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 pt-8 pb-4">
        <button
          onClick={() => (step > 0 ? setStep(step - 1) : navigate("/explore"))}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs tracking-[0.2em] uppercase">Back</span>
        </button>
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Smart Configurator
        </span>
        <div className="w-16" />
      </header>

      {/* Progress */}
      <div className="px-8 md:px-16 mb-12">
        <div className="flex items-center gap-2 max-w-2xl mx-auto">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-light transition-all duration-500 ${
                    i < step
                      ? "bg-accent text-accent-foreground"
                      : i === step
                      ? "border border-accent text-accent"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {i < step ? <Check className="w-3 h-3" /> : i + 1}
                </div>
                <span
                  className={`text-xs tracking-wider uppercase hidden md:block ${
                    i <= step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-px flex-1 mx-4 transition-colors duration-500 ${
                    i < step ? "bg-accent" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="px-8 md:px-16"
        >
          {step === 0 && (
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-2 text-center">
                Choose Your Machine
              </h2>
              <p className="text-muted-foreground text-center mb-12 font-light">
                Select the foundation of your driving experience
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {models.map((model) => (
                  <motion.div
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border transition-all duration-300 hover-lift ${
                      selectedModel === model.id
                        ? "border-accent glow-red-subtle"
                        : "border-border hover:border-foreground/20"
                    }`}
                    whileHover={{ y: -4 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 bg-card">
                      <h3 className="text-lg font-light tracking-wide mb-1">
                        {model.name}
                      </h3>
                      <p className="text-accent text-sm font-light">{model.power}</p>
                      <p className="text-muted-foreground text-xs mt-2">{model.price}</p>
                    </div>
                    {selectedModel === model.id && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-2 text-center">
                Your Driving Style
              </h2>
              <p className="text-muted-foreground text-center mb-12 font-light">
                How will you command the road?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {styles.map((style) => {
                  const Icon = style.icon;
                  return (
                    <motion.div
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`cursor-pointer rounded-lg p-8 text-center border transition-all duration-300 hover-lift ${
                        selectedStyle === style.id
                          ? "border-accent glow-red-subtle bg-accent/5"
                          : "border-border hover:border-foreground/20 bg-card"
                      }`}
                      whileHover={{ y: -4 }}
                    >
                      <Icon
                        className={`w-8 h-8 mx-auto mb-4 ${
                          selectedStyle === style.id ? "text-accent" : "text-muted-foreground"
                        }`}
                      />
                      <h3 className="text-lg font-light tracking-wide mb-2">{style.name}</h3>
                      <p className="text-muted-foreground text-xs font-light">{style.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-2">
                Your Configuration
              </h2>
              <p className="text-muted-foreground mb-12 font-light">
                AI-curated recommendation based on your preferences
              </p>
              <div className="glass-panel p-8 md:p-12 mb-8">
                {chosenModel && (
                  <div className="mb-8">
                    <img
                      src={chosenModel.image}
                      alt={chosenModel.name}
                      className="w-full max-w-md mx-auto rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-light tracking-wide mb-1">
                      {chosenModel.name}
                    </h3>
                    <p className="text-accent">{chosenModel.power}</p>
                  </div>
                )}
                {chosenStyle && (
                  <div className="border-t border-border pt-6">
                    <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-2">
                      Driving Mode
                    </p>
                    <p className="text-lg font-light">{chosenStyle.name}</p>
                    <p className="text-muted-foreground text-sm mt-1">{chosenStyle.desc}</p>
                  </div>
                )}
                <div className="border-t border-border pt-6 mt-6">
                  <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
                    AI Recommendations
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-left text-sm">
                    <div className="glass-panel p-4">
                      <p className="text-muted-foreground text-xs mb-1">Suspension</p>
                      <p className="font-light">
                        {selectedStyle === "track" ? "Racing" : selectedStyle === "sport" ? "Sport Adaptive" : "Comfort Adaptive"}
                      </p>
                    </div>
                    <div className="glass-panel p-4">
                      <p className="text-muted-foreground text-xs mb-1">Exhaust</p>
                      <p className="font-light">
                        {selectedStyle === "track" ? "Race Titanium" : "Sport Exhaust"}
                      </p>
                    </div>
                    <div className="glass-panel p-4">
                      <p className="text-muted-foreground text-xs mb-1">Wheels</p>
                      <p className="font-light">
                        {selectedStyle === "track" ? '20"/21" Magnesium' : '20"/21" Forged'}
                      </p>
                    </div>
                    <div className="glass-panel p-4">
                      <p className="text-muted-foreground text-xs mb-1">Interior</p>
                      <p className="font-light">
                        {selectedStyle === "track" ? "Full Bucket Seats" : selectedStyle === "sport" ? "Sport Seats Plus" : "Adaptive Sport Seats"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Button variant="hero" size="lg" onClick={() => navigate("/sport-mode")}>
                  Experience Sport Mode
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next button */}
      {step < 2 && (
        <div className="flex justify-center mt-12 pb-16">
          <Button
            variant="hero-outline"
            size="lg"
            disabled={!canProceed}
            onClick={() => setStep(step + 1)}
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Configurator;
