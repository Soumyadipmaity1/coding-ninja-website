import { motion } from "framer-motion"

const AnimatedBackground = () => {
  const colors = ["#FF6B00", "#FF8C00", "#FFA500", "#1A1A1A", "#2A2A2A"]

  return (
    <div className="absolute inset-0 z-0 bg-black">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30"
          style={{
            backgroundColor: colors[i % colors.length],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground

