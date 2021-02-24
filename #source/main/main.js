/*Main block*/
const zoom = (headerSelector, trygerSelectorIn, trygerSelectorOut, modalSelector) => {
    let header = document.querySelector(headerSelector),
        trygersIn = document.querySelectorAll(trygerSelectorIn),
        trygersOut = document.querySelectorAll(trygerSelectorOut),
        windows = document.querySelectorAll('[data-modal]'),
        modals = document.querySelectorAll(modalSelector);

    //paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(trygerSelectorIn.replace(/\./, '')))) {

            trygersIn.forEach((tryger, i) => {
                if (target == tryger) {
                    windows.forEach(window => {
                        window.style = "display:none";
                    });
                    console.log(modals[i]);
                    modals[i].style = "display:block";
                    modals[i].classList.add('fadeIn');
                    // document.body.style.paddingRight = paddScr;
                    // document.body.style.overflow = 'hidden';
                }
            });
        }
    });

    trygersOut.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            windows.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('fadeIn');
            });
        });
    });
};



/*- Медленный скроулинг по документу-*/
const scrolling = () => {
    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};



/*- Работа с Табами КАТАЛОГА-*/
const tabCatalog = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('fadeIn');
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        content[i].classList.add('fadeIn');
        tab[i].classList.add(activeClass);

    }

    hideTabContent();
    showTabContent();


    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {

            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

/*-Вызываем и закрываем popup КАЛЬКУЛЯТОР-*/
let trigerSelectionProject = 0;
const PopupOpeneClouse = () => {
    const trigers = document.querySelectorAll('.js-zaborBtn'),
        popup = document.querySelector('.popup-calc'),
        clouse = document.querySelector('.clouse-calc'),
        paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';


    trigers.forEach((triger, i) => {

        triger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            popup.style = 'display:block';
            popup.classList.add('fadeIn');
            document.body.style.paddingRight = paddScr;
            document.body.style.overflow = 'hidden';



        });

    });

    clouse.addEventListener('click', () => {
        popup.style = 'display:none';
        popup.classList.remove('fadeIn');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0px';

    });

    popup.addEventListener('click', (e) => {

        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.paddingRight = '0px';
        }
    });
};
PopupOpeneClouse();



/*-----КАЛЬКУЛЯТОР---------*/
const calculator = () => {
    const projects = {
        "zsk-1": {
            kalitka: 5000,
            vorota: 10700,
            zabor: 3200,
            otkat: 15600,
            zero: 0

        },
        "zsk-2": {
            kalitka: 5700,
            vorota: 12300,
            zabor: 4300,
            otkat: 17700,
            zero: 0
        },

        "zsk-3": {
            kalitka: 5500,
            vorota: 11800,
            zabor: 3800,
            otkat: 16900,
            zero: 0
        },

        "zsk-4": {
            kalitka: 6700,
            vorota: 17500,
            zabor: 5400,
            otkat: 23300,
            zero: 0
        },

        "zsk-5": {
            kalitka: 6900,
            vorota: 17500,
            zabor: 5700,
            otkat: 23200,
            zero: 0
        },

        "zsk-6": {
            kalitka: 7000,
            vorota: 18300,
            zabor: 7900,
            otkat: 24200,
            zero: 0
        },

        "zsk-7": {
            kalitka: 6700,
            vorota: 16900,
            zabor: 4500,
            otkat: 22300,
            zero: 0
        },

        "zsk-8": {
            kalitka: 6700,
            vorota: 17200,
            zabor: 5300,
            otkat: 22900,
            zero: 0
        },


        "zsk-9": {
            kalitka: 7200,
            vorota: 18200,
            zabor: 6100,
            otkat: 24300,
            zero: 0
        },

        "zsk-10": {
            kalitka: 7200,
            vorota: 18200,
            zabor: 6100,
            otkat: 24300,
            zero: 0
        },

        "zsk-11": {
            kalitka: 7200,
            vorota: 17600,
            zabor: 5300,
            otkat: 23500,
            zero: 0
        },

        "zsk-12": {
            kalitka: 6900,
            vorota: 17500,
            zabor: 6100,
            otkat: 23500,
            zero: 0
        },

        "zsk-13": {
            kalitka: 6900,
            vorota: 17800,
            zabor: 6700,
            otkat: 23800,
            zero: 0
        },

        "zsk-14": {
            kalitka: 6600,
            vorota: 17200,
            zabor: 6200,
            otkat: 23000,
            zero: 0
        },

        "zsk-15": {
            kalitka: 6700,
            vorota: 17900,
            zabor: 6500,
            otkat: 23800,
            zero: 0
        }
    };

    const profil = {

        60: {
            2: 809,
            3: 1015,
            4: 0
        },

        80: {
            2: 0,
            3: 1268,
            4: 1600
        },

        100: {
            2: 0,
            3: 1504,
            4: 1900
        }
    };

    /*--Получаем значение от Select--*/
    const project = document.querySelector('.calc-select__body'),
        /*---Получаем значения элементов забора от CheckBox--*/
        selectKalitka = document.querySelector('.check__box-kalitka'),
        selectVorota = document.querySelector('.check__box-vorota'),
        selectZabor = document.querySelector('.check__box-zabor'),
        selectOtkat = document.querySelector('.check__box-otkat'),
        /*--Кнопка калькуляции проекта ---*/
        btnCalc = document.querySelector('.calcBtn');

    /*--Назначение глобальных переменных цен и установка их в 0--*/
    let priceKalitka = 0, // без учета высоты забора
        priceVorota = 0, // без учета высоты забора
        priceZabor = 0, // без учета высоты забора
        priceOtkat = 0, // без учета высоты забора
        priceKalitkaHight = 0,
        priceVorotaHight = 0,
        priceZaborHight = 0,
        priceOtkatHight = 0,
        /*--Устанавка CheckBox в первоначальное значение ziro---*/
        kalitka = "zero",
        vorota = "zero",
        zabor = "zero",
        otkat = "zero",
        /*--Устанавливаем Высоту забора (RadioBox) в первоначальное значение 0.8---*/
        hight = 0.85,
        /*--Устанавливаем первоначальную стоимость и размер колоны ---*/
        priceColumn = 0,
        sizeColumn = 60,
        sizeMetal = 2,
        /*--Устанавливаем длинну забора (Renge) ---*/
        fenceLength = 1,
        /*--Устанавливаем услугу покраска (Radio) ---*/
        coloration = 1,
        /*--Устанавливаем услугу монтаж (Radio) ---*/
        montage = 1,
        /*--Устанавливаем конечную стоимочсть проекта---*/
        totalProjectToFixid = 0,
        totalProject = 0;


    /*--fn Выбераем элемент КАЛИТКА, да-нет--*/
    let checkKalitka = () => {
        selectKalitka.addEventListener("change", function () {
            if (selectKalitka.checked) {
                kalitka = "kalitka";
            } else {
                kalitka = "zero";
            }
        });
    };

    checkKalitka();
    /*--fn Выбераем элемент ВОРОТА, да-нет--*/
    let checkVorota = () => {
        selectVorota.addEventListener("change", function () {
            if (selectVorota.checked) {
                vorota = "vorota";
            } else {
                vorota = "zero";
            }
        });
    };

    checkVorota();
    /*--fn Выбераем элемент ЗАБОР, да-нет--*/
    let checkZabor = () => {
        selectZabor.addEventListener("change", function () {
            if (selectZabor.checked) {
                zabor = "zabor";
            } else {
                zabor = "zero";
            }
        });
    };
    checkZabor();

    /*--fn Выбераем элемент ОТКАТНЫЕ ВОРОТА, да-нет--*/
    let checkOtkat = () => {
        selectOtkat.addEventListener("change", function () {
            if (selectZabor.checked) {
                otkat = "otkat";
            } else {
                otkat = "zero";
            }
        });
    };
    checkOtkat();


    /*--fn Выбераем Выбираем высоту забора (1.65м, 1.8м, 2м.)--*/
    let hightZabor = () => {
        const header = document.querySelector('.calc-radio__row--hight');

        header.addEventListener('change', (e) => {
            hight = e.target.value;
        });
    };
    hightZabor();

    /*--fn Выбираем профиль металла--*/
    let thickMetal = () => {
        let headerProfile = document.querySelector('.calc-radio__row--profile'),
            headerMetal = document.querySelector('.calc-radio__row--metal'),
            profiles = document.querySelectorAll('.calc-radio__profile'),
            metal = document.querySelectorAll('.calc-radio__metal');

        let metalFirst = document.querySelector('#r21'),
            metalLast = document.querySelector('#r23'),
            popupMetalFirst = document.querySelector('.popup-metal__first'),
            popupMetalLast = document.querySelector('.popup-metal__last');
        /*--Выбираем профиль--*/
        headerProfile.addEventListener('change', (e) => {

            if (profiles[1].checked || profiles[2].checked) {
                metalLast.removeAttribute('disabled', '');
                popupMetalLast.style = "display:none";
                popupMetalFirst.style = "display:block";
                metalFirst.setAttribute('disabled', '');
            } else {
                metalFirst.removeAttribute('disabled');
                popupMetalLast.style = "display:block";
                popupMetalFirst.style = "display:none";
                metalLast.setAttribute('disabled', '');
            }
            sizeColumn = e.target.value;
        });
        /*--Выбираем толщину металла--*/
        headerMetal.addEventListener('change', (e) => {
            sizeMetal = e.target.value;
        });
    };
    thickMetal();

    /*--fn Устанавливаем проект забора и цены выбранных элементов забора--*/
    let projectSelection = () => {


        project.addEventListener("change", function () {

            /*--Устанавливаем цены в соответствии с выбранным проектом--*/
            priceKalitka = projects[project.value][kalitka];
            priceVorota = projects[project.value][vorota];
            priceZabor = projects[project.value][zabor];
            priceOtkat = projects[project.value][otkat];
        });
    };
    projectSelection();

    /*--fn Устанавливаем длинну забора--*/
    const rangeBtn = () => {
        let range = document.querySelector('.calc-range__lenght'),
            output = document.querySelector('.length');
        output.textContent = range.value;
        range.oninput = function () {
            output.textContent = this.value;
            fenceLength = this.value;
        };
        range.addEventListener("mousemove", function () {
            let x = range.value / 3;
            let color = 'linear-gradient(90deg, rgb(255, 96, 5)' + x + '%, rgb(80, 80, 80)' + x + '%)';
            range.style.background = color;
        });
    };
    rangeBtn();

    /*--fn Устанавливаем услугу покраски--*/
    let colorationRadio = () => {
        const header = document.querySelector('.calc-radio__row--coloration');

        header.addEventListener('change', (e) => {
            coloration = e.target.value;
        });
    };
    colorationRadio();

    /*--fn Устанавливаем услугу монтажных работ--*/
    let montageRadio = () => {
        const header = document.querySelector('.calc-radio__row--montage');

        header.addEventListener('change', (e) => {
            montage = e.target.value;
        });
    };
    montageRadio();

    /*--fn Производим расчет стоимости проекта--*/
    let calcProject = () => {
        let numberOfModules;
        let totalProjectScoreboard = document.querySelector('.calc-total__scoreboard--wrapper > p'),
            cellkalitka = document.querySelector('.kalitkas'),
            cellVorota = document.querySelector('.vorots'),
            cellZabor = document.querySelector('.zabors'),
            cellOtkat = document.querySelector('.otkats'),
            cellName = document.querySelector('.name'),
            cellHight = document.querySelector('.hights'),
            cellProfile = document.querySelector('.profiles'),
            celllength = document.querySelector('.lengthes'),
            cellSum = document.querySelector('.sum'),
            cellColoration = document.querySelector('.colorations'),
            cellMontage = document.querySelector('.montages');


        btnCalc.addEventListener('click', function () {
            /*-Кнопка вывода результата-*/

            priceKalitkaHight = priceKalitka * hight; /*-Стоимость калитки-*/
            priceVorotaHight = priceVorota * hight; /*-Стоимость ворот-*/
            priceZaborHight = priceZabor * hight; /*-Стоимость забора-*/
            priceOtkatHight = priceOtkat * hight; /*-Стоимость откатных ворот-*/
            priceColumn = profil[sizeColumn][sizeMetal] * hight; /*-Стоимость столбиков-*/
            numberOfModules = Math.floor((+fenceLength * 1000) / (+sizeColumn + 3000)); /*-Количество блоков (столбик-забор) -*/
            totalProjectToFixid = ((priceKalitka + priceVorota + priceOtkat + (priceZabor * numberOfModules) + (priceColumn * numberOfModules)) * coloration) * montage; /*-Расчет стоимости проекта-*/
            totalProject = totalProjectToFixid.toFixed(2); /*-Определение количество символов после запятой .00 -*/
            totalProjectScoreboard.innerHTML = totalProject; /*-Вывод стоимости на экран-*/

            /*-Вывод значения КАЛИТКА Да - Нет -*/
            if (selectKalitka.checked) {
                cellkalitka.innerHTML = `Да`;
                cellkalitka.style = "color:#ff6005";
            } else {
                cellkalitka.innerHTML = `Не выбран`;
                cellkalitka.style = "color:#8b0000";
            }
            /*-Вывод значения ВОРОТА Да - Нет -*/
            if (selectVorota.checked) {
                cellVorota.innerHTML = `Да`;
                cellVorota.style = "color:#ff6005";
            } else {
                cellVorota.innerHTML = `Не выбран`;
                cellkalitka.style = "color:#8b0000";
            }
            /*-Вывод значения ЗАБОР Да - Нет -*/
            if (selectZabor.checked) {
                cellZabor.innerHTML = `Да`;
                cellZabor.style = "color:#ff6005";
            } else {
                cellZabor.innerHTML = `Не выбран`;
                cellZabor.style = "color:#8b0000";
            }
            /*-Вывод значения ОТКАТНЫЕ ВОРОТА Да - Нет -*/
            if (selectOtkat.checked) {
                cellOtkat.innerHTML = `Да`;
                cellOtkat.style = "color:#ff6005";
            } else {
                cellOtkat.innerHTML = `Не выбран`;
                cellOtkat.style = "color:#8b0000";
            }

            /*-Вывод значения НАЗВАНИЕ ПРОЕКТА -*/
            if (project.value == "none") {
                cellName.innerHTML = `Не выбран`;
                cellName.style = "color:#8b0000";
            } else {
                cellName.innerHTML = `${project.value}`;
                cellName.style = "color:#ff6005";
            }

            /*-Вывод значения ВЫСОТЫ ЗАБОРА -*/
            if (+hight == 0.85) {
                cellHight.innerHTML = `1.65`;
                cellHight.style = "color:#ff6005";
            } else if (+hight == 0.9) {
                cellHight.innerHTML = `1.8`;
                cellHight.style = "color:#ff6005";
            } else {
                cellHight.innerHTML = `2`;
                cellHight.style = "color:#ff6005";
            }

            /*-Вывод значения ПРОФИЛЯ МЕТАЛЛА -*/
            if (priceColumn == 0) {
                cellProfile.innerHTML = `Не выбран`;
                cellProfile.style = "color:#8b0000";
            } else {
                cellProfile.innerHTML = `${sizeColumn} x ${sizeColumn} х ${sizeMetal}`;
                cellProfile.style = "color:#ff6005";
            }

            /*-Вывод ДЛИННЫ ЗАБОРА -*/
            celllength.innerHTML = +fenceLength;
            celllength.style = "color:#ff6005";

            /*-Вывод числа КОЛИЧЕСТВА СЕКЦИЙ (забор + столб) -*/
            cellSum.innerHTML = numberOfModules;
            cellSum.style = "color:#ff6005";

            /*-Вывод услуги ПОКРАСКИ ЗАБОРА да - нет -*/
            if (+coloration == 1) {
                cellColoration.innerHTML = `Не выбран`;
                cellColoration.style = "color:#8b0000";
            } else {
                cellColoration.innerHTML = `Да`;
                cellColoration.style = "color:#ff6005";
            }

            /*-Вывод услуги МОНТАЖА ЗАБОРА да - нет -*/
            if (+montage == 1) {
                cellMontage.innerHTML = `Не выбран`;
                cellMontage.style = "color:#8b0000";
            } else {
                cellMontage.innerHTML = `Да`;
                cellMontage.style = "color:#ff6005";
            }

        });
    };
    calcProject();
};
/*-Открытие и закрытие Popup ФОРМЫ запроса-*/
const openPopupForm = () => {
    const popupFormBtn = document.querySelector('.baner-btn'),
        popupFormContent = document.querySelector('.popupForm'),
        popupFormClouse = document.querySelector('.clouseForm'),
        paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    popupFormBtn.addEventListener('click', () => {
        popupFormContent.style = 'display:block';
        popupFormContent.classList.add('fadeIn');
        document.body.style.paddingRight = paddScr;
        document.body.style.overflow = 'hidden';
    });
    popupFormClouse.addEventListener('click', () => {
        popupFormContent.style = "display:none";
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0px';
    });
};
openPopupForm();


