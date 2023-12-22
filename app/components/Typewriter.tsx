'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  hiddenCursor?: boolean;
  delay: number;
  textClass?: string;
}
export default function Typewriter(props: TypewriterProps) {
  const [text, setText] = useState('');
  const [visibleCursor, setVisibleCursor] = useState(false);

  const escreverNaTela = (text: string, i = 0) => {
    if (i < text.length) {
      setVisibleCursor(true);

      setText(text.slice(0, i + 1));
      setTimeout(() => escreverNaTela(text, i + 1), 100);
    } else if (i >= text.length && props.hiddenCursor) {
      setVisibleCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => escreverNaTela(props.text), props?.delay ?? 200);
  }, []);

  return (
    <div>
      {text}
      {visibleCursor && (
        <span className="animate-animar-cursor md:text-6xl ml-2">|</span>
      )}
    </div>
  );
}
