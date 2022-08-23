function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu3/IMAGENS/menu.jpg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "menu3/IMAGENS/menu2.jpg";
    }
}