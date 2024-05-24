const colors = [
  { id: 'turquoise', name: 'Turquoise' }, // Replacing Grey with Turquoise
  { id: 'goldenrod', name: 'Goldenrod' },
  { id: 'blue', name: 'Blue' },
  { id: 'yellow', name: 'Yellow' },
  { id: 'purple', name: 'Purple' },
  { id: 'red', name: 'Red' },
  { id: 'green', name: 'Green' },
  { id: 'pink', name: 'Pink' },
  { id: 'voilet', name: 'Voilet' },
  { id: 'darkslateblue', name: 'Dark Slate Blue' },
  { id: 'coral', name: 'Coral' },
  { id: 'orange', name: 'Orange' }
];

const body = document.querySelector('body');
const buttonsContainer = document.querySelector('.buttons-container');
const sound = document.getElementById('sound');

colors.forEach(color => {
  const button = document.createElement('button');
  button.textContent = color.name;
  button.classList.add('button');
  button.dataset.color = color.id;
  button.style.backgroundColor = color.id;
  buttonsContainer.appendChild(button);
});

const changeColor = (color) => {
  body.style.transition = 'background-color 0.5s ease';
  body.style.backgroundColor = color;
  sound.play();
};

const applyRandomColor = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)].id;
  changeColor(randomColor);
  // Call applyRandomColor() again after 1 second
  setTimeout(applyRandomColor, 1000);
};

// Initial call to applyRandomColor() to start the color switching
applyRandomColor();

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
      const selectedColor = button.dataset.color;
      changeColor(selectedColor);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'r') {
      applyRandomColor();
  }
});
