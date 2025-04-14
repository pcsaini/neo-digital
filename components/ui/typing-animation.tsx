import React, { useState, useEffect, useRef } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  blinkSpeed?: number;
  loop?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  typingSpeed = 150,
  blinkSpeed = 500,
  loop = true,
}) => {
  const [displayedText, setDisplayedText] = useState("|");
  const [isBlinking, setIsBlinking] = useState(true);
  const textIndex = useRef(0);
  const textArrayIndex = useRef(0);
  const isTyping = useRef(true);
  const typingInterval = useRef<NodeJS.Timeout | null>(null);
  const blinkInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTyping = () => {
      if (typingInterval.current) clearInterval(typingInterval.current);

      textIndex.current = -1;
      setDisplayedText("|"); // Reset display text

      typingInterval.current = setInterval(() => {
        textIndex.current += 1;
        const currentText = texts[textArrayIndex.current];

        if (textIndex.current < currentText.length) {
          setDisplayedText(currentText.slice(0, textIndex.current + 1));
        } else {
          clearInterval(typingInterval.current!);
          isTyping.current = false;

          setTimeout(() => {
            setDisplayedText("|");
            textIndex.current = -1;
            textArrayIndex.current = loop
              ? (textArrayIndex.current + 1) % texts.length
              : Math.min(textArrayIndex.current + 1, texts.length - 1);
            isTyping.current = true;
            startTyping();
          }, 1000);
        }
      }, typingSpeed);
    };
    startTyping();

    blinkInterval.current = setInterval(() => {
      setIsBlinking((prevBlink) => !prevBlink);
    }, blinkSpeed);

    return () => {
      if (typingInterval.current) {
        clearInterval(typingInterval.current);
      }
      if (blinkInterval.current) {
        clearInterval(blinkInterval.current);
      }
    };
  }, [texts, typingSpeed, blinkSpeed, loop]);

  return (
    <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-teal-500 to-lime-500">
      {displayedText}
      <span
        className={`absolute right-0 top-0 h-full w-[2px] bg-white transition-opacity duration-200 ${
          isBlinking ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
};

export default TypingAnimation;
