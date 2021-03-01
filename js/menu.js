var aberto = false;

function abrirMenu(){
    if(aberto == false){
        document.getElementById("menuuu").style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
        aberto = true;
    }else if(aberto == true){
        document.getElementById("menuuu").style.display = "none";
        document.querySelector("body").style.overflow = "visible";
        aberto = false;
    }
}