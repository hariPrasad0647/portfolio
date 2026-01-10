import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogoH() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0,0,0,0)",
    },
    visible: {
      pathLength: 1,
      fill: "#1f8d93",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent stroke-accent"
      >
        <motion.path
          d="
            M80 40 
            V360
            M320 40
            V360
            M80 200
            H320
          "
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2.5, ease: "easeInOut" },
            fill: { duration: 1.5, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
