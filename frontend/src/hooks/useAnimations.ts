import { useEffect, useRef } from 'react';

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Adds 'visible' class to elements with 'reveal', 'reveal-left', 'reveal-right', 'reveal-scale' classes.
 * Uses MutationObserver and WeakSet to handle dynamically added elements and Vite HMR properly.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observedSet = new WeakSet();

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      elements.forEach((el) => {
        if (!observedSet.has(el)) {
          observedSet.add(el);
          observer.observe(el);
        }
      });
    };

    // Initial observation
    observeElements();

    // Watch for dynamically added elements (e.g. via HMR or React Router)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

/**
 * Scroll tracking hook for milestone events (25%, 50%, 75%, 100%).
 */
export function useScrollTracking(onMilestone: (percent: number) => void) {
  const reached = useRef(new Set<number>());

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);

      const milestones = [25, 50, 75, 100];
      for (const m of milestones) {
        if (percent >= m && !reached.current.has(m)) {
          reached.current.add(m);
          onMilestone(m);
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onMilestone]);
}
