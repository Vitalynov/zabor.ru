/*Header*/
// Смена классов БУРГЕРА
const burger = () => {

    let burger = document.querySelector('.header-burger'),
        menu = document.querySelector('.header-menu'),
        body = document.querySelector('body'),
        links = document.querySelectorAll('.header-list__link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });

    //Закрытие Хедер с сылками по клику на ссылку 
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            body.classList.toggle('lock');
        });
    });

};
//header fixed smoll
const scrollHeader = () => {
    let header = document.querySelector('.header-body');

    window.addEventListener('scroll', () => {

        if (window.scrollY >= 5) {
            header.classList.add('block');
        } else {
            header.classList.remove('block');

        }
    });
};

scrollHeader();

//Окрашивание ссылок Link выбранного раздела
const lineActive = () => {
    let header = document.querySelector('.header-menu'),
        active = document.querySelectorAll('.header-list__link');

    function hideActive() {
        active.forEach(item => {
            item.classList.remove('activeNav');
        });
    }

    function showActive(i = 0) {
        active[i].classList.add('activeNav');
    }

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target && (target.classList.contains('header-list__link'))) {

            active.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideActive();
                    showActive(i);
                }
            });
        }
    });

    /*-Вешает активный элемент ссылки Link при скроулинге-*/
    let contents = document.querySelectorAll('.contentActiv');

    function scrollActiv() {
        contents.forEach((content, i) => {
            let contentOfsetTop = content.offsetTop;
            if (window.scrollY >= contentOfsetTop + -10) {
                hideActive();
                showActive(i);
            }
        });
    }
    window.addEventListener('scroll', scrollActiv);

};
