import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";

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

    useEffect(() => {
      gsap.fromTo(
        ".typing-animation",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
      );
    }, []);

    return (
      <div className={`typing-animation ${className}`}>
        {displayedText}
        {index < text.length && <span>|</span>}
      </div>
    );
  },
);

TypingAnimation.displayName = "TypingAnimation";

export default TypingAnimation;
