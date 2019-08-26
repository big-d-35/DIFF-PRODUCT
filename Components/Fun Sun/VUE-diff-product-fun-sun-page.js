
const funSunPageHeaderMenu = new Vue ({
    el: '#fun-sun-page-header-menu',
    data:{
        //background img
        funSunPageHeaderMenuBackground: 'background: url(https://www.tui.ru/getmedia/f4f3d6f3-1c20-4dab-8f55-7ee78b6dfe51/photo-2)',
        
        funSunPageHeaderMenuLogo: 'https://www.tui.ru/getmedia/a43e4cf0-4244-45b4-8bd4-275b7d8ba1a9/logoTopFN',
        
        funSunPageHeaderMenuTitleRU: 'FUN&SUN для вас - это:',
        funSunPageHeaderMenuTitleBY: 'FUN&SUN для вас - это:',
        funSunPageHeaderMenuTitleUA: 'FUN&SUN для вас - это:',
        funSunPageHeaderMenuTitleEE: 'FUN&SUN on:',
        funSunPageHeaderMenuTitleLT: '',
        funSunPageHeaderMenuTitleLV: 'FUN&SUN jums - tas ir:',
        
        funSunPageHeaderMenuItemLogo1: 'https://www.tui.ru/getmedia/2339a301-2a1a-4026-b219-722c7336cce0/beachball',
        funSunPageHeaderMenuItemNameRU1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameBY1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameUA1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameEE1: 'Klubi Toucan lastele alates 4. eluaastast',
        funSunPageHeaderMenuItemNameLT1: '',
        funSunPageHeaderMenuItemNameLV1: 'Klubs Toucan bērniem no 4 gadiem',
        
        funSunPageHeaderMenuItemLogo2: 'https://www.tui.ru/getmedia/fe91550a-2e69-4936-b82f-9550adee71b3/wifi',
        funSunPageHeaderMenuItemNameRU2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameBY2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameUA2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameEE2: 'Kiire Wi-Fi',
        funSunPageHeaderMenuItemNameLT2: '',
        funSunPageHeaderMenuItemNameLV2: 'Ātrgaitas Wi-Fi',
        
        funSunPageHeaderMenuItemLogo3: 'https://www.tui.ru/getmedia/70559937-c2f6-4cce-950b-b2921e37c042/p',
        funSunPageHeaderMenuItemNameRU3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameBY3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameUA3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameEE3: 'Chill Out Lounge täiskasvanutele',
        funSunPageHeaderMenuItemNameLT3: '',
        funSunPageHeaderMenuItemNameLV3: 'Chill Out Lounge pieaugušajiem',
        
        funSunPageHeaderMenuItemLogo4: 'https://www.tui.ru/getmedia/b6a1ff43-84af-4cee-986e-3feecc9e05f2/orange',
        funSunPageHeaderMenuItemNameRU4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameBY4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameUA4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameEE4: 'Hommikul värskelt pressitud apelsinimahl',
        funSunPageHeaderMenuItemNameLT4: '',
        funSunPageHeaderMenuItemNameLV4: 'Svaigi spiesta apelsīnu sula brokastu laikā',
        
        funSunPageHeaderMenuItemLogo5: 'https://www.tui.ru/getmedia/7b192985-2edd-4684-8df7-6d8a08d09918/ice',
        funSunPageHeaderMenuItemNameRU5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameBY5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameUA5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameEE5: 'Jäätis meie külalistele',
        funSunPageHeaderMenuItemNameLT5: '',
        funSunPageHeaderMenuItemNameLV5: 'Saldējums mūsu viesiem',
        
        funSunPageHeaderMenuItemLogo6: 'https://www.tui.ru/getmedia/c4094300-05e0-46f5-9b31-cd54cee92900/disco',
        funSunPageHeaderMenuItemNameRU6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameBY6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameUA6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameEE6: 'Kuulsad esinejad: Propaganda, White Eagle, Rumbero&s, Estradarada, ViRUS!, Korni',
        funSunPageHeaderMenuItemNameLT6: 'Kuulsad esinejad: Propaganda, White Eagle, Rumbero&s, Estradarada, ViRUS!, Korni',
        funSunPageHeaderMenuItemNameLV6: 'Slaveno zvaiģžņu koncerti visas vasaras garumā: Propaganda, Belij orel, Rumbero&s, Estradarada, ViRUS!, Korni',
        
        funSunPageHeaderMenuItemLogo7: 'https://www.tui.ru/getmedia/640ea075-2c0b-4b3d-9740-832354781385/n',
        funSunPageHeaderMenuItemNameRU7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameBY7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameUA7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameEE7: 'Foto, kulinaaria ja võõrkeele meistriklassid',
        funSunPageHeaderMenuItemNameLT7: '',
        funSunPageHeaderMenuItemNameLV7: 'Fotogrāfijas, kulinārijas un ārzemju valodas apgūšanas meistarklases',
        
        funSunPageHeaderMenuItemLogo8: 'https://www.tui.ru/getmedia/a5cb6130-9605-4b09-99e3-b52bd2e57934/f',
        funSunPageHeaderMenuItemNameRU8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameBY8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameUA8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameEE8: 'Fitness & Wellness koos treeneritega',
        funSunPageHeaderMenuItemNameLT8: '',
        funSunPageHeaderMenuItemNameLV8: 'Fitness & Wellness с pasaules slaveniem instruktoriem',
        
        funSunPageHeaderMenuVideoPlay: 'https://www.tui.ru/getmedia/8f5429a2-487b-4807-bec3-bec1a2088a67/play',
    }
});

const funSunPageMenu = new Vue ({
    el: '#fun-sun-page-menu',
    data: {
        
        funSunPageMenuItemRU1: 'Это FUN&SUN',
        funSunPageMenuItemBY1: 'Это FUN&SUN',
        funSunPageMenuItemUA1: 'Это FUN&SUN',
        funSunPageMenuItemEE1: 'See on FUN&SUN',
        funSunPageMenuItemLT1: '',
        funSunPageMenuItemLV1: 'Tas ir FUN&SUN',
        
        funSunPageMenuItemRU2: 'Отели',
        funSunPageMenuItemBY2: 'Отели',
        funSunPageMenuItemUA2: 'Отели',
        funSunPageMenuItemEE2: 'Hotellid',
        funSunPageMenuItemLT2: '',
        funSunPageMenuItemLV2: 'Viesnīcas',
        
        funSunPageMenuItemRU3: 'Развлечения и спорт',
        funSunPageMenuItemBY3: 'Развлечения и спорт',
        funSunPageMenuItemUA3: 'Развлечения и спорт',
        funSunPageMenuItemEE3: 'Meelelahutus ja sport',
        funSunPageMenuItemLT3: '',
        funSunPageMenuItemLV3: 'Izklaide un sports',
        
        funSunPageMenuItemRU4: 'Для детей',
        funSunPageMenuItemBY4: 'Для детей',
        funSunPageMenuItemUA4: 'Для детей',
        funSunPageMenuItemEE4: 'Lastele',
        funSunPageMenuItemLT4: '',
        funSunPageMenuItemLV4: 'Bērniem',
        
        funSunPageMenuItemRU5: 'Афиша 2019',
        funSunPageMenuItemBY5: 'Афиша 2019',
        funSunPageMenuItemUA5: 'Афиша 2019',
        funSunPageMenuItemEE5: '2019 üritused',
        funSunPageMenuItemLT5: '',
        funSunPageMenuItemLV5: 'Afiša 2019',
        
        funSunPageMenuItemRU6: 'Перейти к бронированию',
        funSunPageMenuItemBY6: 'Перейти к бронированию',
        funSunPageMenuItemUA6: 'Перейти к бронированию',
        funSunPageMenuItemEE6: 'Broneeri',
        funSunPageMenuItemLT6: '',
        funSunPageMenuItemLV6: 'Pāriet pie rezervācijam',
    }
});

const funSunPageMenuTitleHotels = new Vue ({
    el: '#advantagesHotels',
    data: {
        funSunPageMenuAdvantagiesTitleRU: 'Преимущества отелей с концепцией FUN&SUN',
    }
});

const funSunPageMenuAdventagiesHotelsMenu = new Vue ({
    el: '#fun-sun-page-hotels-adventagies-hotels-menu',
    data: {
        funSunPageMenuAdventagiesHotelsMenuItemRU1: 'В номере как дома',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU2: 'Пройдитесь по территории',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU3: 'Для детей',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU4: 'Попробуйте блюда и напитки',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU5: 'Займитесь спортом',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU6: 'Развлекитесь',
    }
});

