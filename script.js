const buttonMenu = document.getElementById('btn-mobile');

function activateFunction(){
    const nav = document.getElementById('navigation');
    nav.classList.toggle('active');
}

buttonMenu.addEventListener('click', activateFunction);