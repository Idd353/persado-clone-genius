
export const observeAnimations = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }
  
  return () => {};
};

export const lazyLoadImages = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imagesToLazyLoad = document.querySelectorAll('.lazy-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy-image-loading');
            img.classList.add('lazy-image-loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    imagesToLazyLoad.forEach(image => {
      image.classList.add('lazy-image-loading');
      imageObserver.observe(image);
    });

    return () => {
      imagesToLazyLoad.forEach(image => {
        imageObserver.unobserve(image);
      });
    };
  }
  
  return () => {};
};
