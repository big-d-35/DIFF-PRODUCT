/*
Привет.
Ниже файл с информацией для ВСЕХ страниц TOUCAN для клиентского и агентского сайте (RU BY UA  EE LT LV)

Для того чтобы изменить информацию достаточно заменить ее в этом файле и обновить файл который лежит на сайте tui.ru \ media \ новый сайт \ концепции \ TUI Toucan \ JS \ VUE-Toucan-page.js - ВНИМАНИЕ! именно нажать на кнопку заменить, иначе придется менять ссылку на всех страницах.

Обрати внимение на название переменных в файле html, если в конце есть указание к стране (например имя оканчивается myNameRU - значит это перевод на русский, myNameEE - значит это перевод на эстонский и тп)

Также обрати внимание на название ссылок - если оканчивается на Client - значит ссылка на клиент, если Agent - значит ссылка на агенте.

Некоторые страницы в консоли могут ругаться на отсутствие некоторых элементов, это нормально, просто у нас один файл на все страницы и соответственно на некоторых страницах нет элементов с других страниц, поэтому не обращай внимание.

*/

//TOUCAN HEADER PART
const toucanHeaderPart = new Vue ({
    el : '#toucan-header-part',
    data: {
        logoLink : 'https://www.tui.ru/getmedia/eda1b56f-2532-46eb-8626-65425d799edf/TC-logo-mini-vertical',
        titleRU: 'Детский клуб Мини Тукан глазами детей и родителей:',
        titleBY: 'Детский клуб Мини Тукан глазами детей и родителей:',
        titleUA: 'Детский клуб Мини Тукан глазами детей и родителей:',
        titleEE: '',
        titleLT: '',
        titleLV: '',
        
        text1RU : 'Аниматоры, с которыми интересно',
        text2RU : 'Всё понятно, потому что говорят на русском',
        text3RU : 'Детское меню в буфете "Тукан"',
        text4RU : 'Мини-дискотека под любимые хиты',
        text5RU : 'Умные игры, которые развивают',
        text6RU : 'Любимые мультфильмы со смыслом',
        text7RU : 'Современная игровая площадка',
        
        text1BY : 'Аниматоры, с которыми интересно',
        text2BY : 'Всё понятно, потому что говорят на русском',
        text3BY : 'Детское меню в буфете "Тукан"',
        text4BY : 'Мини-дискотека под любимые хиты',
        text5BY : 'Умные игры, которые развивают',
        text6BY : 'Любимые мультфильмы со смыслом',
        text7BY : 'Современная игровая площадка',
        
        text1UA : 'Аниматоры, с которыми интересно',
        text2UA : 'Всё понятно, потому что говорят на русском',
        text3UA : 'Детское меню в буфете "Тукан"',
        text4UA : 'Мини-дискотека под любимые хиты',
        text5UA : 'Умные игры, которые развивают',
        text6UA : 'Любимые мультфильмы со смыслом',
        text7UA : 'Современная игровая площадка',
        
        text1EE : '',
        text2EE : '',
        text3EE : '',
        text4EE : '',
        text5EE : '',
        text6EE : '',
        text7EE : '',
        
        text1LT : '',
        text2LT : '',
        text3LT : '',
        text4LT : '',
        text5LT : '',
        text6LT : '',
        text7LT : '',
        
        text1LV : '',
        text2LV : '',
        text3LV : '',
        text4LV : '',
        text5LV : '',
        text6LV : '',
        text7LV : '',
        
        
        
        videoLink : 'https://www.tui.ru/getmedia/8f5429a2-487b-4807-bec3-bec1a2088a67/play',
        
    }
})

//TOUCAN MENU
const toucanMenu = new Vue ({
    el: '#toucan-menu',
    data: {
        menu1RU : 'Это Мини Тукан',
        menu1BY : 'Это Мини Тукан',
        menu1UA : 'Это Мини Тукан',
        menu1EE : '',
        menu1LT : '',
        menu1LV : '',
        
        menu2RU : 'Фишки',
        menu2BY : 'Фишки',
        menu2UA : 'Фишки',
        menu2EE : '',
        menu2LT : '',
        menu2LV : '',
        
        menu3RU : 'Отели',
        menu3BY : 'Отели',
        menu3UA : 'Отели',
        menu3EE : '',
        menu3LT : '',
        menu3LV : '',
        
        menu4RU : 'Программа развлечений',
        menu4BY : 'Программа развлечений',
        menu4UA : 'Программа развлечений',
        menu4EE : '',
        menu4LT : '',
        menu4LV : '',
        
        menu5RU : 'Перейти к бронированию',
        menu5BY : 'Перейти к бронированию',
        menu5UA : 'Перейти к бронированию',
        menu5EE : '',
        menu5LT : '',
        menu5LV : '',
        
        menu5LinkRU : 'http://b2b.tui.ru/default.php?page=search_tour&amp;',
        menu5LinkBY : 'http://b2b.tui.by/default.php?page=search_tour&amp;',
        menu5LinkUA : 'http://b2b.tui.ua/default.php?page=search_tour&amp;',
        menu5LinkEE : '',
        menu5LinkLT : '',
        menu5LinkLV : '',
    }
})

