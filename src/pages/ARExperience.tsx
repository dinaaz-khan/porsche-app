import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone, Eye, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import arMockup from "@/assets/ar-mockup.jpg";

const features = [
  {
    icon: Smartphone,
    title: "Point & Place",
    desc: "Use your camera to place a Porsche in your environment",
  },
  {
    icon: Eye,
    title: "True Scale",
    desc: "Experience real dimensions in augmented reality",
  },
  {
    icon: RotateCcw,
    title: "Walk Around",
    desc: "Move around the car to inspect every detail",
  },
];

const ARExperience = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 pt-8">
        <button
          onClick={() => navigate("/sport-mode")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs tracking-[0.2em] uppercase">Back</span>
        </button>
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          AR Experience
        </span>
        <div className="w-16" />
      </header>

      <div className="flex flex-col lg:flex-row items-center gap-16 px-8 md:px-16 py-16 max-w-7xl mx-auto">
        {/* Phone mockup */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img
              src={arMockup}
              alt="AR Test Drive"
              className="w-full max-w-md rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl border border-border/30" />
            {/* Glow effect */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-accent/10 blur-[40px] rounded-full" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 max-w-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-xs tracking-[0.4em] text-accent uppercase mb-4">
            Coming Soon
          </p>
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-[1.1] mb-6">
            Your Driveway.
            <br />
            <span className="text-gradient-red">Your Porsche.</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed mb-10">
            Experience WebAR technology that places a full-scale Porsche directly in your space.
            Walk around it, open the doors, and feel the presence before you visit the showroom.
          </p>

          <div className="space-y-6 mb-12">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4 glass-panel p-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-light tracking-wide mb-1">
                      {feature.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg">
              <Smartphone className="w-4 h-4 mr-2" />
              View in Your Space
            </Button>
            <Button variant="hero-outline" size="lg" onClick={() => navigate("/")}>
              Back to Start
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
  );
};

export default ARExperience;
