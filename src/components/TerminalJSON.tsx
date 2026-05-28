import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const jsonData = {
  focus: ['API Development', 'Database Design', 'Node.js'],
  status: 'Available for freelance',
  personality: 'Curious, detail-oriented, problem solver',
  currentlyLearning: ['Go', 'Docker', 'NestJS'],
};

const formatJSON = (): { text: string; type: 'key' | 'string' | 'bracket' | 'plain' }[][] => {
  const lines: { text: string; type: 'key' | 'string' | 'bracket' | 'plain' }[][] = [];
  lines.push([{ text: '{', type: 'bracket' }]);

  const entries = Object.entries(jsonData);
  entries.forEach(([key, value], i) => {
    const comma = i < entries.length - 1 ? ',' : '';
    const line: { text: string; type: 'key' | 'string' | 'bracket' | 'plain' }[] = [];
    line.push({ text: '  ', type: 'plain' });
    line.push({ text: `"${key}"`, type: 'key' });
    line.push({ text: ': ', type: 'plain' });

    if (Array.isArray(value)) {
      line.push({ text: '[', type: 'bracket' });
      const arrStr = value.map((v, j) => `"${v}"${j < value.length - 1 ? ', ' : ''}`).join('');
      line.push({ text: arrStr, type: 'string' });
      line.push({ text: ']' + comma, type: 'bracket' });
    } else {
      line.push({ text: `"${value}"`, type: 'string' });
      line.push({ text: comma, type: 'plain' });
    }
    lines.push(line);
  });

  lines.push([{ text: '}', type: 'bracket' }]);
  return lines;
};

const TerminalJSON = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const formattedLines = formatJSON();
  const totalChars = formattedLines.reduce(
    (sum, line) => sum + line.reduce((s, seg) => s + seg.text.length, 0) + 1,
    0,
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= totalChars) {
          clearInterval(intervalRef.current!);
          setIsComplete(true);
          return prev;
        }
        return prev + 1;
      });
    }, 25);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalChars]);

  const renderLines = () => {
    let charCount = 0;
    return formattedLines.map((line, li) => {
      const spans = line.map((seg, si) => {
        const segChars = seg.text.split('').map((char) => {
          charCount++;
          const visible = charCount <= visibleChars;
          return visible ? char : '';
        });
        const colorClass =
          seg.type === 'key'
            ? 'text-[hsl(var(--terminal-key))]'
            : seg.type === 'string'
              ? 'text-[hsl(var(--terminal-string))]'
              : seg.type === 'bracket'
                ? 'text-[hsl(var(--terminal-bracket))]'
                : 'text-[hsl(var(--terminal-bracket))]';
        return (
          <span key={si} className={colorClass}>
            {segChars.join('')}
          </span>
        );
      });
      charCount++; // newline
      return (
        <div key={li} className='leading-relaxed'>
          {spans}
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='w-full max-w-md rounded-none overflow-hidden border-4 border-border shadow-neo  bg-card'
    >
      {/* Title bar */}
      <div className='flex items-center gap-2 px-4 py-3 bg-[hsl(var(--terminal-border))]'>
        <div className='flex gap-1.5'>
          <div className='w-3 h-3 rounded-none border-2 border-border bg-destructive' />
          <div className='w-3 h-3 rounded-none border-2 border-border bg-primary' />
          <div className='w-3 h-3 rounded-none border-2 border-border bg-accent' />
        </div>
        <span className='terminal-font text-xs text-white ml-2 opacity-80'>
          developer.json
        </span>
      </div>

      {/* Content */}
      <div className='bg-[hsl(var(--terminal-bg))] p-5 terminal-font text-sm'>
        {renderLines()}
        {!isComplete && (
          <span className='inline-block w-2 h-4 bg-[hsl(var(--terminal-key))] animate-blink ml-0.5 align-middle' />
        )}
      </div>
    </motion.div>
  );
};

export default TerminalJSON;