//Преимущества вкладка 1 В номере как дома
const funSunPageHotelsAdventagie1 = (background, titleRU, textRU) => ({background, titleRU, textRU});

const funSunPageHotelsAdventagies1 = [
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/e1fb10ab-76fe-4b95-aea5-a8f93d2edebf/3);background-position: 100% 80%;background-size: cover','Стандартные номера', 'В стандартном номере с комфортом разместятся двое гостей. Также отель в номер можно запросить дополнительную кровать для третьего гостя.'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/c8e61f4a-b50a-4bfa-b7dc-73f692480848/Panorama-min);background-position: center;background-size: cover','Номера семейного типа', 'Семейные номера обычно состоят из двух комнат и подходят для размещения не менее четырех человек.'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/e6136071-a2c4-4ef7-96f2-1f06d1684faf/shutterstock_1012847620-min);background-position: center;background-size: cover','Для детей', 'Детская кроватка, ванночка, горшок и сиденье на унитаз предоставляются в номера бесплатно и по запросу.'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/671d9c2c-6489-4633-a6f6-d4a60ec17494/shutterstock_113099134-new);background-position: center;background-size: cover', 'Мини-бар', 'При заезде в отель мини-бар пополняется прохладительными напитками, далее - водой'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/c35e7b87-a46a-4129-ac21-572f8580d6cd/halat);background-position: center;background-size: cover', 'В ванной комнате', 'Мы позаботились о вашем комфорте, оснастив все номера уютными халатами и тапочками для взрослых и наборами для душа, включающими в себя шампунь, кондиционер, шапочку и гель для душа.'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/5d80ba03-db1e-4a8b-af6e-96f01b86b2d8/shutterstock_338701388);background-position: center;background-size: cover', 'ТВ на родном языке', 'Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.'),
    
]

const funSunPageHotelsAdventagiesBlock1 = new Vue({
    el: '#fun-sun-page-hotels-adventagies1',
    data:{
        funSunPageHotelsAdventagies1: funSunPageHotelsAdventagies1,
        funSunPageHotelsAdventagie1: funSunPageHotelsAdventagie1
        
    }
});

//Преимущества вкладка 2 Пройдитесь по территории
const funSunPageHotelsAdventagie2 = (background, titleRU, textRU) => ({background, titleRU, textRU});

const funSunPageHotelsAdventagies2 = [
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/36d227ba-cca4-4622-b746-c22f863daf65/shutterstock_1013306506);background-position: center;background-size: cover','Оставайтесь онлайн', 'Бесплатный Wi-Fi на всей территории отеля.'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/3e8c45d8-4bb4-4365-87d6-8fb9b5107d72/pljazh);background-position: center;background-size: cover','Искупайтесь в море', 'Все отели имеют собственный пляж (Турция) или находятся рядом с пляжем (Кипр). Пляжные полотенца, зонтики, шезлонги и матрасы - бесплатно (Турция).'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/dc0a6fbf-f6d9-49e4-99eb-1f2ffb0c6414/photo-16-min);background-position: center;background-size: cover','Отдохните от суеты', 'Специальный Chill Out бар открыт только для взрослых (18+).'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/a0e19ce0-bb6b-4d82-b1d4-12940e964479/shutterstock_127114079-min);background-position: center;background-size: cover','Купите все, что нужно', 'Забыли что-то дома? Не проблема. На территории расположены магазины с детскими товарами.'),
    
    
]

const funSunPageHotelsAdventagiesBlock2 = new Vue({
    el: '#fun-sun-page-hotels-adventagies2',
    data:{
        funSunPageHotelsAdventagies2: funSunPageHotelsAdventagies2,
        funSunPageHotelsAdventagie2: funSunPageHotelsAdventagie2
        
    }
});

//Преимущества вкладка 3 Для детей
const funSunPageHotelsAdventagie3 = (background, titleRU, textRU) => ({background, titleRU, textRU});

