//MAIN PAGE
const mainPage = new Vue ({
    el: '#toucan-main-page',
    data: {
        titleRU : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleBY : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleUA : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleEE : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleLT : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleLV : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        
        menu1RU: 'Веселимся с Туканом',
        menu2RU: 'В ресторане',
        menu3RU: 'Территория детства',
        
        keySlider1items : [
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/408ffea0-5e1f-4c91-a12d-a40ca3ac3c7f/T1);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Тукан - Путешественник',
                textRU: 'Вас неоднократно озадачивало внезапное - маам, паап, а почему...?  И вы хотите хотя бы в отпуске размышлять только над одним - "почему так хорошо..."? Тогда вам точно поможет наш Тукан, вместе с ним дети будут изучать устройство мира. Малыш получит настоящий Мини Тукан загранпаспорт и отправится в чудесное путешествие по планете в поисках новых приключений и знаний.',
                
                //BY
                nameBY: 'Тукан - Путешественник',
                textBY: 'Вас неоднократно озадачивало внезапное - маам, паап, а почему...?  И вы хотите хотя бы в отпуске размышлять только над одним - "почему так хорошо..."? Тогда вам точно поможет наш Тукан, вместе с ним дети будут изучать устройство мира. Малыш получит настоящий Мини Тукан загранпаспорт и отправится в чудесное путешествие по планете в поисках новых приключений и знаний.',
                
                //UA
                nameUA: 'Тукан - Путешественник',
                textUA: 'Вас неоднократно озадачивало внезапное - маам, паап, а почему...?  И вы хотите хотя бы в отпуске размышлять только над одним - "почему так хорошо..."? Тогда вам точно поможет наш Тукан, вместе с ним дети будут изучать устройство мира. Малыш получит настоящий Мини Тукан загранпаспорт и отправится в чудесное путешествие по планете в поисках новых приключений и знаний.',
                
                //EE
                nameEE: '',
                textEE: '',
                
                //LT
                nameLT: '',
                textLT: '',
                
                //LV
                nameLV: '',
                textLV: '',
                
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/9ac47302-573f-4c73-8f3e-3b0df6eff70e/T2);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Увлекательная вечерняя программа!',
                textRU: 'Заводное мини-диско, Просмотр интересных новых мультфильмов, Вечеринка Тукана',
                
                //BY
                nameBY: 'Увлекательная вечерняя программа!',
                textBY: 'Заводное мини-диско, Просмотр интересных новых мультфильмов, Вечеринка Тукана',
                
                //UA
                nameUA: 'Увлекательная вечерняя программа!',
                textUA: 'Заводное мини-диско, Просмотр интересных новых мультфильмов, Вечеринка Тукана',
                
                //EE
                nameEE: '',
                textEE: '',
                
                //LT
                nameLT: '',
                textLT: '',
                
                //LV
                nameLV: '',
                textLV: '',
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/81db427c-1854-4807-85a4-2dcb0f49d4cb/T3);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Магия кино',
                textRU: 'Киносеанс под открытым небом с попкорном',
                
                //BY
                nameBY: 'Магия кино',
                textBY: 'Киносеанс под открытым небом с попкорном',
                
                //UA
                nameUA: 'Магия кино',
                textUA: 'Киносеанс под открытым небом с попкорном',
                
                //EE
                nameEE: '',
                textEE: '',
                
                //LT
                nameLT: '',
                textLT: '',
                
                //LV
                nameLV: '',
                textLV: '',
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/491137fa-480b-4b12-b8d2-ebf19448abbe/T4);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Подвижные игры',
                textRU: 'Выплескиваем энергию в играх! Сюжетно-ролевые игры: "Поварята", "Через джунгли на лиане", "Поиск сокровищ".',
                
                //BY
                nameBY: 'Магия кино',
                textBY: 'Выплескиваем энергию в играх! Сюжетно-ролевые игры: "Поварята", "Через джунгли на лиане", "Поиск сокровищ".',
                
                //UA
                nameUA: 'Магия кино',
                textUA: 'Выплескиваем энергию в играх! Сюжетно-ролевые игры: "Поварята", "Через джунгли на лиане", "Поиск сокровищ".',
                
                //EE
                nameEE: '',
                textEE: '',
                
                //LT
                nameLT: '',
                textLT: '',
                
                //LV
                nameLV: '',
                textLV: '',
            },
            
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/3f3ec809-f4de-4504-ac3f-345510238441/T5_1);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Подарки от Тукана',
                textRU: 'Подарки любят все, а мы любим наших клиентов. Поэтому при первом визите в клуб TUI Мини Тукан наши маленькие гости получают подарок - футболку с фирменной символикой Тукана. Теперь мы одна команда!',
                
                //BY
                nameBY: 'Подарки от Тукана',
                textBY: 'Подарки любят все, а мы любим наших клиентов. Поэтому при первом визите в клуб TUI Мини Тукан наши маленькие гости получают подарок - футболку с фирменной символикой Тукана. Теперь мы одна команда!',
                
                //UA
                nameUA: 'Подарки от Тукана',
                textUA: 'Подарки любят все, а мы любим наших клиентов. Поэтому при первом визите в клуб TUI Мини Тукан наши маленькие гости получают подарок - футболку с фирменной символикой Тукана. Теперь мы одна команда!',
                
                //EE
                nameEE: '',
                textEE: '',
                
                //LT
                nameLT: '',
                textLT: '',
                
                //LV
                nameLV: '',
                textLV: '',
            },
        ]
    }
})





