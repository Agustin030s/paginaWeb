const menu = document.querySelector('.menu');
const menu_nav = document.querySelector('.menu-navegacion');

// console.log(menu);
// console.log(menu_nav);

menu.addEventListener('click',()=>{
    menu_nav.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu_nav.classList.contains('spread') && e.target != menu_nav && e.target != menu    ){

            menu_nav.classList.toggle("spread")

    }
})