(function () {
  var root = document.documentElement;
  try { var s = localStorage.getItem('theme'); if (s) root.setAttribute('data-theme', s); } catch (e) {}
  var t = document.getElementById('themeToggle');
  if (t) t.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
  var nt = document.getElementById('navToggle'), nl = document.getElementById('navLinks');
  if (nt && nl) nt.addEventListener('click', function () {
    var open = nl.classList.toggle('is-open');
    nt.setAttribute('aria-expanded', open);
  });
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  var btns = document.querySelectorAll('.filter-btn'), cards = document.querySelectorAll('.project-card');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      btns.forEach(function (x) { x.classList.remove('is-active'); });
      b.classList.add('is-active');
      var f = b.dataset.filter;
      cards.forEach(function (c) {
        c.classList.toggle('is-hidden', f !== 'all' && (c.dataset.tags || '').split(' ').indexOf(f) < 0);
      });
    });
  });
  var form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var n = form.name.value, em = form.email.value, m = form.message.value;
    location.href = 'mailto:travindra710@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + n) +
      '&body=' + encodeURIComponent(m + '\n\nFrom: ' + n + ' (' + em + ')');
    var note = document.getElementById('formNote'); if (note) note.textContent = 'Opening your email app…';
  });
})();
