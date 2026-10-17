/* ================================================================= *
   THE ANIME CLOSET - INTERACTIVE AURA & THEME CONTROLLER
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Automatic System Theme Detection
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });

    // 2. Dynamic Living Background Aura Effect
    const ambientGlow = document.getElementById('ambient-glow');
    const cards = document.querySelectorAll('.card-container');

    if (ambientGlow) {
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const auraColor = card.getAttribute('data-aura');
                ambientGlow.style.backgroundColor = auraColor;
                ambientGlow.style.opacity = document.documentElement.classList.contains('dark') ? '0.45' : '0.18';
            });
            card.addEventListener('mouseleave', () => {
                ambientGlow.style.opacity = '0';
            });
        });
    }
});