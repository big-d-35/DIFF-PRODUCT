/*
Привет.
Ниже файл с информацией для ВСЕХ страниц TOUCAN для клиентского и агентского сайте (EE LT LV )

Для того чтобы изменить информацию достаточно заменить ее в этом файле и обновить файл который лежит на сайте tui.ru \ media \ новый сайт \ концепции \ TUI Toucan \ files \ VUE-Toucan-hot-hotels-ru-by-ua.js - ВНИМАНИЕ! именно нажать на кнопку заменить, иначе придется менять ссылку на всех страницах.

Обрати внимение на название переменных в файле html, если в конце есть указание к стране (например имя оканчивается myNameRU - значит это перевод на русский, myNameEE - значит это перевод на эстонский и тп)

Также обрати внимание на название ссылок - если оканчивается на Client - значит ссылка на клиент, если Agent - значит ссылка на агенте.

Некоторые страницы в консоли могут ругаться на отсутствие некоторых элементов, это нормально, просто у нас один файл на все страницы и соответственно на некоторых страницах нет элементов с других страниц, поэтому не обращай внимание.

*/

const toucanHotHotels = new Vue ({
    el: '#hotels-toucan',
    data: {
        titleEE: 'MINI TOUCAN LASTEKLUBID',
        titleLT: 'MINI TOUCAN VAIKŲ KLUBAI',
        titleLV: 'BĒRNU KLUBI MINI TOUCAN',
        
        //RU 
        country1EE: 'Турция',
        country2EE: 'Кипр',
        country3EE: 'Черногория',
        country4EE: 'Италия',
        country5EE: 'Испания',
        country6EE: 'Россия',
        country7EE: 'ОАЭ',
        
        //LT 
        country1LT: 'Турция',
        country2LT: 'Кипр',
        country3LT: 'Черногория',
        country4LT: 'Италия',
        country5LT: 'Испания',
        country6LT: 'Россия',
        country7LT: 'ОАЭ',
        
        //LV 
        country1LV: 'TURCIJA',
        country2LV: 'KIPRA',
        country3LV: 'Черногория',
        country4LV: 'Италия',
        country5LV: 'SPĀNIJA',
        country6LV: 'Россия',
        country7LV: 'OAE',
        
        //HOTELS 1 ТУРЦИЯ
        country1Hotels : [
            //HOTEL
            {
                hotelName : 'Pegasos Club 4*',
                background: 'background: url(https://www.tui.ru/getmedia/960b240d-2407-4940-8d3e-247396f9eb4a/T12_hotel_Pegasos-Club);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Club',
                
                //EE
                countryNameEE: 'Турция, Инджекум',
                aboutHotelEEItems: [
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Турция, Инджекум',
                aboutHotelLTItems: [
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Турция, Инджекум',
                aboutHotelLVItems: [
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Pegasos Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/78cdee2e-c69d-435e-ade3-94320e66a3f3/T13_Hotel_PegasosResort);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Resort',
                
                //EE
                countryNameEE: 'Турция, Инджекум',
                aboutHotelEEItems: [
                    { item: 'Фешенебельный отельный комплекс' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Турция, Инджекум',
                aboutHotelLTItems: [
                    { item: 'Фешенебельный отельный комплекс' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Турция, Инджекум',
                aboutHotelLVItems: [
                    { item: 'Фешенебельный отельный комплекс' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Pegasos Royal 5*',
                background: 'background: url(https://www.tui.ru/getmedia/9a66b6c3-5dfc-4913-99ae-2d5fa8c4f70f/T14_Hotel_Pegasos-Royal);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Alanya/Incekum/Pegasos-Royal',
                
                //EE
                countryNameEE: 'Турция, Инджекум',
                aboutHotelEEItems: [
                    { item: 'Высокий уровень обслуживания' },
                    { item: 'Двухкомнатные номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'Аквапарк' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Турция, Инджекум',
                aboutHotelLTItems: [
                    { item: 'Высокий уровень обслуживания' },
                    { item: 'Двухкомнатные номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'Аквапарк' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Турция, Инджекум',
                aboutHotelLVItems: [
                    { item: 'Высокий уровень обслуживания' },
                    { item: 'Двухкомнатные номера' },
                    { item: 'Песчаный пляж' },
                    { item: 'Пологий вход в море' },
                    { item: 'Открытые и крытые бассейны' },
                    { item: 'Аквапарк' },
                    { item: 'SPA' },
                    { item: 'Бесплатно надувные аттракционы в море' },
                    { item: 'Free Wi-Fi (на территории)' }
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Kilikya Resort Camyuva 5*',
                background: 'background: url(https://www.tui.ru/getmedia/2e390b7d-5b2a-4434-9933-5c3749992bed/f_Kilikya-Resort-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Turkey/Kemer/Camyuva/Kilikya-Resort-Camyuva',
                
                //EE
                countryNameEE: 'Турция, Кемер',
                aboutHotelEEItems: [
                    { item: 'низкая ценовая категория' },
                    { item: 'пляж, отмеченный Голубым флагом' },
                    { item: 'прокат велосипедов (платно)' },
                    { item: 'бесплатный Wi-Fi в библиотеке' },
                    { item: 'круглосуточный бар' }
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Турция, Кемер',
                aboutHotelLTItems: [
                    { item: 'низкая ценовая категория' },
                    { item: 'пляж, отмеченный Голубым флагом' },
                    { item: 'прокат велосипедов (платно)' },
                    { item: 'бесплатный Wi-Fi в библиотеке' },
                    { item: 'круглосуточный бар' }
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Турция, Кемер',
                aboutHotelLVItems: [
                    { item: 'низкая ценовая категория' },
                    { item: 'пляж, отмеченный Голубым флагом' },
                    { item: 'прокат велосипедов (платно)' },
                    { item: 'бесплатный Wi-Fi в библиотеке' },
                    { item: 'круглосуточный бар' }
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
        ],
        
        //HOTELS 2 АНДОРРА
        country2Hotels : [
            //HOTEL
            {
                hotelName : 'Andorra Center 4*',
                background: 'background: url(https://www.tui.ru/getmedia/cd352184-64b1-4c27-aa64-af2f947fd8b8/T17_Hotel_Andorra-Center);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Andorra-La-Vella/Andorra-Center',
                
                //EE
                countryNameEE: 'Андорра, Грандвалира',
                aboutHotelEEItems: [
                    { item: 'Центр города Андорра-Ла-Велья' },
                    { item: 'Расположен в живописном месте' },
                    { item: 'SPA (бесплатно)' },
                    { item: 'Крытый бассейн' },
                    { item: 'Free WI-FI (в номерах)' },
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Андорра, Грандвалира',
                aboutHotelLTItems: [
                    { item: 'Центр города Андорра-Ла-Велья' },
                    { item: 'Расположен в живописном месте' },
                    { item: 'SPA (бесплатно)' },
                    { item: 'Крытый бассейн' },
                    { item: 'Free WI-FI (в номерах)' },
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Андорра, Грандвалира',
                aboutHotelLVItems: [
                    { item: 'Центр города Андорра-Ла-Велья' },
                    { item: 'Расположен в живописном месте' },
                    { item: 'SPA (бесплатно)' },
                    { item: 'Крытый бассейн' },
                    { item: 'Free WI-FI (в номерах)' },
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'La Mola 2*',
                background: 'background: url(https://www.tui.ru/getmedia/200bf094-a279-43ce-9638-2dc53ca0fafd/T18_Hotel_La-Mola);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Escaldes/Mola-Park-Atiram',
                
                //EE
                countryNameEE: 'Андорра, Грандвалира',
                aboutHotelEEItems: [
                    { item: 'Недалеко от центра Энкампа' },
                    { item: 'Близость к подъемнику' },
                    { item: 'Free WI-FI (в лобби)' },
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Андорра, Грандвалира',
                aboutHotelLTItems: [
                    { item: 'Недалеко от центра Энкампа' },
                    { item: 'Близость к подъемнику' },
                    { item: 'Free WI-FI (в лобби)' },
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Андорра, Грандвалира',
                aboutHotelLVItems: [
                    { item: 'Недалеко от центра Энкампа' },
                    { item: 'Близость к подъемнику' },
                    { item: 'Free WI-FI (в лобби)' },
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Cosmos Andorra 3*',
                background: 'background: url(https://www.tui.ru/getmedia/1cd99d92-6811-42e2-977b-f3902aff35f0/T19_Hotel_Cosmos-Andorra);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Andorra/grandvalira/Andorra-La-Vella/Cosmos-Andorra',
                
                //EE
                countryNameEE: 'Андорра, Грандвалира',
                aboutHotelEEItems: [
                    { item: 'Расположен в центре Эскальдес' },
                    { item: 'В 400 м от термального комплекса Кальдеа' },
                    { item: 'Стандартные номера и апартаменты' },
                    { item: 'Free WI-FI (в номерах)' },
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Андорра, Грандвалира',
                aboutHotelLTItems: [
                    { item: 'Расположен в центре Эскальдес' },
                    { item: 'В 400 м от термального комплекса Кальдеа' },
                    { item: 'Стандартные номера и апартаменты' },
                    { item: 'Free WI-FI (в номерах)' },
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Андорра, Грандвалира',
                aboutHotelLVItems: [
                    { item: 'Расположен в центре Эскальдес' },
                    { item: 'В 400 м от термального комплекса Кальдеа' },
                    { item: 'Стандартные номера и апартаменты' },
                    { item: 'Free WI-FI (в номерах)' },
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
        ],
        
        //HOTELS 3 КИПР
        country3Hotels : [
            //HOTEL
            {
                hotelName : 'Christofinia 4*',
                background: 'background: url(https://www.tui.ru/getmedia/2f97eb45-b78e-4f46-9312-3f6d6216d10c/T20_Hotel_Christofinia);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Ayia-Napa/Ayia-Napa/Christofinia/',
                
                //EE
                countryNameEE: 'Кипр, Айя-Напа',
                aboutHotelEEItems: [
                    { item: 'Реновация в 2018' },
                    { item: 'Рядом с лучшим пляжем Айя-Напы Nissi Beach' },
                    { item: 'Аквапарк WaterWorld (недалеко от отеля)' },
                    { item: 'Песчаный пляж' },
                    { item: 'Сауна (платно)' },
                    { item: 'Free WI-FI (в лобби)' },
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Кипр, Айя-Напа',
                aboutHotelLTItems: [
                    { item: 'Реновация в 2018' },
                    { item: 'Рядом с лучшим пляжем Айя-Напы Nissi Beach' },
                    { item: 'Аквапарк WaterWorld (недалеко от отеля)' },
                    { item: 'Песчаный пляж' },
                    { item: 'Сауна (платно)' },
                    { item: 'Free WI-FI (в лобби)' },
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Кипр, Айя-Напа',
                aboutHotelLVItems: [
                    { item: 'Реновация в 2018' },
                    { item: 'Рядом с лучшим пляжем Айя-Напы Nissi Beach' },
                    { item: 'Аквапарк WaterWorld (недалеко от отеля)' },
                    { item: 'Песчаный пляж' },
                    { item: 'Сауна (платно)' },
                    { item: 'Free WI-FI (в лобби)' },
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'St. Raphael Resort 5*',
                background: 'background: url(https://www.tui.ru/getmedia/42d77e04-8b00-4095-890d-7df28ff5b30b/f_St-Raphael-Resort-Aerial-View-007_f_1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Cyprus/Limasol-Resort/Limasol-City/St-Raphael-Resort',
                
                //EE
                countryNameEE: 'Кипр, Лимасол',
                aboutHotelEEItems: [
                    { item: 'Номера для размещения 2ВЗР. + 3РЕБ. (Standard Inland View Rooms, 35 кв.м.)' },
                    { item: 'Залы для проведения выставок/конференций, площадью 500 кв. м' },
                    { item: 'Собственный песчаный пляж: шезлонги и зонтики - бесплатно' },
                    { item: 'На пляже ресторан по системе Grab & Go' },
                    { item: 'Есть система питания Ultra All Inclusive' },
                    { item: 'Ознакомительный урок дайвинга в бассейне (для Ultra All Inclusive)' },
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Кипр, Лимасол',
                aboutHotelLTItems: [
                    { item: 'Номера для размещения 2ВЗР. + 3РЕБ. (Standard Inland View Rooms, 35 кв.м.)' },
                    { item: 'Залы для проведения выставок/конференций, площадью 500 кв. м' },
                    { item: 'Собственный песчаный пляж: шезлонги и зонтики - бесплатно' },
                    { item: 'На пляже ресторан по системе Grab & Go' },
                    { item: 'Есть система питания Ultra All Inclusive' },
                    { item: 'Ознакомительный урок дайвинга в бассейне (для Ultra All Inclusive)' },
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Кипр, Лимасол',
                aboutHotelLVItems: [
                    { item: 'Номера для размещения 2ВЗР. + 3РЕБ. (Standard Inland View Rooms, 35 кв.м.)' },
                    { item: 'Залы для проведения выставок/конференций, площадью 500 кв. м' },
                    { item: 'Собственный песчаный пляж: шезлонги и зонтики - бесплатно' },
                    { item: 'На пляже ресторан по системе Grab & Go' },
                    { item: 'Есть система питания Ultra All Inclusive' },
                    { item: 'Ознакомительный урок дайвинга в бассейне (для Ultra All Inclusive)' },
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
        ],
        
        //HOTELS 4 ЧЕРНОГОРИЯ
        country4Hotels : [
            //HOTEL
            {
                hotelName : 'Aleksandar 4*',
                background: 'background: url(https://www.tui.ru/getmedia/13c783b4-c8a7-4673-b3fa-8df70e917c4e/f_Main-Bulding_f_1-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/tours/europe/montenegro/budvanska-rivijera/budva/aleksandar/',
                
                //EE
                countryNameEE: 'Черногория, Будва',
                aboutHotelEEItems: [
                    { item: 'общественный песчано-галечный пляж протяженностью 1600 м, через дорогу' },
                    { item: 'живая музыка' },
                    { item: 'есть система питания All Inclusive' },
                    { item: '1 раз в неделю: вечер дегустации местного вина, уголок здоровья с фруктовыми соками, фольклорный вечер (для All Inclusive)' },
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Черногория, Будва',
                aboutHotelLTItems: [
                    { item: 'общественный песчано-галечный пляж протяженностью 1600 м, через дорогу' },
                    { item: 'живая музыка' },
                    { item: 'есть система питания All Inclusive' },
                    { item: '1 раз в неделю: вечер дегустации местного вина, уголок здоровья с фруктовыми соками, фольклорный вечер (для All Inclusive)' },
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Черногория, Будва',
                aboutHotelLVItems: [
                    { item: 'общественный песчано-галечный пляж протяженностью 1600 м, через дорогу' },
                    { item: 'живая музыка' },
                    { item: 'есть система питания All Inclusive' },
                    { item: '1 раз в неделю: вечер дегустации местного вина, уголок здоровья с фруктовыми соками, фольклорный вечер (для All Inclusive)' },
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Castellastva 4*',
                background: 'background: url(https://www.tui.ru/getmedia/3e5ec649-f74f-417b-a68d-e63f1705f0b3/kastellastva-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/tours/europe/montenegro/budvanska-rivijera/petrovac/castellastva/',
                
                //EE
                countryNameEE: 'Черногория, Петровац',
                aboutHotelEEItems: [
                    { item: 'общественный песчано-галечный пляж, протяженностью 600 м, через дорогу' },
                    { item: 'недорогой отель для тех, кто любит смотреть достопримечательности' },
                    
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Черногория, Петровац',
                aboutHotelLTItems: [
                    { item: 'общественный песчано-галечный пляж, протяженностью 600 м, через дорогу' },
                    { item: 'недорогой отель для тех, кто любит смотреть достопримечательности' },
                    
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Черногория, Петровац',
                aboutHotelLVItems: [
                    { item: 'общественный песчано-галечный пляж, протяженностью 600 м, через дорогу' },
                    { item: 'недорогой отель для тех, кто любит смотреть достопримечательности' },
                    
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
        ],
        
        //HOTELS 5 ИТАЛИЯ
        country5Hotels : [
            //HOTEL
            {
                hotelName : 'Garden Resort Calabria (ex. Valtur Garden) 4*',
                background: 'background: url(https://www.tui.ru/getmedia/2bc0a092-4458-4eb9-9f9d-e6b27024967a/italy-hotels-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Italy/Calabria/Pizzo/Valtur-Garden-Calabria',
                
                //EE
                countryNameEE: 'Калабрия, Пиццо',
                aboutHotelEEItems: [
                    { item: 'Расположен посреди парка' },
                    { item: 'Питание All Inclusive' },
                    { item: 'Песчаный пляж' },
                    { item: 'Free WI-FI в лобби' },
                    { item: '2 открытых бассейна' },
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Калабрия, Пиццо',
                aboutHotelLTItems: [
                    { item: 'Расположен посреди парка' },
                    { item: 'Питание All Inclusive' },
                    { item: 'Песчаный пляж' },
                    { item: 'Free WI-FI в лобби' },
                    { item: '2 открытых бассейна' },
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Калабрия, Пиццо',
                aboutHotelLVItems: [
                    { item: 'Расположен посреди парка' },
                    { item: 'Питание All Inclusive' },
                    { item: 'Песчаный пляж' },
                    { item: 'Free WI-FI в лобби' },
                    { item: '2 открытых бассейна' },
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
        ],
        
        //HOTELS 6 ИСПАНИЯ
        country6Hotels : [
            //HOTEL
            {
                hotelName : 'Estival Park Hotel Resort 4*',
                background: 'background: url(https://www.tui.ru/getmedia/25de3cd0-dd39-452b-83bf-6b68fd9cedc7/estival-park-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Spain/Costa-Dorada/La-Pineda/Estival-Park-Hotel-Resort',
                
                //EE
                countryNameEE: 'Испания, Салоу',
                aboutHotelEEItems: [
                    { item: 'Большая территория, собственные "оазисы" с бассейнами' },
                    { item: 'Питание на 5+, много фруктов и морепродуктов' },
                    { item: 'Великолепный SPA-центр' },
                    { item: 'Рядом аквапарк Aquopolis с дельфинарием' },
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Испания, Салоу',
                aboutHotelLTItems: [
                    { item: 'Большая территория, собственные "оазисы" с бассейнами' },
                    { item: 'Питание на 5+, много фруктов и морепродуктов' },
                    { item: 'Великолепный SPA-центр' },
                    { item: 'Рядом аквапарк Aquopolis с дельфинарием' },
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Испания, Салоу',
                aboutHotelLVItems: [
                    { item: 'Большая территория, собственные "оазисы" с бассейнами' },
                    { item: 'Питание на 5+, много фруктов и морепродуктов' },
                    { item: 'Великолепный SPA-центр' },
                    { item: 'Рядом аквапарк Aquopolis с дельфинарием' },
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Don Juan Tossa 4*',
                background: 'background: url(https://www.tui.ru/getmedia/d163d8fb-7186-4929-96d2-27b24b9a144e/hontana-hossa-min);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Europe/Spain/Costa-Brava/Tossa-De-Mar/Hotansa-Tossa',
                
                //EE
                countryNameEE: 'Испания, Тосса де мар',
                aboutHotelEEItems: [
                    { item: 'Рядом живописная бухта' },
                    { item: 'Бассейн на террасе с видом на крепость' },
                    { item: 'Теннисный корт' },
                    { item: 'Лучшее соотношение цены и качества' },
                    
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'Испания, Тосса де мар',
                aboutHotelLTItems: [
                    { item: 'Рядом живописная бухта' },
                    { item: 'Бассейн на террасе с видом на крепость' },
                    { item: 'Теннисный корт' },
                    { item: 'Лучшее соотношение цены и качества' },
                    
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'Испания, Тосса де мар',
                aboutHotelLVItems: [
                    { item: 'Рядом живописная бухта' },
                    { item: 'Бассейн на террасе с видом на крепость' },
                    { item: 'Теннисный корт' },
                    { item: 'Лучшее соотношение цены и качества' },
                    
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
        ],
        
                
        //HOTELS 8 OAE
        country8Hotels : [
            //HOTEL
            {
                hotelName : 'Al Hamra Village Golf & Beach Resort 4*',
                background: 'background: url(https://www.tui.ru/getmedia/7d1ba713-d51b-4603-96d0-532147ae9b8a/T15_Hotel_Al-Hamra-Village-Golf-Beach-Resort-1);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-Beach-Hotels/al-hamra-village-golf-beach-resort',
                
                //EE
                countryNameEE: 'ОАЭ, Рас Аль Хайма',
                aboutHotelEEItems: [
                    { item: 'Просторные номера (мин.28 кв.м)' },
                    { item: 'Номера с выходом к бассейну' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'SPA' },
                    { item: 'Живописные гольф-поля' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'ОАЭ, Рас Аль Хайма',
                aboutHotelLTItems: [
                    { item: 'Просторные номера (мин.28 кв.м)' },
                    { item: 'Номера с выходом к бассейну' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'SPA' },
                    { item: 'Живописные гольф-поля' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'ОАЭ, Рас Аль Хайма',
                aboutHotelLVItems: [
                    { item: 'Просторные номера (мин.28 кв.м)' },
                    { item: 'Номера с выходом к бассейну' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'SPA' },
                    { item: 'Живописные гольф-поля' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
            //HOTEL
            {
                hotelName : 'Al Hamra Residence 5*',
                background: 'background: url(https://www.tui.ru/getmedia/d01735ab-c45f-46a4-ba4d-d107366f623c/T16_hotel_Al-Hamra-Residence);background-position: center;background-size: cover',
                hotelLinkAgent: '/Tours/Asia/UAE/Ras-Al-Khaimah/Ras-Al-Khaimah-beach-hotels/al-hamra-residence',
                
                //EE
                countryNameEE: 'ОАЭ, Рас Аль Хайма',
                aboutHotelEEItems: [
                    { item: 'Огромные номера (мин.83 кв.м)' },
                    { item: 'Полностью оборудованная кухня (в каждом номере)' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                    
                ],
                buttonEE : 'Выбрать тур',
                
                //LT
                countryNameLT: 'ОАЭ, Рас Аль Хайма',
                aboutHotelLTItems: [
                    { item: 'Огромные номера (мин.83 кв.м)' },
                    { item: 'Полностью оборудованная кухня (в каждом номере)' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                    
                ],
                buttonLT : 'Выбрать тур',
                
                //LV
                countryNameLV: 'ОАЭ, Рас Аль Хайма',
                aboutHotelLVItems: [
                    { item: 'Огромные номера (мин.83 кв.м)' },
                    { item: 'Полностью оборудованная кухня (в каждом номере)' },
                    { item: 'Идеальный белопесчаный пляж' },
                    { item: 'Огромный бассейн (500 кв.м)' },
                    { item: 'Вид на самый красивый салют в Рас Аль Хайме (на Новый год)' },
                    
                    
                ],
                buttonLV : 'Выбрать тур',
            },
            
            
        ],
    }
})