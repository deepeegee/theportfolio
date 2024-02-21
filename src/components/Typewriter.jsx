import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay, color }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < words[currentWordIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + words[currentWordIndex][currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else {
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
        setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, words, currentWordIndex]);

  

  return <span style={{color: color}}>{currentText}</span>;
};

export default Typewriter;
