import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useIsMobile() {
   const [isMobile, setIsMobile] = useState(false)
   const mobile = useMediaQuery({
      query: '(max-width:665px)',
   });
   useEffect(() => {
      setIsMobile(mobile)
   }, [mobile])

   return isMobile
}
