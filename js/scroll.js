window.addEventListener("scroll", function(){
    let header = document.getElementById("header");
    let btnSignIn = document.getElementById("btn-sign-in");
    let totalWidth = this.document.getElementById("totalWidth");
    header.classList.toggle("header-abajo",window.scrollY>0);
    btnSignIn.classList.toggle("btn-abajo",window.scrollY>0);
    totalWidth.classList.toggle("container"),window.scrollY>0;
})