const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', function () {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
})

h1.addEventListener('click', function () {
  h1.style.color = makeRandomColor();
})


const buttonBoxs = document.querySelectorAll('.boxes');

for (let btnBox of buttonBoxs) {
  btnBox.addEventListener('click', function () {
    btnBox.style.backgroundColor = makeRandomColor();
    btnBox.style.color = makeRandomColor();
  })
}

