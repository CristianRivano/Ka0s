const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  cards.forEach((card) => card.classList.toggle('hidden', filter !== 'all' && !card.dataset.category.includes(filter)));
}));

function updateLocalTime(){
  const now = new Date();
  const time = now.toLocaleTimeString('es-CL',{hour:'2-digit',minute:'2-digit',hour12:false});
  const target = document.getElementById('local-time');
  if (target) target.textContent = time;
}
updateLocalTime();
setInterval(updateLocalTime, 30000);
