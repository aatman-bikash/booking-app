import { useEffect, useRef } from 'react';

export const useOutsideClickEvent = (handler) => {
  let ref = useRef();

  useEffect(() => {
    let handleClick = (event) => {
      if (!ref.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  return ref;
};
