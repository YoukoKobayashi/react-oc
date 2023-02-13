const ScrollFadeIn = () => {
  if (typeof window !== "undefined") {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-slideIn');
        }
      })
    }

    const observer = new IntersectionObserver(callback, options);

    const targets = document.querySelectorAll('.u-animation-fadein');
    targets.forEach((target) => {
      observer.observe(target);
    });
  }
}

export default ScrollFadeIn;