//MAIN PAGE
const mainPage = new Vue ({
    el: '#toucan-main-page',
    data: {
        titleRU : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleBY : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleUA : 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        titleEE : '',
        titleLT : '',
        titleLV : '',
        
        menu1RU: 'Веселимся с Туканом',
        menu2RU: 'В ресторане',
        menu3RU: 'Территория детства',
        
        menu1BY: 'Веселимся с Туканом',
        menu2BY: 'В ресторане',
        menu3BY: 'Территория детства',
        
        menu1UA: 'Веселимся с Туканом',
        menu2UA: 'В ресторане',
        menu3UA: 'Территория детства',
        
        menu1EE: '',
        menu2EE: '',
        menu3EE: '',
        
        menu1LT: '',
        menu2LT: '',
        menu3LT: '',
        
        menu1LV: '',
        menu2LV: '',
        menu3LV: '',
        
        //SLIDER 1
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
        ],
        
        //SLIDER 2
        keySlider2items : [
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/1c624da1-49f4-431f-a73b-17380f205648/T7);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Детское меню',
                textRU: 'Да, для наших маленьких - и очень самостоятельных путешественников есть детское меню* (не во всех отелях). Яркая детская мебель, небьющаяся посуда и большой выбор блюд: от супов до десертов. Малыш может самостоятельно составить себе меню и пообедать в кругу друзей. А, как известно, в компании с аппетитом едят даже большие привереды! * Наличие детского меню в конкретном отеле смотрите в описании на странице нужного вам отеля с Клубом Тукан.',
                
                //BY
                nameBY: 'Детское меню',
                textBY: 'Да, для наших маленьких - и очень самостоятельных путешественников есть детское меню* (не во всех отелях). Яркая детская мебель, небьющаяся посуда и большой выбор блюд: от супов до десертов. Малыш может самостоятельно составить себе меню и пообедать в кругу друзей. А, как известно, в компании с аппетитом едят даже большие привереды! * Наличие детского меню в конкретном отеле смотрите в описании на странице нужного вам отеля с Клубом Тукан.',
                
                //UA
                nameUA: 'Детское меню',
                textUA: 'Да, для наших маленьких - и очень самостоятельных путешественников есть детское меню* (не во всех отелях). Яркая детская мебель, небьющаяся посуда и большой выбор блюд: от супов до десертов. Малыш может самостоятельно составить себе меню и пообедать в кругу друзей. А, как известно, в компании с аппетитом едят даже большие привереды! * Наличие детского меню в конкретном отеле смотрите в описании на странице нужного вам отеля с Клубом Тукан.',
                
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
            
            
        ],
        
        //SLIDER 3
        keySlider3items : [
            //SLIDE
            {
                background: 'background: url(https://www.tui.ru/getmedia/d1df5210-7b9c-4c3b-bb1f-d59d57ad1dce/T9);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Открытые площадки для игр',
                textRU: 'Здесь запрещена фраза "туда нельзя" - везде можно! Игровые площадки на открытом воздухе манят качелями-каруселями-горками, зелёные лужайки словно специально созданы для игр. Все ярко, весело и безопасно!',
                
                //BY
                nameBY: 'Открытые площадки для игр',
                textBY: 'Здесь запрещена фраза "туда нельзя" - везде можно! Игровые площадки на открытом воздухе манят качелями-каруселями-горками, зелёные лужайки словно специально созданы для игр. Все ярко, весело и безопасно!',
                
                //UA
                nameUA: 'Открытые площадки для игр',
                textUA: 'Здесь запрещена фраза "туда нельзя" - везде можно! Игровые площадки на открытом воздухе манят качелями-каруселями-горками, зелёные лужайки словно специально созданы для игр. Все ярко, весело и безопасно!',
                
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
                background: 'background: url(https://www.tui.ru/getmedia/ac46be1b-d7f2-4b9c-be0c-2e789948fba5/T10);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Детские бассейны',
                textRU: 'Какой же отдых без игр на воде? А за безопасность и развлечения будут отвечать наши профессиональные аниматоры.',
                
                //BY
                nameBY: 'Детские бассейны',
                textBY: 'Какой же отдых без игр на воде? А за безопасность и развлечения будут отвечать наши профессиональные аниматоры.',
                
                //UA
                nameUA: 'Детские бассейны',
                textUA: 'Какой же отдых без игр на воде? А за безопасность и развлечения будут отвечать наши профессиональные аниматоры.',
                
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
                background: 'background: url(https://www.tui.ru/getmedia/c6d2a9fa-4436-45bc-8466-1a537c380248/T11_3);background-position: center;background-size: cover',
                
                //RU
                nameRU: 'Клубные комнаты',
                textRU: 'Сама атмосфера комнат клуба настраивает на веселье и любознательность: яркая, удобная мебель, наборы для творчества и настольные игры, широкие экраны с захватывающими мультиками.',
                
                //BY
                nameBY: 'Клубные комнаты',
                textBY: 'Сама атмосфера комнат клуба настраивает на веселье и любознательность: яркая, удобная мебель, наборы для творчества и настольные игры, широкие экраны с захватывающими мультиками.',
                
                //UA
                nameUA: 'Клубные комнаты',
                textUA: 'Сама атмосфера комнат клуба настраивает на веселье и любознательность: яркая, удобная мебель, наборы для творчества и настольные игры, широкие экраны с захватывающими мультиками.',
                
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
        ],
        
        title2RU : 'Новые отели с Детским клубом МИНИ ТУКАН в ОАЭ',
        title2BY : 'Новые отели с Детским клубом МИНИ ТУКАН в ОАЭ',
        title2UA : 'Новые отели с Детским клубом МИНИ ТУКАН в ОАЭ',
        title2EE : '',
        title2LT : '',
        title2LV : '',
        
        text2RU : 'Детский клуб Мини Тукан в отелях  ',
        text2_1RU : ' в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        
        text2BY : 'Детский клуб Мини Тукан в отелях  ',
        text2_1BY : ' в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        
        text2UA : 'Детский клуб Мини Тукан в отелях  ',
        text2_1UA : ' в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        
        
        
        text2EE : '',
        text2LT : '',
        text2LV : '',
        
        title3RU : 'Отели с Мини Туканом в Испании:',
        title3BY : 'Отели с Мини Туканом в Испании:',
        title3UA : 'Отели с Мини Туканом в Испании:',
        title3EE : '',
        title3LT : '',
        title3LV : '',
        
        hotel1Link : '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
        hotel1Name : 'Estival Park Hotel Resort 4*',
        hotel1PlaceRU : '(Коста-Дорада) и',
        hotel1PlaceBY : '(Коста-Дорада) и',
        hotel1PlaceUA : '(Коста-Дорада) и',
        hotel1PlaceEE : '',
        hotel1PlaceLT : '',
        hotel1PlaceLV : '',
        
        hotel2Link : '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Don-Juan-Tossa',
        hotel2Name : 'Don Juan Tossa 4*',
        hotel2PlaceRU : '(Тосса-де-Мар)',
        hotel2PlaceBY : '(Тосса-де-Мар)',
        hotel2PlaceUA : '(Тосса-де-Мар)',
        hotel2PlaceEE : '',
        hotel2PlaceLT : '',
        hotel2PlaceLV : '',
        
        dopInfo1Hotels : [
          { 
            itemRU : 'Концепция "Тукан-путешественник" ― увлекательные приключения в разных странах',
            itemBY : 'Концепция "Тукан-путешественник" ― увлекательные приключения в разных странах',
            itemUA : 'Концепция "Тукан-путешественник" ― увлекательные приключения в разных странах',
            itemEE : '',
            itemLT : '',
            itemLV : '',
          },
          
          {
            itemRU : 'Программа на русском языке для детей двух возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет',
            itemBY : 'Программа на русском языке для детей двух возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет',
            itemUA : 'Программа на русском языке для детей двух возрастов: Тукан Kids 4-7 лет и Тукан Junior 8-12 лет',
            itemEE : '',
            itemLT : '',
            itemLV : '',
          },
            
          { 
            itemRU : 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
            itemBY : 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
            itemUA : 'Клуб работает 6 дней в неделю, с 10-00 до 12-30, с 14-30 до 17-00.',
            itemEE : '',
            itemLT : '',
            itemLV : '',
          }, 
            
          { 
            itemRU : 'Вечером ― мини-диско',
            itemBY : 'Вечером ― мини-диско',
            itemUA : 'Вечером ― мини-диско',
            itemEE : '',
            itemLT : '',
            itemLV : '',
          },     
        ],
        
        
        
        title4RU : 'Отель с Мини Туканом в Италии:',
        title4BY : 'Отель с Мини Туканом в Италии:',
        title4UA : 'Отель с Мини Туканом в Италии:',
        title4EE : '',
        title4LT : '',
        title4LV : '',
        
        hotel3Link : '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
        hotel3Name : 'Garden Resort Calabria 4*',
        hotel3PlaceRU : '(Калабрия, Пиццо)',
        hotel3PlaceBY : '(Калабрия, Пиццо)',
        hotel3PlaceUA : '(Калабрия, Пиццо)',
        hotel3PlaceEE : '',
        hotel3PlaceLT : '',
        hotel3PlaceLV : '',
        
        title5RU : 'Программа "ПУТЕШЕСТВИЯ С ТУКАНОМ"',
        title5BY : 'Программа "ПУТЕШЕСТВИЯ С ТУКАНОМ"',
        title5UA : 'Программа "ПУТЕШЕСТВИЯ С ТУКАНОМ"',
        title5EE : '',
        title5LT : '',
        title5LV : '',
        
        blockImage1 : 'https://www.tui.ru/getmedia/3de701d3-6c76-4030-bf82-6d970e067908/shutterstock_1070343977-min',
        
        text3RU : 'Детский клуб Мини Тукан в отелях Al Hamra Residence 5 и Al Hamra Village Golf & Beach Resort 4 в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        text3BY : 'Детский клуб Мини Тукан в отелях Al Hamra Residence 5 и Al Hamra Village Golf & Beach Resort 4 в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        text3UA : 'Детский клуб Мини Тукан в отелях Al Hamra Residence 5 и Al Hamra Village Golf & Beach Resort 4 в Рас-Эль-Хайма, ОАЭ начнет работу в этом году с 20 октября.',
        text3EE : '',
        text3LT : '',
        text3LV : '',
        
        text4RU : 'Период работы Детского клуба в отелях:',
        text4BY : 'Период работы Детского клуба в отелях:',
        text4UA : 'Период работы Детского клуба в отелях:',
        text4EE : '',
        text4LT : '',
        text4LV : '',
        
        text5RU : 'График работы детского клуба, 6 дней в неделю: ',
        text5BY : 'График работы детского клуба, 6 дней в неделю:',
        text5UA : 'График работы детского клуба, 6 дней в неделю:',
        text5EE : '',
        text5LT : '',
        text5LV : '',
        
        time0 : '',
        time1 : '10.00 -13.00',
        time2 : '15.00 – 18.00',
        time3 : '20.00 – 22.00',
        
        text6RU : 'Garden Resort Calabria (ex. Valtur Garden) 4*: с 1 июня по 30 сентября 2019 года',
        text6BY : 'Garden Resort Calabria (ex. Valtur Garden) 4*: с 1 июня по 30 сентября 2019 года',
        text6UA : 'Garden Resort Calabria (ex. Valtur Garden) 4*: с 1 июня по 30 сентября 2019 года',
        text6EE : '',
        text6LT : '',
        text6LV : '',
        
        text7RU : 'Рас-Аль-Хайм, ОАЭ',
        text7BY : 'Рас-Аль-Хайм, ОАЭ',
        text7UA : 'Рас-Аль-Хайм, ОАЭ',
        text7EE : '',
        text7LT : '',
        text7LV : '',
        
        hotel4Name: 'Al Hamra Residence 5',
        hotel4LinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
        hotel4LinkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__residence/',
        
        hotel5Name: 'Al Hamra Village Golf & Beach Resort 4',
        hotel5LinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-village-golf-beach-resort',
        hotel5LinkClient: '/hotel/asia-uae-ras__al__khaimah-ras__al__khaimah__beach__hotels-al__hamra__village__golf__beach__resort/',
        
        
        text8RU : '  - с 20 октября',
        text8BY : '  - с 20 октября',
        text8UA : '  - с 20 октября',
        text8EE : '',
        text8LT : '',
        text8LV : '',
        
        text9RU : '  - с 20 октября',
        text9BY : '  - с 20 октября',
        text9UA : '  - с 20 октября',
        text9EE : '',
        text9LT : '',
        text9LV : '',
        
        text10RU : 'Есть вопросы? Пишите на почту ',
        text10BY : 'Есть вопросы? Пишите на почту ',
        text10UA : 'Есть вопросы? Пишите на почту ',
        text10EE : '',
        text10LT : '',
        text10LV : '',
        
        mailRU: 'diffproduct@tui.ru',
        mailRULink : 'mailto:diffproduct@tui.ru',
        mailBY: 'diffproduct@tui.ru',
        mailBYLink : 'mailto:diffproduct@tui.ru',
        mailUA: 'diffproduct@tui.ua',
        mailUALink : 'mailto:diffproduct@tui.ua',
        mailEE: 'diffproduct@tui.ru',
        mailEELink : 'mailto:diffproduct@tui.ru',
        mailLT: 'diffproduct@tui.ru',
        mailLTLink : 'mailto:diffproduct@tui.ru',
        mailLV: 'diffproduct@tui.ru',
        mailLVLink : 'mailto:diffproduct@tui.ru',
        
        text11RU : ' и мы вам оперативно ответим. ',
        text11BY : ' и мы вам оперативно ответим. ',
        text11UA : ' и мы вам оперативно ответим. ',
        text11EE : '',
        text11LT : '',
        text11LV : '',
        
        text12RU : 'Мероприятия, которые войдут в развлекательную программу детского клуба Мини Тукан: ',
        text12BY : 'Мероприятия, которые войдут в развлекательную программу детского клуба Мини Тукан: ',
        text12UA : 'Мероприятия, которые войдут в развлекательную программу детского клуба Мини Тукан: ',
        text12EE : '',
        text12LT : '',
        text12LV : '',
        
        text12SpisokItems : [
            {
              itemRU : 'Квесты для детей',  
              itemBY : 'Квесты для детей',  
              itemUA : 'Квесты для детей',  
              itemEE : '',  
              itemLT : '',  
              itemLV : '',  
            },
            {
              itemRU : 'Игры на улице, в бассейне и на море',  
              itemBY : 'Игры на улице, в бассейне и на море',  
              itemUA : 'Игры на улице, в бассейне и на море',  
              itemEE : '',  
              itemLT : '',  
              itemLV : '',  
            },
            {
              itemRU : 'Мастер-классы и творческие активности',  
              itemBY : 'Мастер-классы и творческие активности',  
              itemUA : 'Мастер-классы и творческие активности',  
              itemEE : '',  
              itemLT : '',  
              itemLV : '',  
            },
            {
              itemRU : 'Вечером: мини-диско, интерактивные игры, аквагрим',  
              itemBY : 'Вечером: мини-диско, интерактивные игры, аквагрим',  
              itemUA : 'Вечером: мини-диско, интерактивные игры, аквагрим',  
              itemEE : '',  
              itemLT : '',  
              itemLV : '',  
            },
            {
              itemRU : 'Мини-диско в бассейне 2 раза в неделю',  
              itemBY : 'Мини-диско в бассейне 2 раза в неделю',  
              itemUA : 'Мини-диско в бассейне 2 раза в неделю',  
              itemEE : '',  
              itemLT : '',  
              itemLV : '',  
            },
            {
              itemRU : 'Семейные дискотеки',  
              itemBY : 'Семейные дискотеки',  
              itemUA : 'Семейные дискотеки',  
              itemEE : '',  
              itemLT : '',  
              itemLV : '',  
            },
        ],
        
        button1RU : 'Выбрать отель',
        button1BY : 'Выбрать отель',
        button1UA : 'Выбрать отель',
        button1EE : '',
        button1LT : '',
        button1LV : '',
        
    }
})