//РАЗВЛЕКАТЕЛЬНАЯ ПРОГРАММА

const toucanPartyProgram = new Vue ({
    el: '#toucan-party-program',
    data: {
        titleRU: 'Развлекательная программа',
        menu1RU : 'Для детей 4-12 лет', 
        
        slider1items : [
            {
                background : 'background: url(https://www.tui.ru/getmedia/ec359478-34a7-499d-a958-18e33be583de/T23);background-size: cover;',
                aboutRU: 'Утренняя зарядка / йога /',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/8fa60090-1fc6-49a5-8914-c57c7f089754/T24);background-size: cover;',
                aboutRU: 'Академия плавания',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/9380d2e8-787c-4bad-b236-c0ee3eefa764/T25);background-size: cover;',
                aboutRU: 'Поиск сокровищ',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/2c69d3df-23a9-4fa0-8eb6-084d1d09b2ec/T26);background-size: cover;',
                aboutRU: 'Олимпийские игры',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/3bfca7ba-d457-4e0d-b317-71a4bc793794/T27);background-size: cover;',
                aboutRU: 'Настольные игры',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/33809e6a-d633-486a-b288-421a55a9c446/shutterstock_520075894-min);background-size: cover;',
                aboutRU: 'Квесты',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/34a179fc-f3dc-4fd8-bd99-432353a0e92e/shutterstock_489646066-min);background-size: cover;',
                aboutRU: 'Научные Эксперименты',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/bdf4472f-3579-4a1f-a7a5-8ddb568a9f8c/T30);background-size: cover;',
                aboutRU: 'Академия Футбола',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/23e8d862-3cb9-460c-adde-e1247aaf6d4c/T32_1);background-size: cover;',
                aboutRU: 'Дискотека Тукан Тусейшен',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/0aeb7617-2573-4dcf-9dfd-6a2b531b71af/shutterstock_315127931-min);background-size: cover;',
                aboutRU: 'Киносеанс под открытым небом с Попкорном',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/ebfc0f3e-6a2c-48d7-b5d7-a4398923b337/shutterstock_482563132-min);background-size: cover;',
                aboutRU: 'Тематические Дни',
            },
        ],
        
    }
})



