/* navigation */
const gasaNav = document.querySelector('#gasa_nav');

/* sections */
const idImg = document.querySelector('#id_img');
const idGasa = document.querySelector('#id_content_gasa');


/* events */
gasaNav.addEventListener('click', (e) => {
   idImg.style.display = 'none';
//   idGasa.classList.toggle('invisible_first');
   idGasa.style.display = 'block';
});