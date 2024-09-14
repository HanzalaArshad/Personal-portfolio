import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal({ children, width = 'fit-content' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Change to trigger on scroll up or down
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden'); // Add this to animate when scrolling out of view
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 }, // Adjusted for smoother upward motion
          visible: { opacity: 1, y: 0 },  // Ensure smooth transition back
        }}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        transition={{
          duration: 0.75, // Increase duration for smoothness
          ease: [0.25, 0.46, 0.45, 0.94], // Ease-in-out curve for fluid motion
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
