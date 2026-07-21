import { useEffect, useRef, useState } from 'react';

/**
 * Wraps content and fades + rises it into view the first time it enters
 * the viewport. Uses IntersectionObserver (no dependencies) and unobserves
 * after revealing so it only animates once. Respects prefers-reduced-motion
 * via the CSS in index.css (.reveal rules are neutralized there).
 */
function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  // Start visible when IntersectionObserver is unavailable (e.g. very old
  // browsers / SSR) so content is never stuck hidden.
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