//РАЗВЛЕКАТЕЛЬНАЯ ПРОГРАММА

const toucanPartyProgram = new Vue ({
    el: '#toucan-party-program',
    data: {
        titleRU: 'Развлекательная программа',
        menu1RU : 'Для детей 4-12 лет', 
        
        titleBY: 'Развлекательная программа',
        menu1BY : 'Для детей 4-12 лет', 
        
        titleUA: 'Развлекательная программа',
        menu1UA : 'Для детей 4-12 лет', 
        
        titleEE: '',
        menu1EE : '', 
        
        titleLT: '',
        menu1LT : '', 
        
        titleLV: '',
        menu1LV : '', 
        
        slider1items : [
            {
                background : 'background: url(https://www.tui.ru/getmedia/ec359478-34a7-499d-a958-18e33be583de/T23);background-size: cover;',
                aboutRU: 'Утренняя зарядка / йога /',
                aboutBY: 'Утренняя зарядка / йога /',
                aboutUA: 'Утренняя зарядка / йога /',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/8fa60090-1fc6-49a5-8914-c57c7f089754/T24);background-size: cover;',
                aboutRU: 'Академия плавания',
                aboutBY: 'Академия плавания',
                aboutUA: 'Академия плавания',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
            /*{
                background : 'background: url(https://www.tui.ru/getmedia/9380d2e8-787c-4bad-b236-c0ee3eefa764/T25);background-size: cover;',
                aboutRU: 'Поиск сокровищ',
                aboutBY: 'Поиск сокровищ',
                aboutUA: 'Поиск сокровищ',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/2c69d3df-23a9-4fa0-8eb6-084d1d09b2ec/T26);background-size: cover;',
                aboutRU: 'Олимпийские игры',
                aboutBY: 'Олимпийские игры',
                aboutUA: 'Олимпийские игры',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },*/
            {
                background : 'background: url(https://www.tui.ru/getmedia/3bfca7ba-d457-4e0d-b317-71a4bc793794/T27);background-size: cover;',
                aboutRU: 'Настольные игры',
                aboutBY: 'Настольные игры',
                aboutUA: 'Настольные игры',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/33809e6a-d633-486a-b288-421a55a9c446/shutterstock_520075894-min);background-size: cover;',
                aboutRU: 'Квесты',
                aboutBY: 'Квесты',
                aboutUA: 'Квесты',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
            /*{
                background : 'background: url(https://www.tui.ru/getmedia/34a179fc-f3dc-4fd8-bd99-432353a0e92e/shutterstock_489646066-min);background-size: cover;',
                aboutRU: 'Научные Эксперименты',
                aboutBY: 'Научные Эксперименты',
                aboutUA: 'Научные Эксперименты',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/bdf4472f-3579-4a1f-a7a5-8ddb568a9f8c/T30);background-size: cover;',
                aboutRU: 'Академия Футбола',
                aboutBY: 'Академия Футбола',
                aboutUA: 'Академия Футбола',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },*/
            {
                background : 'background: url(https://www.tui.ru/getmedia/23e8d862-3cb9-460c-adde-e1247aaf6d4c/T32_1);background-size: cover;',
                aboutRU: 'Дискотека Тукан Тусейшен',
                aboutBY: 'Дискотека Тукан Тусейшен',
                aboutUA: 'Дискотека Тукан Тусейшен',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/0aeb7617-2573-4dcf-9dfd-6a2b531b71af/shutterstock_315127931-min);background-size: cover;',
                aboutRU: 'Киносеанс под открытым небом с Попкорном',
                aboutBY: 'Киносеанс под открытым небом с Попкорном',
                aboutUA: 'Киносеанс под открытым небом с Попкорном',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
            {
                background : 'background: url(https://www.tui.ru/getmedia/ebfc0f3e-6a2c-48d7-b5d7-a4398923b337/shutterstock_482563132-min);background-size: cover;',
                aboutRU: 'Тематические Дни',
                aboutBY: 'Тематические Дни',
                aboutUA: 'Тематические Дни',
                aboutEE: '',
                aboutLT: '',
                aboutLV: '',
            },
        ],
        
    }
})



