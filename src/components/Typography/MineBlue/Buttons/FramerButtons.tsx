"use client"
import { motion } from "framer-motion";

const ShinyButton = () => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileHover={{scale:1.1}}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.1,
        type: "spring",
        stiffness: 20,
        damping: 20,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 80,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2 rounded-md relative radial-gradient "
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        Start now
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;
