const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const body = document.body;

btn.onclick = function() {
    this.classList.toggle('active');
    container.classList.toggle('active');
    body.classList.toggle('dark-mode');
};