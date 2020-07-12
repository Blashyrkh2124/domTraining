const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.toggle('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = 'Hey, I am red.';
paragraph.style.color = 'red';
container.appendChild(paragraph);

var blueText = document.createElement('H3');
blueText.style.color = 'blue';
blueText.textContent = "I'm a blue H3";

container.appendChild(blueText);

var h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

var parMeToo = document.createElement('p');
parMeToo.textContent = 'ME TOO!';

var div = document.createElement('div');
div.style.cssText= 'border: solid; border-width: 5px; borderColor: black;'
div.style.backgroundColor = 'red';


div.appendChild(parMeToo);
div.insertBefore(h1, parMeToo);
container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', alertFunction);


function alertFunction() {
  alert("this is epic")
}

btn2.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
