const questions = document.querySelectorAll('.faq-toggle');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Toggle da classe ativa
    question.classList.toggle('active');

    // Alterna o + e -
    const symbol = question.querySelector('span');
    symbol.textContent = question.classList.contains('active') ? '−' : '+';
  });
});