//ПРОГРАММЫ ДЕТСКИХ КЛУБОВ
const toucanProgram = new Vue ({
    el: '#toucan-programm',
    data: {
        
        titleRU : 'Программа детских клубов Мини Тукан в ОАЭ',
        titleBY : 'Программа детских клубов Мини Тукан в ОАЭ',
        titleUA : 'Программа детских клубов Мини Тукан в ОАЭ',
        titleEE : '',
        titleLT : '',
        titleLV : '',
        
        linkRU: 'https://www.tui.ru/getmedia/f6ac0b63-9b0d-49a0-9f84-857bac7bb8b8/progamma-UAE-Toucan-Mini-2020',
        linkEE: 'https://www.tui.ru/getmedia/ef470028-6516-4557-bbe2-f66013cf08c3/EE-programm-UAE-Toucan-Mini-2020',
        linkLT: 'https://www.tui.ru/getmedia/53b1b271-ff63-4ab2-83ff-6615fdabef7c/LT-programm-UAE-Toucan-Mini-2020',
        linkLV: 'https://www.tui.ru/getmedia/e65f3cc5-873b-4d73-916b-1c9263d2b4c1/LV-program-UAE-Toucan-Mini-2020',
    }
})

const toucanFishka = new Vue ({
    el: '#fishka',
    data: {
        logoLink: 'https://www.tui.ru/getmedia/eda1b56f-2532-46eb-8626-65425d799edf/TC-logo-mini-vertical',
        titleRU: 'Детские клубы МИНИ ТУКАН',
        titleBY: 'Детские клубы МИНИ ТУКАН',
        titleUA: 'Детские клубы МИНИ ТУКАН',
        titleEE: '',
        titleLT: '',
        titleLV: '',
    }
})

