/* ============================================================
   ChubiTV – Main JavaScript
   ============================================================ */

// ── FAQ Accordion ──
document.querySelectorAll('.faq-question').forEach(function(q) {
  q.addEventListener('click', function() {
    var parent = q.parentElement;
    parent.classList.toggle('active');
    var icon = q.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-chevron-down');
      icon.classList.toggle('fa-chevron-up');
    }
  });
});

// ── Sticky CTA on mobile scroll ──
window.addEventListener('scroll', function() {
  var sticky = document.getElementById('stickyCta');
  if (!sticky) return;
  if (window.scrollY > 300 && window.innerWidth < 768) {
    sticky.classList.add('active-sticky');
  } else {
    sticky.classList.remove('active-sticky');
  }
});

// ── Popup ──
function openPopup() {
  document.getElementById('popupOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePopup();
});
