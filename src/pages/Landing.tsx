import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/porsche-hero.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Hero Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Porsche GT3 RS"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </motion.div>

      {/* Top bar */}
      <motion.header
        className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="text-lg font-light tracking-[0.3em] text-foreground uppercase">
          Porsche
        </span>
        <span className="text-xs font-light tracking-[0.2em] text-muted-foreground uppercase">
          Performance Studio
        </span>
      </motion.header>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end min-h-screen px-8 md:px-16 pb-24 md:pb-32">
        <motion.p
          className="text-xs tracking-[0.4em] text-accent uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Immersive Experience
        </motion.p>

        <motion.h1
          className="text-5xl md:text-8xl font-extralight tracking-tight leading-[0.9] mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          Feel the
          <br />
          <span className="text-gradient-red font-light">Performance.</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground font-light text-lg md:text-xl max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          A cinematic journey into precision engineering and raw power.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() => navigate("/explore")}
          >
            Enter the Experience
          </Button>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      />
    </div>
  );
};

export default Landing;
