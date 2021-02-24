window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    ibg();
    burger();
    scrolling();
    lineActive();
    zoom(".catalog-сontent", ".imgTrygerIn", ".imgTrygerOut", ".zabor-column__img--zoom");
    zoom(".gallery-flex", ".imgTrygerInGallery", ".imgTrygerOutGallery", ".gallery-column__img--zoom");
    tabCatalog('.catalog-tubs', '.catalog-tub__item', '.catalog-сontent__item', 'activeTab');
    calculator();

});

function ibg() {

    let ibg = document.querySelectorAll(".ibg");

    ibg.forEach((item, i) => {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    });

}


//@prepros-append header/header.js
//@prepros-append main/main.js
//@prepros-append footer/footer.js