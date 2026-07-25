/**
 * Attract · Align · Empower — Main JavaScript
 */

'use strict';

/* =========================================================
   Navigation
   ========================================================= */
const navbar       = document.querySelector('.navbar');
const navToggle    = document.querySelector('.navbar-toggle');
const navLinks     = document.querySelector('.navbar-links');
const allNavLinks  = document.querySelectorAll('.navbar-links a:not(.btn)');

// Mobile menu toggle
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on link click
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Highlight active page in nav
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
allNavLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* =========================================================
   Scroll-reveal animations
   ========================================================= */
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* =========================================================
   FAQ Accordion
   ========================================================= */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      answer.setAttribute('aria-hidden', String(!isOpen));
    });
  });
}

/* =========================================================
   Contact form — client-side validation
   ========================================================= */
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    form.querySelectorAll('.field-error').forEach((el) => el.remove());
    form.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));

    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        markInvalid(field, 'This field is required.');
      }
    });

    // Email format
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailField.value.trim())) {
        valid = false;
        markInvalid(emailField, 'Please enter a valid email address.');
      }
    }

    if (valid) {
      showFormSuccess(form);
    }
  });
}

function markInvalid(field, message) {
  field.classList.add('error');
  const errMsg = document.createElement('p');
  errMsg.className = 'field-error';
  errMsg.style.cssText = 'color:#c0392b;font-size:0.8rem;margin-top:0.3rem;';
  errMsg.textContent = message;
  field.parentNode.appendChild(errMsg);
}

function showFormSuccess(form) {
  const successDiv = document.createElement('div');
  successDiv.style.cssText =
    'background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:1.2rem 1.5rem;' +
    'color:#166534;font-weight:600;margin-top:1rem;text-align:center;';
  successDiv.innerHTML =
    '✅ Thank you! Your message has been received. I\'ll be in touch within 24 hours.';
  form.reset();
  form.appendChild(successDiv);
  setTimeout(() => successDiv.remove(), 6000);
}

/* =========================================================
   Smooth scroll for anchor links
   ========================================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* =========================================================
   Bootstrap
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initFAQ();
  initContactForm();
  initSmoothScroll();
});
