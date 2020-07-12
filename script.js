const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.toggle('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