//ПРОГРАММЫ ДЕТСКИХ КЛУБОВ
const toucanProgram = new Vue ({
    el: '#toucan-programm',
    data: {
        
        titleRU : 'Программа детских клубов Мини Тукан в ОАЭ',
        
        linkRU: 'https://www.tui.ru/getmedia/f6ac0b63-9b0d-49a0-9f84-857bac7bb8b8/progamma-UAE-Toucan-Mini-2020',
        linkEE: 'https://www.tui.ru/getmedia/ef470028-6516-4557-bbe2-f66013cf08c3/EE-programm-UAE-Toucan-Mini-2020',
        linkLT: 'https://www.tui.ru/getmedia/53b1b271-ff63-4ab2-83ff-6615fdabef7c/LT-programm-UAE-Toucan-Mini-2020',
        linkLV: 'https://www.tui.ru/getmedia/e65f3cc5-873b-4d73-916b-1c9263d2b4c1/LV-program-UAE-Toucan-Mini-2020',
    }
})





//FOOTER
const toucanFooter = new Vue ({
    el: '#toucan-footer',
    data: {
        title1RU : 'Сайты о концепциях',
        title1BY : 'Сайты о концепциях',
        title1UA : 'Сайты о концепциях',
        title1EE : 'Сайты о концепциях',
        title1LT : 'Сайты о концепциях',
        title1LV : 'Сайты о концепциях',
        
        linkTitle1RU : 'Все концепции TUI',
        linkTitle2RU : 'Сайт B2b',
        linkTitle3RU : 'Сайт для клиентов',
        
        linkTitle1BY : 'Все концепции TUI',
        linkTitle2BY : 'Сайт B2b',
        linkTitle3BY : 'Сайт для клиентов',
        
        linkTitle1UA : 'Все концепции TUI',
        linkTitle2UA : 'Сайт B2b',
        linkTitle3UA : 'Сайт для клиентов',
        
        linkTitle1EE : 'Все концепции TUI',
        linkTitle2EE : 'Сайт B2b',
        linkTitle3EE : 'Сайт для клиентов',
        
        linkTitle1LT : 'Все концепции TUI',
        linkTitle2LT : 'Сайт B2b',
        linkTitle3LT : 'Сайт для клиентов',
        
        linkTitle1LV : 'Все концепции TUI',
        linkTitle2LV : 'Сайт B2b',
        linkTitle3LV : 'Сайт для клиентов',
        
        link1 : '/concepts/home/',
        link2RU : '//agent.tui.ru/',
        link2BY : '//agent.tui.by/',
        link2UA : '//agent.tui.ua/',
        link2EE : '//b2b.tuibaltics.eu/',
        link2LT : '//b2b.tuibaltics.eu/',
        link2LV : '//b2b.tuibaltics.eu/',
      
        link3RU : '//www.tui.ru/',
        link3BY : '//www.tui.by/',
        link3UA : '//www.tui.ua/',
        link3EE : '//www.tui.ee/',
        link3LT : '//www.tui.lt/',
        link3LV : '//www.tui.lv/',
        
        title2RU : 'Контакты',
        title2BY : 'Контакты',
        title2UA : 'Контакты',
        title2EE : 'Сайты о концепциях',
        title2LT : 'Сайты о концепциях',
        title2LV : 'Сайты о концепциях',
        
        telRU : '8 (495) 104-34-50',
        telLinkRU : 'tel:84951043450',
        mailRU : 'diffproduct@tui.ru',
        mailLinkRU : 'mailto:diffproduct@tui.ru', 
        
        title3RU : 'Toucan в социальных сетях',
        title3BY : 'Toucan в социальных сетях',
        title3UA : 'Toucan в социальных сетях',
        title3EE : 'Сайты о концепциях',
        title3LT : 'Сайты о концепциях',
        title3LV : 'Сайты о концепциях',
        
        instLink : '//www.instagram.com/tui_toucan',
        instLogo : 'https://www.tui.ru/getmedia/2f4194da-6feb-4717-a9b0-8c58d9f77851/logo-instagram-blue',
        
    }
})