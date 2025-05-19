
import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({ 
  text, 
  speed = 40, 
  className = "", 
  onComplete 
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const index = useRef(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Reset when text changes
    setDisplayedText("");
    setIsComplete(false);
    index.current = 0;
    
    // Clear previous interval
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    
    // Start typing
    intervalId.current = setInterval(() => {
      if (index.current < text.length) {
        setDisplayedText(prev => prev + text.charAt(index.current));
        index.current += 1;
      } else {
        if (intervalId.current) {
          clearInterval(intervalId.current);
        }
        setIsComplete(true);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);
    
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [text, speed, onComplete]);
  
  return (
    <div className={`${className} ${isComplete ? 'after:hidden' : ''}`}>
      {displayedText}
      {!isComplete && <span className="animate-cursor-blink">|</span>}
    </div>
  );
};

export default TypewriterText;
