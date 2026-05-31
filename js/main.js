document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for your message! We will be in touch soon.');
  this.reset();
});
