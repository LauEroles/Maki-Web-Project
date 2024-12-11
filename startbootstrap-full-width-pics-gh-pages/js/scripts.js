/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const flagsElement=document.getElementById(flags);
const changeLanguage=async language => {
    const requestJason= await fetch(`./languages/${language}.json`);
    const texts= await requestJason.json();


console.log(texts);
}


flagsElement.addEventListener("click",(e)=>{
    changeLanguage(e.target.parentElement.dataset.language);                
});

/* continuar viendo para hacer lo del doble idioma, preguntar Alvarito Licha Agamez 
llegue al minuto 10:32 , pero tengo que revisar porque me tira errores en el
devtool, ya le escribi un email al del video a ver si puede ayudarme
https://www.youtube.com/watch?v=hBYVxQLtrqQ */