const funSunPageHotelsAdventagies3 = [
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/f04f8187-f36b-4a80-9806-a8374ed32751/shutterstock_301478432-min);background-position: center;background-size: cover','Тукан Baby', 'Услуги для самых маленьких путешественников и их родителей: детское оборудование, уголок матери, стиральная машина, детское меню, игровое пространство в Тукан Kids. Дети до 4 лет могут посещать Тукан Kids только в сопровождении взрослых.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/716a964d-35c2-4f72-8dba-626b699e56aa/shutterstock_178349795);background-position: center;background-size: cover','Тукан Kids', 'Клуб для детей от 4 до 7 лет с занимательной программой и профессиональными аниматорами.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/39427fc6-9ed2-49c5-bf15-bbd5755e6d93/junior-min);background-position: center;background-size: cover','Тукан Junior', 'Клуб для озорников от 8 до 12 лет c программой, разработанной с учетом возраста и предпочтений детей.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/91e51c89-4336-4f65-a22d-3e287cceba29/teen_lounge);background-position: center;background-size: cover','Teens Hangout (12+)', 'Программа для подростков со специально выделенным аниматором. Период работы: с 1 июня по 1 сентября.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/565f465b-ba38-46b1-8035-4cc244d0cfbe/DSCF4520-min);background-position: center;background-size: cover','Питание', 'Детский буфет Тукан в главном ресторане отеля - залог полноценного и здорового питания вашего ребенка. Для сладкоежек - мороженое днем и десерты в ассортименте'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/46bf9839-db05-47b4-b055-3f7dab91618c/baschild);background-position: center;background-size: cover','Водные развлечения', 'Детям понравится плескаться в наших бассейнах, кататься на водных горках или в аквапарке. Все под присмотром профессионального персонала отеля'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/53412abf-958c-4c92-94c1-549bb978c2e5/shutterstock_757693621-min);background-position: center;background-size: cover','Для детей', 'По вашему запросу мы с удовольствием вам бесплатно предоставим детскую кроватку в номер, стул для кормления в ресторане, детскую коляску и горшок, ванночку и детское сиденье на унитаз'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/7dfc3f30-5a0d-4082-87f3-178d000505be/shutterstock_415238506-min);background-position: center;background-size: cover','Уголок мамы', 'В уголке мамы в главном ресторане круглосуточно в свободном доступе микроволновка, стерилизатор, блендер и чайник.'),
    
    
]

const funSunPageHotelsAdventagiesBlock3 = new Vue({
    el: '#fun-sun-page-hotels-adventagies3',
    data:{
        funSunPageHotelsAdventagies3: funSunPageHotelsAdventagies3,
        funSunPageHotelsAdventagie3: funSunPageHotelsAdventagie3
        
    }
});

//Преимущества вкладка 4 Попробуйте блюда и напитки
const funSunPageHotelsAdventagie4 = (background, titleRU, textRU) => ({background, titleRU, textRU});

const funSunPageHotelsAdventagies4 = [
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/e2ca2970-080e-40dd-a2bc-3365cc471728/photo-14-1);background-position: center;background-size: cover','Свежевыжатый сок', 'Каждое утро на завтрак мы предлагаем свежевыжатый апельсиновый сок.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/57d72f19-5fc7-4c5c-b4ae-780bab4a21c2/alacart-min);background-position: center;background-size: cover','A la carte рестораны', 'Ужин от шеф-повара высшего класса? Приглашаем гостей в рестораны a la carte: Средиземноморский, Итальянский или Национальный Каждый гость за время своего отдыха может воспользоваться одним бесплатным ужином в ресторанах.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/98575e95-eb0b-4b50-ac18-2efe3c982ba2/shutterstock_666139504-min);background-position: center;background-size: cover','Диетические блюда', 'Если вы следуете правилам здорового образа жизни даже на отдыхе, вам придутся по вкусу блюда из диетического уголка главного ресторана.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/1b700cde-7473-4d0d-a1e7-175c9366afc8/1-min);background-position: center;background-size: cover','Питание и снеки', 'Помимо главного ресторана с питанием по системе "Все включено", на территории расположено несколько баров, предлагающих закуски и горячие блюда. Для любителей перекусить в ночное время, работает буфет в главном ресторане отеля. Предлагаем гостям горячие супы, свежие салаты и закуски.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/2febcacc-9c52-4f72-8f84-8ca0007a6e23/2-min);background-position: center;background-size: cover','Напитки', 'Мы предлагаем нашим гостям бесплатно как алкогольные импортные напитки (3 вида), так и безалкогольные домашние лимонады, компоты, коктейли, травяные чаи, кофе и национальные напитки.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/0c3c8a8e-4cc2-4a04-b5b5-94f80830afe9/2-min-new);background-position: center;background-size: cover','Сладости', 'Все, что так любят наши туристы: местные сладости, пирожные, шикарные сливочные и шоколадные торты в десерт-баре Happy Moments.'),
    
    
]

