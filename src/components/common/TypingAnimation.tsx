import { motion } from "framer-motion";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";

type Props = {
  text: string;
  className?: string;
};

export type TypingAnimationRef = {
  reset: () => void;
};

const TypingAnimation = forwardRef<TypingAnimationRef, Props>(
  ({ text, className }, ref) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setDisplayedText("");
        setIndex(0);
      },
    }));

    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 150);
        return () => clearTimeout(timeout);
      }
    }, [index, text]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={className}
      >
        {displayedText}
        {index < text.length && <span>|</span>}
      </motion.div>
    );
  },
);

TypingAnimation.displayName = "TypingAnimation";

export default TypingAnimation;
