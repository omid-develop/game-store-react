const search = document.querySelector('.search');
const input = document.querySelector('.input');
const docme = document.querySelector('.docme');

docme.addEventListener('click' , function (){
    search.classList.toggle('active');
})