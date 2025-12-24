import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top
    window.scrollTo(0, 0);

    // 2. Refresh AOS animations to ensure content is visible
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 100);
      
      // Secondary refresh for slower widgets (like maps/twitter)
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 500);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;