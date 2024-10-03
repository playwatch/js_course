const botones = document.querySelectorAll("button");

botones.forEach(boton => {
    boton.addEventListener("click", function(){
        const obtenID = this.getAttribute("data-target");
        const obtenPosicion = document.getElementById(obtenID);
        obtenPosicion.scrollIntoView({
            behavior: "smooth"
        });
    });
});