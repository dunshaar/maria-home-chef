'use strict';

// Keep the mobile contact bar out of the way while the full contacts are visible.
const contactSection = document.querySelector('#contact');
const mobileBar = document.querySelector('.mobile-contact');
if (contactSection && mobileBar && 'IntersectionObserver' in window) {
  const contactObserver = new IntersectionObserver(([entry]) => {
    mobileBar.hidden = entry.isIntersecting;
  }, { threshold: 0.12 });
  contactObserver.observe(contactSection);
}
