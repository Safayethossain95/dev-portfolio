import React, { useState, useEffect } from 'react';
import { CodeToken } from '../../types';

interface CodeTyperProps {
  tokens: CodeToken[];
  speed?: number;
}

const CodeTyper: React.FC<CodeTyperProps> = ({ tokens, speed = 50 }) => {
  const [displayedTokens, setDisplayedTokens] = useState<CodeToken[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Flatten logic to handle typing character by character while preserving token structure
  useEffect(() => {
    let charIndex = 0;
    const fullTextLength = tokens.reduce((acc, token) => acc + token.text.length, 0);
    
    // We need to construct the display state based on how many chars have been "typed"
    const interval = setInterval(() => {
      charIndex++;
      
      if (charIndex > fullTextLength) {
        clearInterval(interval);
        return;
      }

      // Reconstruct tokens up to charIndex
      let currentLength = 0;
      const newTokens: CodeToken[] = [];

      for (const token of tokens) {
        if (currentLength >= charIndex) break;

        const remainingChars = charIndex - currentLength;
        
        if (remainingChars >= token.text.length) {
          // Full token is visible
          newTokens.push(token);
          currentLength += token.text.length;
        } else {
          // Partial token is visible
          newTokens.push({
            ...token,
            text: token.text.slice(0, remainingChars)
          });
          currentLength += remainingChars;
          break; // We've reached the cursor
        }
      }
      setDisplayedTokens(newTokens);

    }, speed);

    return () => clearInterval(interval);
  }, [tokens, speed]);

  // Cursor blinking effect
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <pre className="font-mono text-sm sm:text-base leading-relaxed">
      <code>
        {displayedTokens.map((token, idx) => (
          <React.Fragment key={idx}>
            {token.newLine && <span>{'\n'}</span>}
            {token.indent && <span>{' '.repeat(token.indent)}</span>}
            <span className={token.color}>{token.text}</span>
          </React.Fragment>
        ))}
        <span 
          className={`inline-block w-2 h-5 align-middle bg-cyan-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} 
        />
      </code>
    </pre>
  );
};

export default CodeTyper;