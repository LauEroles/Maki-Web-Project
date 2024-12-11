const iconoMenu=document.querySelector('#icono-menu'),
menu=document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    //Alternamos estilos para el menu y el body
    menu.classList.toggle('active');
   document.body.classList.toggle('opacity');

    //Alternamos su atributo src para el icono del menu
   /* const rutaActual=e.target.getAttribute('src');

    if (rutaActual==Imagenes/hamburgermenu_120234.png) {
        e.target.setAttribute('src', 'Imagenes/hamburgermenu_BUSCAR FOTO CON MENU EN BLANCO PA QUE CONTRASTE.png');
    }else{
        e.target.setAttribute('src','Imagenes/hamburgermenu_120234.png');
    }*/

})