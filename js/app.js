
//variables
const header = document.querySelector("header");
const logo = document.querySelector('#logo');
let textoLogo = document.querySelector('#text-logo')
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');
const hero = document.querySelector('.hero')
    
//Events
CargarEventos();
function CargarEventos(){
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    btnMenu.addEventListener('click', mostrar_menu);
    hero.addEventListener('click',ocultarMenu);

}


//functions
    let i = 0;
    let txt = "Desarrollador web Full stack";
    let speed = 80;
function typeWirite(){
    if(i < txt.length){
        textoLogo.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWirite, speed);
    }
}

typeWirite();

function mostrar_menu(){
    nav.style.right = '0';
}

function ocultarMenu(){
    nav.style.right = '-250px';
}