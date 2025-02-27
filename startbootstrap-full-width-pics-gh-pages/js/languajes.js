var check=document.querySelector(".check");

// Verifica el idioma actual y marca el checkbox correctamente
if (window.location.pathname.includes("/en/")) {
    check.checked = true;  // Si está en la versión en inglés, el checkbox debe estar activado
} else {
    check.checked = false;
}
//Evento para cambiar el idioma
check.addEventListener("click", function () {
    if (check.checked) {
        location.href = "en/indexEn.html";  // Redirige a inglés
    } else {
        location.href = "../index.html";  // Redirige a español
    }
});
    //prueba console.log(check.checked);

    //let id=check.checked;

   // if(id==true){
  //      location.href="/en/indexEn.html";
  //  }else{
   //     location.href="../index.html";
   // }
//}
