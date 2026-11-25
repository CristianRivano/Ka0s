const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  cards.forEach((card) => card.classList.toggle('hidden', filter !== 'all' && !card.dataset.category.includes(filter)));
}));