//ТУКАН СПОРТИВНЫЕ РАЗВЛЕЧЕНИЯ
const toucanEntProgramm = new Vue ({
    el: '#toucan-ent-programm',
    data: {
        titleRU : 'Расписание спортивных занятий и развлечений',
        titleBY : 'Расписание спортивных занятий и развлечений',
        titleUA : 'Расписание спортивных занятий и развлечений',
        titleEE : '',
        titleLT : '',
        titleLV : '',
        
        
        //MENU ITEM 1
        menu1RU : 'Все',
        menu1BY : 'Все',
        menu1UA : 'Все',
        menu1EE : '',
        menu1LT : '',
        menu1LV : '',
        
        //MENU ITEM 2
        menu2RU : 'Спорт и активности',
        menu2BY : 'Спорт и активности',
        menu2UA : 'Спорт и активности',
        menu2EE : '',
        menu2LT : '',
        menu2LV : '',
        
        //MENU ITEM 3
        menu3RU : 'Игровые активности',
        menu3BY : 'Игровые активности',
        menu3UA : 'Игровые активности',
        menu3EE : '',
        menu3LT : '',
        menu3LV : '',
        
        //MENU ITEM 4
        menu4RU : 'Творческие активности',
        menu4BY : 'Творческие активности',
        menu4UA : 'Творческие активности',
        menu4EE : '',
        menu4LT : '',
        menu4LV : '',
        
        //MENU ITEM 5
        menu5RU : 'Вечерняя программа',
        menu5BY : 'Вечерняя программа',
        menu5UA : 'Вечерняя программа',
        menu5EE : '',
        menu5LT : '',
        menu5LV : '',
        
        //SLIDER 2
        slider2Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/0269798c-1f79-4a5f-9c12-83ab8b925cb5/b_1-1)',
                nameRU : 'Детская Йога, степ и танцевальная аэробика.',
                nameBY : 'Детская Йога, степ и танцевальная аэробика.',
                nameUA : 'Детская Йога, степ и танцевальная аэробика.',
                nameEE : '',
                nameLT : '',
                nameLV : '',
                
               
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5ccd74da-fab0-42f1-883c-5634fffc6879/b_1-2)',
                nameRU : 'Танцевальная академия',
                nameBY : 'Танцевальная академия',
                nameUA : 'Танцевальная академия',
                nameEE : '',
                nameLT : '',
                nameLV : '',
                
               
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5435a85d-ae41-4cb4-bbee-d6dd0e818123/b_1-3)',
                nameRU : 'Спортивные состязания',
                nameBY : 'Спортивные состязания',
                nameUA : 'Спортивные состязания',
                nameEE : '',
                nameLT : '',
                nameLV : '',
                
                
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/41681cb7-bf25-4fdb-945c-06031be67beb/b_1-4)',
                nameRU : 'Олимпийские игры',
                nameBY : 'Олимпийские игры',
                nameUA : 'Олимпийские игры',
                nameEE : '',
                nameLT : '',
                nameLV : '',
                
                
            },
        ],
        
        //SLIDER 3
        slider3Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/93c27b48-cba9-44d3-8264-c0f41bfb8ca1/b_1-5)',
                nameRU : 'Тематические дни',
                nameBY : 'Тематические дни',
                nameUA : 'Тематические дни',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/d3257527-5606-4b02-8de1-949a813d8180/b_1-6)',
                nameRU : 'Игры-квесты',
                nameBY : 'Игры-квесты',
                nameUA : 'Игры-квесты',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/4187a64e-3bcc-4a0a-bd6e-0ae214a2b55c/b_1-7)',
                nameRU : 'Творческая мастерская Тукана',
                nameBY : 'Творческая мастерская Тукана',
                nameUA : 'Творческая мастерская Тукана',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/a610c95a-6556-442f-ad1b-ce9897f49229/b_1-8)',
                nameRU : 'Игры в бассейне',
                nameBY : 'Игры в бассейне',
                nameUA : 'Игры в бассейне',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/503f3677-def2-472c-bc5a-5703267e989b/b_1-9)',
                nameRU : 'Сюжетно-ролевые игры',
                nameBY : 'Сюжетно-ролевые игры',
                nameUA : 'Сюжетно-ролевые игры',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/6d9adec7-92e4-41e2-bb6a-dd9c4bccbdb2/b_1-10)',
                nameRU : 'Аквагрим',
                nameBY : 'Аквагрим',
                nameUA : 'Аквагрим',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5ea58479-6dd6-4e1e-b6e4-61286e8b482f/b_1-11)',
                nameRU : 'Тукан коктейль',
                nameBY : 'Тукан коктейль',
                nameUA : 'Тукан коктейль',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/19b71da6-c781-4712-b09d-f85445c67861/tab2-4)',
                nameRU : 'Научные эксперименты',
                nameBY : 'Научные эксперименты',
                nameUA : 'Научные эксперименты',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/276b4c71-b9d2-4c30-b098-602017c813da/b_1-12)',
                nameRU : 'Мыльные пузыри',
                nameBY : 'Мыльные пузыри',
                nameUA : 'Мыльные пузыри',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/28333cd6-daea-4e8a-ab2f-37e1d3cbb009/b_1-13)',
                nameRU : 'День рождения Тукана',
                nameBY : 'День рождения Тукана',
                nameUA : 'День рождения Тукана',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
        ],
        
        //SLIDER 4
        slider4Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/4187a64e-3bcc-4a0a-bd6e-0ae214a2b55c/b_1-7)',
                nameRU : 'Творческая мастерская Тукана',
                nameBY : 'Творческая мастерская Тукана',
                nameUA : 'Творческая мастерская Тукана',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/459613e1-4b25-40fe-a50c-1a16bbd79bea/b_1-14)',
                nameRU : 'Воздушный змей',
                nameBY : 'Воздушный змей',
                nameUA : 'Воздушный змей',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/67c7c714-0727-4910-ac4f-12522756c8a6/b_1-15)',
                nameRU : 'Эко творчество',
                nameBY : 'Эко творчество',
                nameUA : 'Эко творчество',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/8f756b7a-1bee-484c-b2ff-1eb21692fb98/b_1-16)',
                nameRU : 'Рисование на камнях',
                nameBY : 'Рисование на камнях',
                nameUA : 'Рисование на камнях',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
        ],
        
        //SLIDER 5
        slider5Slides : [
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/2eadb0bb-432d-4cd3-9a4a-4f4944f3300a/b_1-17)',
                nameRU : 'Мини диско',
                nameBY : 'Мини диско',
                nameUA : 'Мини диско',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/b9437385-3913-4bf4-b10b-531c1d31d7b6/b_1-18)',
                nameRU : '"Tукан Тусейшн"',
                nameBY : '"Tукан Тусейшн"',
                nameUA : '"Tукан Тусейшн"',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/876e8f93-ed28-46fd-8322-88ae673192ab/no-img);background-size:cover;background-position: center;',
                nameRU : 'Тематические фестивали',
                nameBY : 'Тематические фестивали',
                nameUA : 'Тематические фестивали',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/03ca4ee6-0ac2-4cde-a2da-b69a5339e289/b_1-19)',
                nameRU : 'Кинопоказы на открытом воздухе',
                nameBY : 'Кинопоказы на открытом воздухе',
                nameUA : 'Кинопоказы на открытом воздухе',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/5f5c2df6-09e4-4f0b-b98c-875c7c669790/b_1-20)',
                nameRU : 'Тукан "Голос"',
                nameBY : 'Тукан "Голос"',
                nameUA : 'Тукан "Голос"',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
            
            //SLIDE
            {
                background : 'background: url(https://www.tui.ru/getmedia/2e233e2b-c533-47eb-88d6-58f692729240/b_1-21)',
                nameRU : 'Латинская вечеринка',
                nameBY : 'Латинская вечеринка',
                nameUA : 'Латинская вечеринка',
                nameEE : '',
                nameLT : '',
                nameLV : '',
            },
        ],
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
        
        linkTitle1RU : 'Все концепции ',
        linkTitle2RU : 'Сайт B2b',
        linkTitle3RU : 'Сайт для клиентов',
        
        linkTitle1BY : 'Все концепции ',
        linkTitle2BY : 'Сайт B2b',
        linkTitle3BY : 'Сайт для клиентов',
        
        linkTitle1UA : 'Все концепции ',
        linkTitle2UA : 'Сайт B2b',
        linkTitle3UA : 'Сайт для клиентов',
        
        linkTitle1EE : '',
        linkTitle2EE : '',
        linkTitle3EE : '',
        
        linkTitle1LT : '',
        linkTitle2LT : '',
        linkTitle3LT : '',
        
        linkTitle1LV : '',
        linkTitle2LV : '',
        linkTitle3LV : '',
        
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
        title2EE : '',
        title2LT : '',
        title2LV : '',
        
        telRU : '8 (495) 104-34-50',
        telLinkRU : 'tel:84951043450',
        mailRU : 'diffproduct@tui.ru',
        mailLinkRU : 'mailto:diffproduct@tui.ru',
        
        telBY : '+375 17 316 90 74',
        telLinkBY : 'tel:+375173169074',
        mailBY : 'diffproduct@tui.ru',
        mailLinkBY : 'mailto:diffproduct@tui.ru',
        
        telUA : '+380 044 401 08 08',
        telLinkUA : 'tel:+3800444010808',
        mailUA : 'diffproduct@tui.ua',
        mailLinkUA : 'mailto:diffproduct@tui.ua',
        
        telEE : '',
        telLinkEE : 'tel:',
        mailEE : '',
        mailLinkEE : 'mailto:',
        
        telLT : '',
        telLinkLT : 'tel:',
        mailLT : '',
        mailLinkLT : 'mailto:',
        
        telLV : '',
        telLinkLV : 'tel:',
        mailLV : '',
        mailLinkLV : 'mailto:',
        
        title3RU : 'Toucan в социальных сетях',
        title3BY : 'Toucan в социальных сетях',
        title3UA : 'Toucan в социальных сетях',
        title3EE : '',
        title3LT : '',
        title3LV : '',
        
        instLink : '//www.instagram.com/tui_toucan',
        instLogo : 'https://www.tui.ru/getmedia/2f4194da-6feb-4717-a9b0-8c58d9f77851/logo-instagram-blue',
        
    }
})