window.addEventListener("scroll", function(){
    let header = document.getElementById("header");
    let btnSignIn = document.getElementById("btn-sign-in");
    let totalWidth = this.document.getElementById("totalWidth");
    let btnFloating = this.document.getElementById("reserva");

    header.classList.toggle("header-abajo",window.scrollY>0);
    btnSignIn.classList.toggle("btn-abajo",window.scrollY>0);
    totalWidth.classList.toggle("container"),window.scrollY>0;
    btnFloating.classList.toggle("position-fixed"),this.window.scrollY>0;
    btnFloating.classList.toggle("showBtn"),this.window.scrollY>0;
})