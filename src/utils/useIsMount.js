import { useEffect, useRef } from "react";
 
 // checks whether initial render or not
export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
      isMountRef.current = false;
    }, []);
    return isMountRef.current;
  };