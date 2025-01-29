import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import AnimatedBackground from "./animatedbackground"

const AnimatedText = ({ text, className }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

const phrases = [
  "Hack. Build. Innovate.",
  "Code. Collaborate. Conquer.",
  "Learn. Create. Disrupt.",
  "Dream. Develop. Deploy.",
]

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white hero-section">
      <AnimatedBackground />
      <div className="relative container mx-auto px-4 sm:px-6 flex flex-col justify-center items-center min-h-screen text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 sm:mb-4">
            <AnimatedText text="Coding Ninjas" className="text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-300">
            <AnimatedText text="KIIT Chapter" />
          </h2>
        </motion.div>
        <motion.p
          className="text-lg sm:text-xl text-orange-100 mb-8 sm:mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Level up your coding game with Coding Ninjas at KIIT. Join our elite dev squad and turn your epic ideas into
          reality!
        </motion.p>
        <motion.div
          className="text-xl sm:text-2xl text-orange-400 mb-8 font-semibold h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            key={phraseIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {phrases[phraseIndex]}
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#join-us"
            className="bg-orange-500 text-black font-bold text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-full inline-flex items-center transition-all duration-300 ease-in-out hover:bg-orange-600"
          >
            <span className="mr-2">Join Now</span>
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

