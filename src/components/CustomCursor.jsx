import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  // Position tracking using Motion Values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Physics springs for a fluid, lag-free fluid trailing effect
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Completely disable on mobile devices to prevent touch interaction conflicts
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Detect when hovering over interactive components across your whole app
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".grid-default-color") ||
        target.closest(".grid-black-color") ||
        target.closest(".grid-special-color")
      ) {
        setCursorType("hovered");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Variants to switch cursor behavior dynamically when hovering or idling
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(167, 139, 250, 0.4)", // Translucent lavender
      border: "1px solid rgba(167, 139, 250, 0.8)",
      borderRadius: "50%",
    },
    hovered: {
      width: 56,
      height: 56,
      backgroundColor: "rgba(255, 255, 255, 1)", // Pure solid white for full inversion
      border: "0px solid transparent",
      borderRadius: "50%",
    }
  };

  return (
    <>
      {/* Outer fluid physics cursor wrapper */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        animate={cursorType}
        variants={variants}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.2 }}
      >
        {/* If cursor type shifts to 'hover', render a subtle interactive focal text inside it */}
        {cursorType === "hovered" && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-bold text-black uppercase tracking-widest pointer-events-none select-none"
          >
            View
          </motion.span>
        )}
      </motion.div>

      {/* Tiny immediate pin center point to keep pointer spatial accuracy intact */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-mint rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
};

export default CustomCursor;