const funSunPageHotelsAdventagiesBlock4 = new Vue({
    el: '#fun-sun-page-hotels-adventagies4',
    data:{
        funSunPageHotelsAdventagies4: funSunPageHotelsAdventagies4,
        funSunPageHotelsAdventagie4: funSunPageHotelsAdventagie4
        
    }
});

//Преимущества вкладка 5 Займитесь спортом
const funSunPageHotelsAdventagie5 = (background, titleRU, textRU) => ({background, titleRU, textRU});

const funSunPageHotelsAdventagies5 = [
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/55f5f497-2b59-4832-bddf-dd2106dc76d9/fitnes-min);background-position: center;background-size: cover','Профессиональные фитнес-тренеры', 'После вкусных блюд нашей кухни, вы точно захотите посетить мастер-классы профессиональных fitness - wellness инструкторов.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/fea29f28-b6d8-4897-bcc0-efad6776edf0/bass-min);background-position: center;background-size: cover','Плавайте и загорайте', 'Открытые и крытые бассейны для взрослых и детей, водные горки и аквапарки. Отличная возможность устроить заплыв или просто позагорать на шезлонгах у воды'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/19ea6d1d-b8fc-448b-886e-da72aa41786e/trenaz-min);background-position: center;background-size: cover','Тренажерный зал', 'Бесплатный тренажерный зал с качественным оборудованием для кардио и силовых тренировок'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/d4596940-2a82-47a9-bde9-418a2a8d736f/shutterstock_284520896-min);background-position: center;background-size: cover','Спортивные площадки', 'Футбол, большой или настольный теннис - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/21121784-fbd8-4a60-9d69-ce693f3d4c21/shutterstock_157675814-min);background-position: center;background-size: cover','Соревнуйтесь и тренируйтесь', 'Активно и позитивно - аниматоры TUI увлекут всех на активные занятия в спортивных играх и соревнованиях. Приходите на ежедневные занятия фитнесом и аквааэробикой!'),
        
]

const funSunPageHotelsAdventagiesBlock5 = new Vue({
    el: '#fun-sun-page-hotels-adventagies5',
    data:{
        funSunPageHotelsAdventagies5: funSunPageHotelsAdventagies5,
        funSunPageHotelsAdventagie5: funSunPageHotelsAdventagie5
        
    }
});

//Преимущества вкладка 6 Развлекитесь
const funSunPageHotelsAdventagie6 = (background, titleRU, textRU) => ({background, titleRU, textRU});

const funSunPageHotelsAdventagies6 = [
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/1e5742a9-a57f-44e4-97c4-9853e263f86a/programms-300-2001);background-position: center;background-size: cover','Вечерние шоу', 'Каждый вечер в отелях FUN&SUN - увлекательные шоу резидентов и приглашенных артистов - национальные шоу, танцы и вокальные выступления.'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/0dccc404-4d8f-487c-afd7-e70c21c445df/artist);background-position: center;background-size: cover','Выступления популярных звезд', 'В отелях FUN&SUN регулярно проходят концерты звездных артистов! Не пропустите свой шанс увидеть топовых исполнителей'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/a4769103-43cc-4cc3-ad02-0246747affd5/animation-min);background-position: center;background-size: cover','Анимация на русском языке', 'Наши преподаватели научат вас самому нужному в путешествии: делать красивые фотографии на телефон, готовить блюда национальной кухни и разговаривать на языке страны, в которой вы отдыхаете.'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/fab07f46-9184-4889-944d-1b2c74901556/disco-min);background-position: center;background-size: cover','Дискотеки и тематические вечеринки', 'Во время отпуска наслаждайтесь зажигательными вечеринками на пляже и у бассейна'),
    
        
]

const funSunPageHotelsAdventagiesBlock6 = new Vue({
    el: '#fun-sun-page-hotels-adventagies6',
    data:{
        funSunPageHotelsAdventagies6: funSunPageHotelsAdventagies6,
        funSunPageHotelsAdventagie6: funSunPageHotelsAdventagie6
        
    }
});