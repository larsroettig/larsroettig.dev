import {useState, useEffect} from 'react';

interface WindowSize  {
  width?: number
  height?: number
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};

