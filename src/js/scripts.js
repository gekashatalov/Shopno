window.onload = function () {
    let headerNav = document.querySelector('.header_nav');
    let btnMenu = document.querySelector('.menu');
    headerNav.addEventListener('click', open);


    function open() {
        btnMenu.classList.toggle('open');
    }

    $('.photos1').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })
}