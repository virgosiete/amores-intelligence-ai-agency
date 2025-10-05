import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Work While You Sleep", "Never Stop Selling", "Scale Your Business", "Generate Leads 24/7", "Convert Automatically"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#030303] via-[#030303] to-purple-950/20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-5xl tracking-tighter text-center font-bold leading-tight">
              <span className="text-white">AI Assistants That</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-6 pt-2 md:pb-8 md:pt-4" style={{ minHeight: '1.2em' }}>
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                    style={{ top: '0.1em' }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-3xl text-center mx-auto">
              We build AI-powered websites, lead generators, and automation systems for businesses ready to scale. 
              Get 24/7 customer support, sales, and bookings on autopilot.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="https://calendly.com/aichatworx" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
                Book Free Strategy Call <Calendar className="w-4 h-4" />
              </Button>
            </a>
            <div className="flex items-center space-x-6 text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-sm">2-3 Days Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
                <span className="text-sm">24/7 AI Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };