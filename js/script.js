/* navigation */
const titleMMB = document.querySelector('#title_mmb');
const gasaNav = document.querySelector('#gasa_nav');
const frontNav = document.querySelector('#front_nav');
const contactNav = document.querySelector('#contact_nav');

/* sections */
const idImg = document.querySelector('#id_img');
const idGasa = document.querySelector('#id_content_gasa');
const idFront = document.querySelector('#id_content_front');
const idContact = document.querySelector('#id_contact');

const msgForIE = document.querySelector('#for_IE_JS_on');


/* events */

titleMMB.addEventListener('click', (e) => {
    idFront.style.display = 'none';
    idContact.style.display = 'none';
    idGasa.style.display = 'none';
    
    msgForIE.style.display = 'none';
    
//    idImg.style.display = 'block';
    document.querySelector('.sect_img').style.display = 'flex';
});

gasaNav.addEventListener('click', (e) => {
    idImg.style.display = 'none';
    idFront.style.display = 'none';
    idContact.style.display = 'none';
    
    msgForIE.style.display = 'none';
    
//   idGasa.classList.toggle('invisible_first');
   idGasa.style.display = 'flex';
});

frontNav.addEventListener('click', (e) => {
    idImg.style.display = 'none';
    idGasa.style.display = 'none';
    idContact.style.display = 'none';
    
    msgForIE.style.display = 'none';
    
   idFront.style.display = 'flex';
});

contactNav.addEventListener('click', (e) => {
    idImg.style.display = 'none';
    idGasa.style.display = 'none';
    idFront.style.display = 'none';
    
    msgForIE.style.display = 'none';
    
    idContact.style.display = 'flex';
});