/*--Для reqForm --*/

$(document).ready(function () {

    $('input[type=submit]').click(function () {
        $('input[name=email]').removeAttr('required'); //В поле запроса E-mail
        $('textarea[name=text]').removeAttr('required'); //В поле текст
    });

    $('#reqForm').submit(function (event) {
        const popupFormContent = document.querySelector('.popupForm'),
            thankYou = document.querySelector('#js-reqThankYou'),
            paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

        event.preventDefault();


        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (result) {
                popupFormContent.style = 'display:none';
                thankYou.style = 'display:block';
                thankYou.classList.add('fadeIn');
                document.body.style.paddingRight = paddScr;
                document.body.style.overflow = 'hidden';
                $(this).find('input').val('');
                $('#reqForm').trigger('reset'); //Перезагрузка всех окон в форме

            }
        });

        // Закрыть попап «спасибо»
        $('#js-reqCloseThankYou').click(function () { // по клику на крестик
            thankYou.style = 'display:none';
            document.body.style.overflow = '';
            document.body.style.paddingRight = '0px';
            $('input[name=email]').attr('required', ''); //В поле запроса E-mail
            $('textarea[name=text]').attr('required', ''); //В поле текст
        });

    });


    /*--Для Form --*/

    $('#form').submit(function (event) {
        const paddScr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
        event.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (result) {
                $('#js-ThankYou').fadeIn().addClass('fadeIn'); //Вызов Popup: Спасибо за заявку!
                $('#js-ThankYou').addClass('fadeIn'); //Вызов Popup: Спасибо за заявку!
                document.body.style.paddingRight = paddScr;
                document.body.style.overflow = 'hidden';
                $(this).find('input').val('');
                $('#form').trigger('reset'); //Перезагрузка всех окон в форме
            }
        });

        // Закрыть попап «спасибо»
        $('#js-CloseThankYou').click(function () { // по клику на крестик
            $('#js-ThankYou').fadeOut();
            document.body.style.overflow = '';
            document.body.style.paddingRight = '0px';
            $('input[name=email]').attr('required', ''); //В поле запроса E-mail
            $('textarea[name=text]').attr('required', ''); //В поле текст

        });

    });


});