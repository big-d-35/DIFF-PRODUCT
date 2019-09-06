
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
        funSunPageHeaderMenuTitleLT: 'FUN&SUN tai:',
        funSunPageHeaderMenuTitleLV: 'FUN&SUN jums - tas ir:',
        
        funSunPageHeaderMenuItemLogo1: 'https://www.tui.ru/getmedia/2339a301-2a1a-4026-b219-722c7336cce0/beachball',
        funSunPageHeaderMenuItemNameRU1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameBY1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameUA1: 'Клуб Тукан для детей от 4-х лет',
        funSunPageHeaderMenuItemNameEE1: 'Klubi Toucan lastele alates 4. eluaastast',
        funSunPageHeaderMenuItemNameLT1: 'Toucan klubas vaikams nuo 4-ių metų',
        funSunPageHeaderMenuItemNameLV1: 'Klubs Toucan bērniem no 4 gadiem',
        
        funSunPageHeaderMenuItemLogo2: 'https://www.tui.ru/getmedia/fe91550a-2e69-4936-b82f-9550adee71b3/wifi',
        funSunPageHeaderMenuItemNameRU2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameBY2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameUA2: 'Быстрый Wi-Fi',
        funSunPageHeaderMenuItemNameEE2: 'Kiire Wi-Fi',
        funSunPageHeaderMenuItemNameLT2: 'Spartusis internetas',
        funSunPageHeaderMenuItemNameLV2: 'Ātrgaitas Wi-Fi',
        
        funSunPageHeaderMenuItemLogo3: 'https://www.tui.ru/getmedia/70559937-c2f6-4cce-950b-b2921e37c042/p',
        funSunPageHeaderMenuItemNameRU3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameBY3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameUA3: 'Chill Out Lounge для взрослых',
        funSunPageHeaderMenuItemNameEE3: 'Chill Out Lounge täiskasvanutele',
        funSunPageHeaderMenuItemNameLT3: 'Chill Out Lounge suaugusiems',
        funSunPageHeaderMenuItemNameLV3: 'Chill Out Lounge pieaugušajiem',
        
        funSunPageHeaderMenuItemLogo4: 'https://www.tui.ru/getmedia/b6a1ff43-84af-4cee-986e-3feecc9e05f2/orange',
        funSunPageHeaderMenuItemNameRU4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameBY4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameUA4: 'Апельсиновый фреш на завтрак',
        funSunPageHeaderMenuItemNameEE4: 'Hommikul värskelt pressitud apelsinimahl',
        funSunPageHeaderMenuItemNameLT4: 'Šviežiai spaustos apelsinų sultys pusryčių metu',
        funSunPageHeaderMenuItemNameLV4: 'Svaigi spiesta apelsīnu sula brokastu laikā',
        
        funSunPageHeaderMenuItemLogo5: 'https://www.tui.ru/getmedia/7b192985-2edd-4684-8df7-6d8a08d09918/ice',
        funSunPageHeaderMenuItemNameRU5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameBY5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameUA5: 'Мороженое для наших гостей',
        funSunPageHeaderMenuItemNameEE5: 'Jäätis meie külalistele',
        funSunPageHeaderMenuItemNameLT5: 'Ledai',
        funSunPageHeaderMenuItemNameLV5: 'Saldējums mūsu viesiem',
        
        funSunPageHeaderMenuItemLogo6: 'https://www.tui.ru/getmedia/c4094300-05e0-46f5-9b31-cd54cee92900/disco',
        funSunPageHeaderMenuItemNameRU6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameBY6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameUA6: 'Концерты звёзд все лето: Пропаганда, Белый орел, Rumbero&s, Estradarada, ViRUS!, Корни',
        funSunPageHeaderMenuItemNameEE6: 'Kuulsad esinejad: Propaganda, White Eagle, Rumbero&s, Estradarada, ViRUS!, Korni',
        funSunPageHeaderMenuItemNameLT6: 'Žvaigždžių koncertai visą vasarą: Propaganda, Rumbero&s, Estradarada, ViRUS!, Korni',
        funSunPageHeaderMenuItemNameLV6: 'Slaveno zvaiģžņu koncerti visas vasaras garumā: Propaganda, Belij orel, Rumbero&s, Estradarada, ViRUS!, Korni',
        
        funSunPageHeaderMenuItemLogo7: 'https://www.tui.ru/getmedia/640ea075-2c0b-4b3d-9740-832354781385/n',
        funSunPageHeaderMenuItemNameRU7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameBY7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameUA7: 'Мастер-классы по фото, кулинарии и иностранному языку',
        funSunPageHeaderMenuItemNameEE7: 'Foto, kulinaaria ja võõrkeele meistriklassid',
        funSunPageHeaderMenuItemNameLT7: 'Mobiliosios fotografijos, kulinarijos ir užsienio kalbos pamokos',
        funSunPageHeaderMenuItemNameLV7: 'Fotogrāfijas, kulinārijas un ārzemju valodas apgūšanas meistarklases',
        
        funSunPageHeaderMenuItemLogo8: 'https://www.tui.ru/getmedia/a5cb6130-9605-4b09-99e3-b52bd2e57934/f',
        funSunPageHeaderMenuItemNameRU8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameBY8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameUA8: 'Fitness & Wellness с инструкторами-виртуозами',
        funSunPageHeaderMenuItemNameEE8: 'Fitness & Wellness koos treeneritega',
        funSunPageHeaderMenuItemNameLT8: 'Fitness & Wellness su intruktoriais',
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
        funSunPageMenuItemLT1: 'Tai FUN&SUN',
        funSunPageMenuItemLV1: 'Tas ir FUN&SUN',
        
        funSunPageMenuItemRU2: 'Отели',
        funSunPageMenuItemBY2: 'Отели',
        funSunPageMenuItemUA2: 'Отели',
        funSunPageMenuItemEE2: 'Hotellid',
        funSunPageMenuItemLT2: 'Viešbučiai',
        funSunPageMenuItemLV2: 'Viesnīcas',
        
        funSunPageMenuItemRU3: 'Развлечения и спорт',
        funSunPageMenuItemBY3: 'Развлечения и спорт',
        funSunPageMenuItemUA3: 'Развлечения и спорт',
        funSunPageMenuItemEE3: 'Meelelahutus ja sport',
        funSunPageMenuItemLT3: 'Pramogos ir sportas',
        funSunPageMenuItemLV3: 'Izklaide un sports',
        
        funSunPageMenuItemRU4: 'Для детей',
        funSunPageMenuItemBY4: 'Для детей',
        funSunPageMenuItemUA4: 'Для детей',
        funSunPageMenuItemEE4: 'Lastele',
        funSunPageMenuItemLT4: 'Vaikams',
        funSunPageMenuItemLV4: 'Bērniem',
        
        funSunPageMenuItemRU5: 'Афиша 2019',
        funSunPageMenuItemBY5: 'Афиша 2019',
        funSunPageMenuItemUA5: 'Афиша 2019',
        funSunPageMenuItemEE5: '2019 üritused',
        funSunPageMenuItemLT5: '2019 metų programa',
        funSunPageMenuItemLV5: 'Afiša 2019',
        
        funSunPageMenuItemRU6: 'Перейти к бронированию',
        funSunPageMenuItemBY6: 'Перейти к бронированию',
        funSunPageMenuItemUA6: 'Перейти к бронированию',
        funSunPageMenuItemEE6: 'Broneeri',
        funSunPageMenuItemLT6: 'Pasirinkti',
        funSunPageMenuItemLV6: 'Pāriet pie rezervācijam',
    }
});

const funSunPageMenuTitleHotels = new Vue ({
    el: '#advantagesHotels',
    data: {
        funSunPageMenuAdvantagiesTitleRU: 'Преимущества отелей с концепцией FUN&SUN',
        funSunPageMenuAdvantagiesTitleBY: 'Преимущества отелей с концепцией FUN&SUN',
        funSunPageMenuAdvantagiesTitleUA: 'Преимущества отелей с концепцией FUN&SUN',
        funSunPageMenuAdvantagiesTitleEE: 'FUN&SUN hotellide eelised',
        funSunPageMenuAdvantagiesTitleLT: 'FUN&SUN koncepcijos privalumai',
        funSunPageMenuAdvantagiesTitleLV: 'Viesnīcu priekšrocības ar FUN&SUN koncepciju',
    }
});

const funSunPageMenuAdventagiesHotelsMenu = new Vue ({
    el: '#fun-sun-page-hotels-adventagies-hotels-menu',
    data: {
        funSunPageMenuAdventagiesHotelsMenuItemRU1: 'В номере как дома',
        funSunPageMenuAdventagiesHotelsMenuItemBY1: 'В номере как дома',
        funSunPageMenuAdventagiesHotelsMenuItemUA1: 'В номере как дома',
        funSunPageMenuAdventagiesHotelsMenuItemEE1: 'Hotellis nagu kodus',
        funSunPageMenuAdventagiesHotelsMenuItemLT1: 'Kambaryje kaip namuose',
        funSunPageMenuAdventagiesHotelsMenuItemLV1: 'Numurā kā mājās',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU2: 'Пройдитесь по территории',
        funSunPageMenuAdventagiesHotelsMenuItemBY2: 'Пройдитесь по территории',
        funSunPageMenuAdventagiesHotelsMenuItemUA2: 'Пройдитесь по территории',
        funSunPageMenuAdventagiesHotelsMenuItemEE2: 'Vaadake territooriumi',
        funSunPageMenuAdventagiesHotelsMenuItemLT2: 'Pasivaikščiokite po teritoriją',
        funSunPageMenuAdventagiesHotelsMenuItemLV2: 'Pastaiga pa teritoriju',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU3: 'Для детей',
        funSunPageMenuAdventagiesHotelsMenuItemBY3: 'Для детей',
        funSunPageMenuAdventagiesHotelsMenuItemUA3: 'Для детей',
        funSunPageMenuAdventagiesHotelsMenuItemEE3: 'Lastele',
        funSunPageMenuAdventagiesHotelsMenuItemLT3: 'Vaikams',
        funSunPageMenuAdventagiesHotelsMenuItemLV3: 'Bērniem',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU4: 'Попробуйте блюда и напитки',
        funSunPageMenuAdventagiesHotelsMenuItemBY4: 'Попробуйте блюда и напитки',
        funSunPageMenuAdventagiesHotelsMenuItemUA4: 'Попробуйте блюда и напитки',
        funSunPageMenuAdventagiesHotelsMenuItemEE4: 'Proovige sööke ja jooke',
        funSunPageMenuAdventagiesHotelsMenuItemLT4: 'Pragaukite patiekalų ir gėrimų',
        funSunPageMenuAdventagiesHotelsMenuItemLV4: 'Nogaršojiet dzērienus un ēdienus',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU5: 'Займитесь спортом',
        funSunPageMenuAdventagiesHotelsMenuItemBY5: 'Займитесь спортом',
        funSunPageMenuAdventagiesHotelsMenuItemUA5: 'Займитесь спортом',
        funSunPageMenuAdventagiesHotelsMenuItemEE5: 'Tehke sporti',
        funSunPageMenuAdventagiesHotelsMenuItemLT5: 'Sportuokite',
        funSunPageMenuAdventagiesHotelsMenuItemLV5: 'Sports',
        
        funSunPageMenuAdventagiesHotelsMenuItemRU6: 'Развлекитесь',
        funSunPageMenuAdventagiesHotelsMenuItemBY6: 'Развлекитесь',
        funSunPageMenuAdventagiesHotelsMenuItemUA6: 'Развлекитесь',
        funSunPageMenuAdventagiesHotelsMenuItemEE6: 'Lõbutsege',
        funSunPageMenuAdventagiesHotelsMenuItemLT6: 'Atsipalaiduokite',
        funSunPageMenuAdventagiesHotelsMenuItemLV6: 'Izklaide',
    }
});

//Преимущества вкладка 1 В номере как дома
const funSunPageHotelsAdventagie1 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies1 = [
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/e1fb10ab-76fe-4b95-aea5-a8f93d2edebf/3);background-position: 100% 80%;background-size: cover','Стандартные номера', 'В стандартном номере с комфортом разместятся двое гостей. Также отель в номер можно запросить дополнительную кровать для третьего гостя.','Стандартные номера', 'В стандартном номере с комфортом разместятся двое гостей. Также отель в номер можно запросить дополнительную кровать для третьего гостя.','Стандартные номера', 'В стандартном номере с комфортом разместятся двое гостей. Также отель в номер можно запросить дополнительную кровать для третьего гостя.', 'Standardtuba','Standardtuba mahutab mugavalt kaks külalist. Samuti saab hotellis кüsida lisavoodit kolmandale külalisele.','Standartiniai kambariai','Standartiniuose kambariuose patogiai telpa du asmenys. Viešbutyje yra galimybė gauti papildomą lovą trečiajam asmeniui.','Standarta numuri','Standartā numurā ar komfortu izmitināsies divi viesi. Tāpāt numurā var pieprasīt vēl vienu gultu.'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/c8e61f4a-b50a-4bfa-b7dc-73f692480848/Panorama-min);background-position: center;background-size: cover','Номера семейного типа', 'Семейные номера обычно состоят из двух комнат и подходят для размещения не менее четырех человек.','Номера семейного типа', 'Семейные номера обычно состоят из двух комнат и подходят для размещения не менее четырех человек.','Номера семейного типа', 'Семейные номера обычно состоят из двух комнат и подходят для размещения не менее четырех человек.', 'Peretuba','Peretoad koosnevad tavaliselt kahest toast ja sobivad minimaalselt neljale inimesele.','Kambariai šeimoms','Šeimyninio tipo kambariai įprastai sudaryti iš dviejų kambarių ir tinka ne mažiau kaip keturiems asmenims.','Ģimenes tipa numuri','Ģimenes tipa numuros parasti ir divas istabas, kurās var izmitināties ne mazāk par 4 personam'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/e6136071-a2c4-4ef7-96f2-1f06d1684faf/shutterstock_1012847620-min);background-position: center;background-size: cover','Для детей', 'Детская кроватка, ванночка, горшок и сиденье на унитаз предоставляются в номера бесплатно и по запросу.','Для детей', 'Детская кроватка, ванночка, горшок и сиденье на унитаз предоставляются в номера бесплатно и по запросу.','Для детей', 'Детская кроватка, ванночка, горшок и сиденье на унитаз предоставляются в номера бесплатно и по запросу.', 'Lastele','Soovi korral tubadesse pakkutakse tasuta lastevoodi, lastevann, pott ja wc iste.','Vaikams','Vaikiška lovytė, vonelė, naktipuodis ir unitazo dangtis pristatomi į kambarį, pagal užklausimą, nemokama.','Bērniem','Bērnu gulta, vanna, pods un tualetes poda sēdeklis ir pieejami bezmaksas, pēc pieprasījuma'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/671d9c2c-6489-4633-a6f6-d4a60ec17494/shutterstock_113099134-new);background-position: center;background-size: cover', 'Мини-бар', 'При заезде в отель мини-бар пополняется прохладительными напитками, далее - водой', 'Мини-бар', 'При заезде в отель мини-бар пополняется прохладительными напитками, далее - водой', 'Мини-бар', 'При заезде в отель мини-бар пополняется прохладительными напитками, далее - водой', 'Minibaar','Sisse kolimisel minibaar täidetakse karastusjookidega, edaspidi & ndash; veega','Mini baras','Atvykimo dieną mini baras papildomas gaiviaisiais gėrimais, vėliau - vandeniu','Mini-bārs','Izmitināšanas dienā savā numurā mini-bārā jūs atradīsiet atsvaidzinošus dzērienus, turpmākajās dienās mini-bārs tiks papildināts ar ūdeni'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/c35e7b87-a46a-4129-ac21-572f8580d6cd/halat);background-position: center;background-size: cover', 'В ванной комнате', 'Мы позаботились о вашем комфорте, оснастив все номера уютными халатами и тапочками для взрослых и наборами для душа, включающими в себя шампунь, кондиционер, шапочку и гель для душа.', 'В ванной комнате', 'Мы позаботились о вашем комфорте, оснастив все номера уютными халатами и тапочками для взрослых и наборами для душа, включающими в себя шампунь, кондиционер, шапочку и гель для душа.', 'В ванной комнате', 'Мы позаботились о вашем комфорте, оснастив все номера уютными халатами и тапочками для взрослых и наборами для душа, включающими в себя шампунь, кондиционер, шапочку и гель для душа.', 'Vannis','Oleme hoolitsenud teie mugavuse eest, kõikides tubades on hommikumantlid ja sussid täiskasvanutele koos vannitootega, sealhulgas šampoon, konditsioneer ja dušigeel.','Vonios kambaryje','Pasirūpinome Jūsų patogumu, kambariuose rasite chalatus ir šlepetes suaugusiems ir vonios reikmenis, įskaitant šampūną, kondicionierių, dušo kepuraitę ir dušo gelį.','Vannas istabā','Esam parūpējušies par jūsu komfortu un visos numuros atradīsiet dušas komplektus, kurā ietilpst dušas želeja, dušas cepure, kondicionieris un šampūns matiem, peldmēteļus un čības pieaugušajiem.'),
    
    funSunPageHotelsAdventagie1('background: url(https://www.tui.ru/getmedia/5d80ba03-db1e-4a8b-af6e-96f01b86b2d8/shutterstock_338701388);background-position: center;background-size: cover', 'ТВ на родном языке', 'Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.', 'ТВ на родном языке', 'Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.', 'ТВ на родном языке', 'Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.', 'TV emakeeles','Lõõgastuge peale emotsiooniderohket päeva vaadates emakeeles TV saateid (sealhulgas ka lastesaateid).','TV','Po įtemptos dienos atsipalaiduokite žiūrėdami televizijos programas (įskaitant ir vaikų) išsirinkę iš gausaus kanalų sąrašo.','ТВ на родном языке','Отдохните после насыщенного дня за просмотром телепрограмм (в том числе и детских) на родном языке.'),
    
]

const funSunPageHotelsAdventagiesBlock1 = new Vue({
    el: '#fun-sun-page-hotels-adventagies1',
    data:{
        funSunPageHotelsAdventagies1: funSunPageHotelsAdventagies1,
        funSunPageHotelsAdventagie1: funSunPageHotelsAdventagie1
        
    }
});

//Преимущества вкладка 2 Пройдитесь по территории
const funSunPageHotelsAdventagie2 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies2 = [
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/36d227ba-cca4-4622-b746-c22f863daf65/shutterstock_1013306506);background-position: center;background-size: cover','Оставайтесь онлайн', 'Бесплатный Wi-Fi на всей территории отеля.','Оставайтесь онлайн', 'Бесплатный Wi-Fi на всей территории отеля.','Оставайтесь онлайн', 'Бесплатный Wi-Fi на всей территории отеля.', 'Püsige võrgus', 'Tasuta Wi-Fi hotelli territooriumil.','Likite prisijungę','Nemokamas Wi-Fi visoje viešbučio teritorijoje.','WI-FI','Bezmaksas WI-FI visā viesnīcas teritorijā'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/3e8c45d8-4bb4-4365-87d6-8fb9b5107d72/pljazh);background-position: center;background-size: cover','Искупайтесь в море', 'Все отели имеют собственный пляж (Турция) или находятся рядом с пляжем (Кипр). Пляжные полотенца, зонтики, шезлонги и матрасы - бесплатно (Турция).','Искупайтесь в море', 'Все отели имеют собственный пляж (Турция) или находятся рядом с пляжем (Кипр). Пляжные полотенца, зонтики, шезлонги и матрасы - бесплатно (Турция).','Искупайтесь в море', 'Все отели имеют собственный пляж (Турция) или находятся рядом с пляжем (Кипр). Пляжные полотенца, зонтики, шезлонги и матрасы - бесплатно (Турция).', 'Ujuge meres', 'Kõikidel hotellidel on isiklik rand (Türgi) või hotellid asuvad ranna läheduses (Küpros). Rannarätikud, päikesevarjud, lamamistoolid ja rannamadratsid - tasuta (Türgi).','Išsimaudykite jūroje','Visi viešbučiai turi nuosavus paplūdimius (Turkija) arba įsikūrę šalia paplūdimių (Kipras). Paplūdimio rankšluosčiai, skėčiai, gultai ir čiužiniai - nemokama (Turkija).','Pludmale','Visām viesnīcam ir privātās pludmales (Turcija) vai arī atrodas blakus pludmalei (Kipra) Pludmales dvieļi, pludmales saulessargi, atpūtas krēsli un matrači &ndash; - bezmaksas (Turcija).'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/dc0a6fbf-f6d9-49e4-99eb-1f2ffb0c6414/photo-16-min);background-position: center;background-size: cover','Отдохните от суеты', 'Специальный Chill Out бар открыт только для взрослых (18+).','Отдохните от суеты', 'Специальный Chill Out бар открыт только для взрослых (18+).','Отдохните от суеты', 'Специальный Chill Out бар открыт только для взрослых (18+).', 'Muretu puhkust', 'Spetsiaalne Chill Out baar ainult täiskasvanutele (18+).','Pailsėkite nuo šurmulio','Specialus Chill Out baras tik suaugusiems (18+).','Atpūta no steigas','Speciālais Chill Out bārs atvērts tikai pieaugušajiem (18+).'),
    
    funSunPageHotelsAdventagie2('background: url(https://www.tui.ru/getmedia/a0e19ce0-bb6b-4d82-b1d4-12940e964479/shutterstock_127114079-min);background-position: center;background-size: cover','Купите все, что нужно', 'Забыли что-то дома? Не проблема. На территории расположены магазины с детскими товарами.','Купите все, что нужно', 'Забыли что-то дома? Не проблема. На территории расположены магазины с детскими товарами.','Купите все, что нужно', 'Забыли что-то дома? Не проблема. На территории расположены магазины с детскими товарами.', 'Ostke kõik vajalik', 'Unustasite midagi koju? Pole probleemi. Territooriumil asuvad kauplused lastekaupadega.','Įsigykite visko, ko reikia','Kažką pamiršote namuose? Ne bėda! Viešbučių teritorijoje yra parduotuvių su vaikų prekėmis.','Nopērciet visu, kas nepieciešams','Aizmirsāt kaut ko mājas? Tā nav problēma. Teritorijā atrodas veikali ar bērnu precēm.'),
    
    
]

const funSunPageHotelsAdventagiesBlock2 = new Vue({
    el: '#fun-sun-page-hotels-adventagies2',
    data:{
        funSunPageHotelsAdventagies2: funSunPageHotelsAdventagies2,
        funSunPageHotelsAdventagie2: funSunPageHotelsAdventagie2
        
    }
});

//Преимущества вкладка 3 Для детей
const funSunPageHotelsAdventagie3 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies3 = [
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/f04f8187-f36b-4a80-9806-a8374ed32751/shutterstock_301478432-min);background-position: center;background-size: cover','Тукан Baby', 'Услуги для самых маленьких путешественников и их родителей: детское оборудование, уголок матери, стиральная машина, детское меню, игровое пространство в Тукан Kids. Дети до 4 лет могут посещать Тукан Kids только в сопровождении взрослых.','Тукан Baby', 'Услуги для самых маленьких путешественников и их родителей: детское оборудование, уголок матери, стиральная машина, детское меню, игровое пространство в Тукан Kids. Дети до 4 лет могут посещать Тукан Kids только в сопровождении взрослых.','Тукан Baby', 'Услуги для самых маленьких путешественников и их родителей: детское оборудование, уголок матери, стиральная машина, детское меню, игровое пространство в Тукан Kids. Дети до 4 лет могут посещать Тукан Kids только в сопровождении взрослых.','Toucan Baby','Teenused väiksematele külalistele ja nende vanematele: beebivarustus, ema nurk, pesumasin, lastemenüü, mänguruum Toucan Kids toas. Alla 4-aastased lapsed viibimine Toucan Kids toas ainult koos täiskasvanuga.','Toucan Baby','Paslaugos jauniausiems keliautojams ir jų tėvams: kūdikių įranga, mamos ir vaiko zona, skalbimo mašina, vaikiškas meniu, žaidimų erdvė „Toucan Kids“ klube. Vaikai iki 4 metų gali lankytis „Toucan Kids“ klube tik prižiūrimi suaugusiųjų.','Toucan Baby','Pakalpojumi pašiem mazākajiem ceļotājiem un viņu vecākiem: bērnu arpīkojums, mātes stūrītis, veļas mazgājamā mašīna, bernu ēdienkarte, spēļu zona, Toucan Kids. Bērni līdz 4 gadu vecumam var apmeklēt Toucan Kids tikai ar vecākiem.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/716a964d-35c2-4f72-8dba-626b699e56aa/shutterstock_178349795);background-position: center;background-size: cover','Тукан Kids', 'Клуб для детей от 4 до 7 лет с занимательной программой и профессиональными аниматорами.','Тукан Kids', 'Клуб для детей от 4 до 7 лет с занимательной программой и профессиональными аниматорами.','Тукан Kids', 'Клуб для детей от 4 до 7 лет с занимательной программой и профессиональными аниматорами.','Toucan Kids','Lasteklubi 4 - 7 aastastele kaasahaarava meelelahutusprogrammiga ja professionaalsete animaatoritega.','Toucan Kids','Klubas vaikams nuo 4 iki 7 metų su linksma programa irprofesionaliais animatoriais.','Toucan Kids','Klubs bērniem no 4 līdz 7 gadiem ar aizraujošu programmu un profesionāliem animatoriem.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/39427fc6-9ed2-49c5-bf15-bbd5755e6d93/junior-min);background-position: center;background-size: cover','Тукан Junior', 'Клуб для озорников от 8 до 12 лет c программой, разработанной с учетом возраста и предпочтений детей.','Тукан Junior', 'Клуб для озорников от 8 до 12 лет c программой, разработанной с учетом возраста и предпочтений детей.','Тукан Junior', 'Клуб для озорников от 8 до 12 лет c программой, разработанной с учетом возраста и предпочтений детей.','Toucan Junior','Juuniorite klubi 8 - 12 aastastele laste meelelahutusprogrammiga, mis on väljatöödatud vastavalt vanusegruppile ja laste eelistustele','Toucan Junior','Paauglių klubas nuo 8 iki 12 metų su programa atsižvelgiant į vaikų amžių ir pageidavimus.','Toucan Junior','Klubs bērniem no 8 līdz 12 gadiem ar programmu, kas sastādīta rēķinoties vecuma interesēm un vēlmēm.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/91e51c89-4336-4f65-a22d-3e287cceba29/teen_lounge);background-position: center;background-size: cover','Teens Hangout (12+)', 'Программа для подростков со специально выделенным аниматором. Период работы: с 1 июня по 1 сентября.','Teens Hangout (12+)', 'Программа для подростков со специально выделенным аниматором. Период работы: с 1 июня по 1 сентября.','Teens Hangout (12+)', 'Программа для подростков со специально выделенным аниматором. Период работы: с 1 июня по 1 сентября.','Teens Hangout (12+)','Programm teismelistele spetsiaalse animaatoriga. Tööperiood: 1 juuni kuni 1 september.','Teens Hangout (12+)','Programa paaugliams su specialiu animatoriumi.','Teens Hangout (12+)','Programma pusaudžiem ar savu animatoru. Darba laiks: no 1. jūnija līdz 1. septembrim.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/565f465b-ba38-46b1-8035-4cc244d0cfbe/DSCF4520-min);background-position: center;background-size: cover','Питание', 'Детский буфет Тукан в главном ресторане отеля - залог полноценного и здорового питания вашего ребенка. Для сладкоежек - мороженое днем и десерты в ассортименте','Питание', 'Детский буфет Тукан в главном ресторане отеля - залог полноценного и здорового питания вашего ребенка. Для сладкоежек - мороженое днем и десерты в ассортименте','Питание', 'Детский буфет Тукан в главном ресторане отеля - залог полноценного и здорового питания вашего ребенка. Для сладкоежек - мороженое днем и десерты в ассортименте','Toitlustus','Toucan buffet pearestoranis - võti tervislikule lapse toitumisele. Maiasmokkale - jäätis ja magustoite valik','Maitinimas','Vaikų bufetas „Toucan“ pagrindiniame viešbučio restorane - tai raktas į pilnavertę ir sveiką mitybą. Smaližiams – dienos metu ledai ir desertai.','Ēdiens','Viesnīcas galvenajā restorānā bērnu bufete Toucan-pilnvērtīgs un veselīgs ēdiens jūsu bērnam. Saldumu mīļiem-saldējums pa dienu un deserti piedāvājumā.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/46bf9839-db05-47b4-b055-3f7dab91618c/baschild);background-position: center;background-size: cover','Водные развлечения', 'Детям понравится плескаться в наших бассейнах, кататься на водных горках или в аквапарке. Все под присмотром профессионального персонала отеля','Водные развлечения', 'Детям понравится плескаться в наших бассейнах, кататься на водных горках или в аквапарке. Все под присмотром профессионального персонала отеля','Водные развлечения', 'Детям понравится плескаться в наших бассейнах, кататься на водных горках или в аквапарке. Все под присмотром профессионального персонала отеля','Veeharrastused','Lapsed saavad mõneleda basseinides, veeliumäel või veepargis. Professionaalse hotellipersonali järelvalve all.','Vandens pramogos','Vaikai galės mėgautis baseinais, leistis vandens kalneliais ar pramogauti vandens parke. Visi yra prižiūrimi profesionalių viešbučio darbuotojų.','Ūdens atrakcijas','Bērniem patiks draiskoties baseinā, izbaudīt ūdens slidkalniņus vai ūdens atrakciju parku. Viesnīcas profesionālais personāls pieskatīs visu.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/53412abf-958c-4c92-94c1-549bb978c2e5/shutterstock_757693621-min);background-position: center;background-size: cover','Для детей', 'По вашему запросу мы с удовольствием вам бесплатно предоставим детскую кроватку в номер, стул для кормления в ресторане, детскую коляску и горшок, ванночку и детское сиденье на унитаз','Для детей', 'По вашему запросу мы с удовольствием вам бесплатно предоставим детскую кроватку в номер, стул для кормления в ресторане, детскую коляску и горшок, ванночку и детское сиденье на унитаз','Для детей', 'По вашему запросу мы с удовольствием вам бесплатно предоставим детскую кроватку в номер, стул для кормления в ресторане, детскую коляску и горшок, ванночку и детское сиденье на унитаз','Lastele','Teie soovi korral toas on tasuta beebivoodi, beeebipott ja WC-iste, pearestoranis on beebi söögitoolid, lastekärud','Vaikams','Pageidaujant mielai suteiksime vaikišką lovelę kambaryje, maitinimo kėdę restorane, vežimėlį ir naktipuodį, kūdikio vonelę ir vaikišką tualeto dangtį.','Bērniem','Pēc jūsu pieprasījuma mēs ar prieku jums piedāvāsim bezmaksas bērnu gultiņu numurā, barošanas krēslu restorānā, bērnu ratus un podiņu, vannīti vai bērna sēdekli tualetes podam.'),
    
    funSunPageHotelsAdventagie3('background: url(https://www.tui.ru/getmedia/7dfc3f30-5a0d-4082-87f3-178d000505be/shutterstock_415238506-min);background-position: center;background-size: cover','Уголок мамы', 'В уголке мамы в главном ресторане круглосуточно в свободном доступе микроволновка, стерилизатор, блендер и чайник.','Уголок мамы', 'В уголке мамы в главном ресторане круглосуточно в свободном доступе микроволновка, стерилизатор, блендер и чайник.','Уголок мамы', 'В уголке мамы в главном ресторане круглосуточно в свободном доступе микроволновка, стерилизатор, блендер и чайник.','Ema nurk','Ema nurgas on ööpäevaringselt vabalt saadaval mikrolaineahi, steriliseerija, segisti ja veekeetja.','Mamos zona','Pagrindiniame restorane, mamos zonoje visą parą laisvai prieinama mikrobangų krosnelė, sterilizatorius, trintuvas ir virdulys.','Mātes stūrītis','Galvenajā restorānā mātes stūrītī visu diennakti ir pieejama mikroviļņu krāsns, sterilizātors, blenderis un tējkanna.'),
    
    
]

const funSunPageHotelsAdventagiesBlock3 = new Vue({
    el: '#fun-sun-page-hotels-adventagies3',
    data:{
        funSunPageHotelsAdventagies3: funSunPageHotelsAdventagies3,
        funSunPageHotelsAdventagie3: funSunPageHotelsAdventagie3
        
    }
});

//Преимущества вкладка 4 Попробуйте блюда и напитки
const funSunPageHotelsAdventagie4 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies4 = [
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/e2ca2970-080e-40dd-a2bc-3365cc471728/photo-14-1);background-position: center;background-size: cover','Свежевыжатый сок', 'Каждое утро на завтрак мы предлагаем свежевыжатый апельсиновый сок.','Свежевыжатый сок', 'Каждое утро на завтрак мы предлагаем свежевыжатый апельсиновый сок.','Свежевыжатый сок', 'Каждое утро на завтрак мы предлагаем свежевыжатый апельсиновый сок.','Värskelt pressitud mahlad','КVärskelt pressitud mahlad hommikusöögiks iga päev.','Šviežiai spaustos sultys','Šviežiai spaustos apelsinų sultys pusryčių metu.','Svaigi spiestā sula','Katru rītu brokastīs mēs piedāvājam svaigi spiestu apelsīna sulu.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/57d72f19-5fc7-4c5c-b4ae-780bab4a21c2/alacart-min);background-position: center;background-size: cover','A la carte рестораны', 'Ужин от шеф-повара высшего класса? Приглашаем гостей в рестораны a la carte: Средиземноморский, Итальянский или Национальный Каждый гость за время своего отдыха может воспользоваться одним бесплатным ужином в ресторанах.','A la carte рестораны', 'Ужин от шеф-повара высшего класса? Приглашаем гостей в рестораны a la carte: Средиземноморский, Итальянский или Национальный Каждый гость за время своего отдыха может воспользоваться одним бесплатным ужином в ресторанах.','A la carte рестораны', 'Ужин от шеф-повара высшего класса? Приглашаем гостей в рестораны a la carte: Средиземноморский, Итальянский или Национальный Каждый гость за время своего отдыха может воспользоваться одним бесплатным ужином в ресторанах.','A la carte restoranid','Õhtusöök tippkokalt? Kutsume teid meie a la carte restoranidesse: Vahemere, Itaalia või kohalik köök. Üks a la carte restorani külastus on tasuta.','A la carte restoranai','Speciali, virtuvės šefo gaminta vakarienė? Kviečiame svečius į A la Carte restoranus: Viduržemio jūros regiono, Italijos ar tradicinės virtuvės. Kiekvienas svečias atostogų metu gali pasimėgauti viena nemokama vakariene restoranuose.','A La Carte restorāni','Augstas klases šefpavāra vakariņas? Aicinām viesus A La Carte restorānā: Vidusjūras, Itāļu vai nacionālā. Katrs viesis savas atpūtas laikā var vienu reizi izbaudīt bezmaksas vakariņas restorānā.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/98575e95-eb0b-4b50-ac18-2efe3c982ba2/shutterstock_666139504-min);background-position: center;background-size: cover','Диетические блюда', 'Если вы следуете правилам здорового образа жизни даже на отдыхе, вам придутся по вкусу блюда из диетического уголка главного ресторана.','Диетические блюда', 'Если вы следуете правилам здорового образа жизни даже на отдыхе, вам придутся по вкусу блюда из диетического уголка главного ресторана.','Диетические блюда', 'Если вы следуете правилам здорового образа жизни даже на отдыхе, вам придутся по вкусу блюда из диетического уголка главного ресторана.','Dieettoidud','Kui te jälgite tervisliku eluviisi isegi puhkusel, meeldivad teile roogad pearestorani dieetnurgast.','Dietiniai patiekalai','Jei laikotės sveiko gyvenimo būdo taisyklių net atostogų metu, pagrindiniame restorane rasite dietinio maisto skyrių.','Diētiskie ēdieni','Ja vēlaties arī atpūtas laikā pieturēties pie veselīga dzīves veida, jums patīks mūsu galvenā restorāna diētiskie ēdieni.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/1b700cde-7473-4d0d-a1e7-175c9366afc8/1-min);background-position: center;background-size: cover','Питание и снеки', 'Помимо главного ресторана с питанием по системе "Все включено", на территории расположено несколько баров, предлагающих закуски и горячие блюда. Для любителей перекусить в ночное время, работает буфет в главном ресторане отеля. Предлагаем гостям горячие супы, свежие салаты и закуски.','Питание и снеки', 'Помимо главного ресторана с питанием по системе "Все включено", на территории расположено несколько баров, предлагающих закуски и горячие блюда. Для любителей перекусить в ночное время, работает буфет в главном ресторане отеля. Предлагаем гостям горячие супы, свежие салаты и закуски.','Питание и снеки', 'Помимо главного ресторана с питанием по системе "Все включено", на территории расположено несколько баров, предлагающих закуски и горячие блюда. Для любителей перекусить в ночное время, работает буфет в главном ресторане отеля. Предлагаем гостям горячие супы, свежие салаты и закуски.','Toitlustus ja suupisted','Lisaks pearestoranile "Kõik hinnas" toitlustusega, hotelli territooriumil on mitmed baarid, mis pakuvad suupisted ja soojad toite.','Maistas ir užkandžiai','Be pagrindinio restorano su "Viskas įskaičiuota", maitinimo sistema, viešbučio teritorijoje yra keletas barų, siūlančių užkandžius ir karštus patiekalus. Naktį veikia bufetas, kur rasite karštą sriubą, šviežių salotų ar užkandžių.','Ēdināšana uz uzkodas','Izņemot mūsu galveno restorānu ar sistēmu "Viss iekļauts", teritorijā atrodas vairāki bāri, kas piedāvā uzkodas un karstos ēdienus. Cilvēkiem, kam patīk uzkost nakts laikā strādā bufete galvenajā vienīcas restorānā. Viesiem piedāvājam karstās zupas, svaigos salātus un uzkodas'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/2febcacc-9c52-4f72-8f84-8ca0007a6e23/2-min);background-position: center;background-size: cover','Напитки', 'Мы предлагаем нашим гостям бесплатно как алкогольные импортные напитки (3 вида), так и безалкогольные домашние лимонады, компоты, коктейли, травяные чаи, кофе и национальные напитки.','Напитки', 'Мы предлагаем нашим гостям бесплатно как алкогольные импортные напитки (3 вида), так и безалкогольные домашние лимонады, компоты, коктейли, травяные чаи, кофе и национальные напитки.','Напитки', 'Мы предлагаем нашим гостям бесплатно как алкогольные импортные напитки (3 вида), так и безалкогольные домашние лимонады, компоты, коктейли, травяные чаи, кофе и национальные напитки.','Joogid','Lisaks imporditud alkohoolsetele jookidele (3 tüüpi) pakkume oma külalistele ka karastusjooke, kokteile, taimeteed, kohvi ja kohalikuid jooke.','Gėrimai','Nemokamai svečiams siūlome, tiek importinius alkoholinius gėrimus (3 rūšių), tiek vietinės gamybos gaiviuosius gėrimus, kompotus, kokteilius, vaistažolių arbatas, kavą ir tradicinius gėrimus.','Dzērieni','Viesiem piedāvājam bezmaksas importa alkoholiskus dzērienus (3 veidus), kā arī bezalkoholiskus - mājas limonādes, kompotus, kokteiļus, zaļās tējas, kafiju un nacionālos dzērienus.'),
    
    funSunPageHotelsAdventagie4('background: url(https://www.tui.ru/getmedia/0c3c8a8e-4cc2-4a04-b5b5-94f80830afe9/2-min-new);background-position: center;background-size: cover','Сладости', 'Все, что так любят наши туристы: местные сладости, пирожные, шикарные сливочные и шоколадные торты в десерт-баре Happy Moments.','Сладости', 'Все, что так любят наши туристы: местные сладости, пирожные, шикарные сливочные и шоколадные торты в десерт-баре Happy Moments.','Сладости', 'Все, что так любят наши туристы: местные сладости, пирожные, шикарные сливочные и шоколадные торты в десерт-баре Happy Moments.','Magustoidud','Kõik, mis meeldib meie külalistele: kohalikud magustoidud, koogid, erinevad tordid kohvikus Happy Moments.','Saldėsiai','Viskas, ką mūsų svečiai labai myli: vietiniai saldumynai, pyragai, įvairūs grietinėlės ir šokolado pyragaičiai „Happy Moments“ desertų bare.','Saldumi','Viss, kas garšo mūsu tūristiem: vietējie saldumi, kūciņas, saldkrējuma un šokolādes tortes deserta bārā Happy Moments.'),
    
    
]

const funSunPageHotelsAdventagiesBlock4 = new Vue({
    el: '#fun-sun-page-hotels-adventagies4',
    data:{
        funSunPageHotelsAdventagies4: funSunPageHotelsAdventagies4,
        funSunPageHotelsAdventagie4: funSunPageHotelsAdventagie4
        
    }
});

//Преимущества вкладка 5 Займитесь спортом
const funSunPageHotelsAdventagie5 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies5 = [
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/55f5f497-2b59-4832-bddf-dd2106dc76d9/fitnes-min);background-position: center;background-size: cover','Профессиональные фитнес-тренеры', 'После вкусных блюд нашей кухни, вы точно захотите посетить мастер-классы профессиональных fitness - wellness инструкторов.','Профессиональные фитнес-тренеры', 'После вкусных блюд нашей кухни, вы точно захотите посетить мастер-классы профессиональных fitness - wellness инструкторов.','Профессиональные фитнес-тренеры', 'После вкусных блюд нашей кухни, вы точно захотите посетить мастер-классы профессиональных fitness - wellness инструкторов.','Professionaalsed treenerid','Peale maitsvat lõunat soovite kindlasti osaleda professionaalsetes fitness- wellness treenerite meistriklassides.','Profesionalūs instruktoriai','Po skanių mūsų virtuvės patiekalų, tikrai norėsite apsilankyti fitness& wellness užsiėmimuose su profesionaliais instruktoriais.','Profesionālie fitnesa treneri','Pēc mūsu garšīgajiem ēdieniem, jūs noteikti gribēsiet apmeklēt profesionālu fitness & wellness instruktoru meistarklases.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/fea29f28-b6d8-4897-bcc0-efad6776edf0/bass-min);background-position: center;background-size: cover','Плавайте и загорайте', 'Открытые и крытые бассейны для взрослых и детей, водные горки и аквапарки. Отличная возможность устроить заплыв или просто позагорать на шезлонгах у воды','Плавайте и загорайте', 'Открытые и крытые бассейны для взрослых и детей, водные горки и аквапарки. Отличная возможность устроить заплыв или просто позагорать на шезлонгах у воды','Плавайте и загорайте', 'Открытые и крытые бассейны для взрослых и детей, водные горки и аквапарки. Отличная возможность устроить заплыв или просто позагорать на шезлонгах у воды','Ujuge ja päevitage','Sise ja välibasseinid täiskasvanutele ja lastele, veeliumäed ja veepargid. Suurepärane võimalus ujuda või lihtsalt päevitada lamamistoolidel vee ääres','Plaukiokite ir deginkitės','Lauko ir uždari baseinai tiek vaikams, tiek suaugusiems, vandens kalneliai ir pramogų parkai. Puiki proga išsimaudyti ar tiesiog degintis ant gultų.','Atpūta pie baseina','Āra un iekštelpu baseini pieaugušajiem un bērniem, ūdens slidkalniņi un ūdens atrakciju parki. Lieliska iespēja izpeldēties vai vienkārši sauļoties uz atpūtas krēsliem pie ūdens.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/19ea6d1d-b8fc-448b-886e-da72aa41786e/trenaz-min);background-position: center;background-size: cover','Тренажерный зал', 'Бесплатный тренажерный зал с качественным оборудованием для кардио и силовых тренировок','Тренажерный зал', 'Бесплатный тренажерный зал с качественным оборудованием для кардио и силовых тренировок','Тренажерный зал', 'Бесплатный тренажерный зал с качественным оборудованием для кардио и силовых тренировок','Jõusaal','Tasuta jõusaal kvaliteetsete seadmetega kardio- ja jõutreeningute jaoks','Treniruoklių salė','Nemokama treniruoklių salė su kokybiška įranga kardio ir jėgos treniruotėms.','Trenažieru zāle','Bezmaksas trenažieru zāle ar kvalitatīvu aprīkojumu priekš kardio un spēka nodarbībām.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/d4596940-2a82-47a9-bde9-418a2a8d736f/shutterstock_284520896-min);background-position: center;background-size: cover','Спортивные площадки', 'Футбол, большой или настольный теннис - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.','Спортивные площадки', 'Футбол, большой или настольный теннис - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.','Спортивные площадки', 'Футбол, большой или настольный теннис - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.','Spordiväljakud','Jalgpall, tennis või lauatennis - meie turistid saavad nautida oma lemmikspordi hotelli territooriumil. Rannikul on ka rannavõrkpalli ala.','Sporto aikštelė','Futbolas, lauko arba stalo tenisas - наши туристы могут заняться любимым видом спорта на площадках отеля. На побережье также есть зона для пляжного волейбола.','Sporta laukumi','Futbols, lielais vai galda teniss - mūsu viesnīcas viesi var izbaudīt iemīļoto sporta veidu mūsu viesnīcu laukumos. Pludmalē tāpat ir pieejams pludmales volejbols.'),
    
    funSunPageHotelsAdventagie5('background: url(https://www.tui.ru/getmedia/21121784-fbd8-4a60-9d69-ce693f3d4c21/shutterstock_157675814-min);background-position: center;background-size: cover','Соревнуйтесь и тренируйтесь', 'Активно и позитивно - аниматоры увлекут всех на активные занятия в спортивных играх и соревнованиях. Приходите на ежедневные занятия фитнесом и аквааэробикой!','Соревнуйтесь и тренируйтесь', 'Активно и позитивно - аниматоры увлекут всех на активные занятия в спортивных играх и соревнованиях. Приходите на ежедневные занятия фитнесом и аквааэробикой!','Соревнуйтесь и тренируйтесь', 'Активно и позитивно - аниматоры увлекут всех на активные занятия в спортивных играх и соревнованиях. Приходите на ежедневные занятия фитнесом и аквааэробикой!','Võistlused ja treeningud','Aktiivselt ja positiivselt - meeskond on ettevalmistanud võistluste ja treeningute programmi. Võtke osa igapäevastes fitness ja vesiaerobika treeningutes!','Rungtyniaukite ir treniruokitės','Aktyviai ir pozityviai - animatioriai visus pakvies į aktyvius užsiėmimus sportiniuose žaidimuose ir varžybose. Ateikite į kasdienius kūno rengybos ir vandens aerobikos užsiėmimus!','Treniņi un sacensības','Aktīvi un pozitīvi TUI animatori aizraus visus uz aktīvam nodarbībām sporta spēlēm un sacensībam. Apmeklējiet ikrīta fitnesa un ūdens aerobikas nodarbības!'),
        
]

const funSunPageHotelsAdventagiesBlock5 = new Vue({
    el: '#fun-sun-page-hotels-adventagies5',
    data:{
        funSunPageHotelsAdventagies5: funSunPageHotelsAdventagies5,
        funSunPageHotelsAdventagie5: funSunPageHotelsAdventagie5
        
    }
});

//Преимущества вкладка 6 Развлекитесь
const funSunPageHotelsAdventagie6 = (background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV) => ({background, titleRU, textRU, titleBY, textBY, titleUA, textUA, titleEE, textEE, titleLT, textLT, titleLV, textLV});

const funSunPageHotelsAdventagies6 = [
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/1e5742a9-a57f-44e4-97c4-9853e263f86a/programms-300-2001);background-position: center;background-size: cover','Вечерние шоу', 'Каждый вечер в отелях FUN&SUN - увлекательные шоу резидентов и приглашенных артистов - национальные шоу, танцы и вокальные выступления.','Вечерние шоу', 'Каждый вечер в отелях FUN&SUN - увлекательные шоу резидентов и приглашенных артистов - национальные шоу, танцы и вокальные выступления.','Вечерние шоу', 'Каждый вечер в отелях FUN&SUN - увлекательные шоу резидентов и приглашенных артистов - национальные шоу, танцы и вокальные выступления.','Õhtused ettendused','Iga õhtu FUN&SUN hotellides - kaasahaaravad üritused - tantsu ja laulu ettendused.','Vakaro šou programos','Kiekvieną vakarą FUN&SUN - viešbučiuose – įspūdingi animatorių ir kviestinių svečių šou - nacionaliniai ir vokaliniai pasirodymai, šou programos, šokiai.','Vakara šovi','FUN&SUN - viesnīcās katru vakaru - interesanti rezidentu un pieaicināto mākslinieku priekšnesumi - nacionālie šovi, dejošanas un vokālie priekšnesumi.'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/0dccc404-4d8f-487c-afd7-e70c21c445df/artist);background-position: center;background-size: cover','Выступления популярных звезд', 'В отелях FUN&SUN регулярно проходят концерты звездных артистов! Не пропустите свой шанс увидеть топовых исполнителей','Выступления популярных звезд', 'В отелях FUN&SUN регулярно проходят концерты звездных артистов! Не пропустите свой шанс увидеть топовых исполнителей','Выступления популярных звезд', 'В отелях FUN&SUN регулярно проходят концерты звездных артистов! Не пропустите свой шанс увидеть топовых исполнителей','Populaarsete esinejate ettendused','FUN&SUN hotellides regulaarselt korraldatakse populaarsete esinejate kontserdid!','Populiarių žvaigdžių pasirodymai','FUN&SUN viešbučiuose reguliariai organizuojami populiarių žvaigždžių koncertai! Nepraleiskite progos matyti geriausius atlikėjus.','Pazīstamu dziedātāju uzstāšanās','FUN&SUN viesnīcās regulāri notiek pazīstamu dziedātāju koncerti! Nepalaid garām iespēju satikt TOP dziedātājus'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/a4769103-43cc-4cc3-ad02-0246747affd5/animation-min);background-position: center;background-size: cover','Анимация на русском языке', 'Наши преподаватели научат вас самому нужному в путешествии: делать красивые фотографии на телефон, готовить блюда национальной кухни и разговаривать на языке страны, в которой вы отдыхаете.','Анимация на русском языке', 'Наши преподаватели научат вас самому нужному в путешествии: делать красивые фотографии на телефон, готовить блюда национальной кухни и разговаривать на языке страны, в которой вы отдыхаете.','Анимация на русском языке', 'Наши преподаватели научат вас самому нужному в путешествии: делать красивые фотографии на телефон, готовить блюда национальной кухни и разговаривать на языке страны, в которой вы отдыхаете.','Animatsioon','Professionaalsed animaatorid pakuvad abi ja meelelahutust.','Animacija','Profesionalūs animatoriai padės puikiai ir kokybiškai praleisti laiką.','Meistarklases','Mūsu pasniedzēji jūms iemācīs visu nepieciešamo ceļojumā - skaisti bildēt uz telefona, gatavot nacionālās virtuves ēdienus un runāt tajā valsts valodā, kurā tagad atpūšaties.'),
    
    funSunPageHotelsAdventagie6('background: url(https://www.tui.ru/getmedia/fab07f46-9184-4889-944d-1b2c74901556/disco-min);background-position: center;background-size: cover','Дискотеки и тематические вечеринки', 'Во время отпуска наслаждайтесь зажигательными вечеринками на пляже и у бассейна','Дискотеки и тематические вечеринки', 'Во время отпуска наслаждайтесь зажигательными вечеринками на пляже и у бассейна','Дискотеки и тематические вечеринки', 'Во время отпуска наслаждайтесь зажигательными вечеринками на пляже и у бассейна','Diskoteegid ja teemapeod','Puhkusel saate lõbusalt veeta aega pidudel hotelli rannas või basseini ääres','Diskotekos ir teminiai vakarėliai','Atostogų metu pasimėgaukite vakarėliais paplūdimyje ir prie baseino','Diskotēkas un tematiskās ballītes','Atvaļinājuma laikā izbaudiet aizraujošas diskotēkas pludmalē un pie baseina.'),
    
        
]

const funSunPageHotelsAdventagiesBlock6 = new Vue({
    el: '#fun-sun-page-hotels-adventagies6',
    data:{
        funSunPageHotelsAdventagies6: funSunPageHotelsAdventagies6,
        funSunPageHotelsAdventagie6: funSunPageHotelsAdventagie6
        
    }
});


// ОТели FUN SUN Названия
const funSunPageTitleAllHotels = new Vue ({
    el: '#hotels-name',
    data: {
        funSunPageAllHotelsTitleRU: 'Отели с концепцией FUN&SUN',
        funSunPageAllHotelsTitleBY: 'Отели с концепцией FUN&SUN',
        funSunPageAllHotelsTitleUA: 'Отели с концепцией FUN&SUN',
        funSunPageAllHotelsTitleEE: 'FUN&SUN kontseptsiooni hotellid',
        funSunPageAllHotelsTitleLT: 'Viešbučiai su FUN&SUN koncepcija',
        funSunPageAllHotelsTitleLV: 'Viesnīcas ar FUN&SUN koncepciju',
        
    
    }
});

// ОТели FUN SUN Названия
const funSunPageButtonsAllHotels = new Vue ({
    el: '#hotel-buttons',
    data: {
        
        
        countryName1RU: 'Турция',
        countryName1BY: 'Турция',
        countryName1UA: 'Турция',
        countryName1EE: 'Türgi',
        countryName1LT: 'Turkija',
        countryName1LV: 'Turcija',
        
        countryName2RU: 'Кипр',
        countryName2BY: 'Кипр',
        countryName2UA: 'Кипр',
        countryName2EE: 'Küpros',
        countryName2LT: 'Kipras',
        countryName2LV: 'Kipra',
        
        
    }
});







//ПРОГРАММА РАЗВЛЕЧЕНИЙ
const funSunPageEntProgramTitle = new Vue ({
    el: '#entProgram',
    data: {
        funSunPageEntProgramTitleRU: 'Развлекательная программа',
        funSunPageEntProgramTitleBY: 'Развлекательная программа',
        funSunPageEntProgramTitleUA: 'Развлекательная программа',
        funSunPageEntProgramTitleEE: 'Meelelahutus programm',
        funSunPageEntProgramTitleLT: 'Pramoginė programa',
        funSunPageEntProgramTitleLV: 'Izklaides programma',
    }
});

const funSunPageEntProgramMenu = new Vue ({
    el: '#entProgramMenu',
    data: {
        funSunPageEntProgramMenuitem1RU: 'Для детей',
        funSunPageEntProgramMenuitem2RU: 'Для подростков',
        funSunPageEntProgramMenuitem3RU: 'Для всей семьи',
        
        funSunPageEntProgramMenuitem1BY: 'Для детей',
        funSunPageEntProgramMenuitem2BY: 'Для подростков',
        funSunPageEntProgramMenuitem3BY: 'Для всей семьи',
        
        funSunPageEntProgramMenuitem1UA: 'Для детей',
        funSunPageEntProgramMenuitem2UA: 'Для подростков',
        funSunPageEntProgramMenuitem3UA: 'Для всей семьи',
        
        funSunPageEntProgramMenuitem1EE: 'Lastele',
        funSunPageEntProgramMenuitem2EE: 'Teismelistele',
        funSunPageEntProgramMenuitem3EE: 'Kogu perele',
        
        funSunPageEntProgramMenuitem1LT: 'Vaikams',
        funSunPageEntProgramMenuitem2LT: 'Paaugliams',
        funSunPageEntProgramMenuitem3LT: 'Visai šeimai',
        
        funSunPageEntProgramMenuitem1LV: 'Bērniem',
        funSunPageEntProgramMenuitem2LV: 'Pusaudžiem',
        funSunPageEntProgramMenuitem3LV: 'Visai ģimenei',
    }
});

//ПРОГРАММА РАЗВЛЕЧЕНИЙ для детей
const funSunPageEntProgram1 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunPageEntPrograms1 = [
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/ec359478-34a7-499d-a958-18e33be583de/T23);background-size: cover;', 'Утренняя зарядка / йога ', 'Утренняя зарядка / йога ', 'Утренняя зарядка / йога ', 'Hommikune võimlemine / jooga','Rytinė mankšta / joga','Rīta vingrošana / joga'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/8fa60090-1fc6-49a5-8914-c57c7f089754/T24);background-size: cover;', 'Академия плавания', 'Академия плавания', 'Академия плавания', 'Ujumisakadeemia','Plaukimo akademija','Peldēšanas akadēmija'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/9380d2e8-787c-4bad-b236-c0ee3eefa764/T25);background-size: cover;', 'Поиск сокровищ', 'Поиск сокровищ', 'Поиск сокровищ', 'Aardejaht','Lobių paieška','Dārgumu meklēšana'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/2c69d3df-23a9-4fa0-8eb6-084d1d09b2ec/T26);background-size: cover;', 'Олимпийские игры', 'Олимпийские игры', 'Олимпийские игры', 'Olümpiamängud','Olimpiniai žaidimai','Olimpiskas spēles'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/3bfca7ba-d457-4e0d-b317-71a4bc793794/T27);background-size: cover;', 'Настольные игры', 'Настольные игры', 'Настольные игры', 'Lauamängud','Stalo žaidimai','Galda spēles'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/33809e6a-d633-486a-b288-421a55a9c446/shutterstock_520075894-min);background-size: cover;', 'Квесты', 'Квесты', 'Квесты', 'Loomingulised mängud','Galvosūkiai','Kvesti'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/34a179fc-f3dc-4fd8-bd99-432353a0e92e/shutterstock_489646066-min);background-size: cover;', 'Научные эксперименты', 'Научные эксперименты', 'Научные эксперименты', 'Teaduslikud Eksperomendid','Mokslo eksperimentai','ZinĀtniskie Eksperimenti'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/7abcf532-cfce-47ae-ac41-84a75a99e493/shutterstock_761820856-min);background-size: cover;', 'Академия Футбола', 'Академия Футбола', 'Академия Футбола', 'Jalgpalliakadeemia','Futbolo akademija','Futbola akadēmija'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/23e8d862-3cb9-460c-adde-e1247aaf6d4c/T32_1);background-size: cover;', 'Дискотека Тукан Тусейшен', 'Дискотека Тукан Тусейшен', 'Дискотека Тукан Тусейшен', 'Diskoteek Toucan','Tukano diskoteka','Diskotēka Toucan Ballīte'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/0aeb7617-2573-4dcf-9dfd-6a2b531b71af/shutterstock_315127931-min);background-size: cover;', 'Киносеанс под открытым небом с попкорном', 'Киносеанс под открытым небом с попкорном', 'Киносеанс под открытым небом с попкорном', 'Vabaõhukino popkorniga','Kino teatras su spragėsiais po atviru dangum','Kino vakars ar popkornu zem klajas debess'),
    
    funSunPageEntProgram1('background: url(https://www.tui.ru/getmedia/ebfc0f3e-6a2c-48d7-b5d7-a4398923b337/shutterstock_482563132-min);background-size: cover;', 'Тематические фестивали', 'Тематические фестивали', 'Тематические фестивали', 'Temaatilised festivalid','Teminiai festivaliai','Tematiskie festivĀli'),
        
]

const funSunPageEntProgramBlock1 = new Vue({
    el: '#s3b1',
    data:{
        funSunPageEntPrograms1: funSunPageEntPrograms1,
        funSunPageEntProgram1: funSunPageEntProgram1
        
    }
});

//ПРОГРАММА РАЗВЛЕЧЕНИЙ Для подростков
const funSunPageEntProgram2 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunPageEntPrograms2 = [
    
    funSunPageEntProgram2('background: url(https://www.tui.ru/getmedia/144acc61-81ce-4862-9ec0-7c094e187720/rebus);background-size: cover;', 'Викторина', 'Викторина', 'Викторина', 'Viktoriin','Viktorina','Viktorīnas'),
    
    funSunPageEntProgram2('background: url(https://www.tui.ru/getmedia/2f6689f7-2d85-485d-9df3-fffbddde0220/event);background-size: cover;', 'Конкурсы', 'Конкурсы', 'Конкурсы','Konkursid','Konkursai','Konkursi'),
    
    funSunPageEntProgram2('background: url(https://www.tui.ru/getmedia/d500320c-457d-44c6-918f-c976268f7ac7/spgames);background-size: cover;', 'Спортивные игры', 'Спортивные игры', 'Спортивные игры','Spordimängud','Sporto žaidimai','Sporta spēles'),
    
    funSunPageEntProgram2('background: url(https://www.tui.ru/getmedia/eabe8a47-2d45-4545-ae1e-385b15f50633/club);background-size: cover;', 'Дискотека', 'Дискотека', 'Дискотека','Diskoteek','Diskoteka','Diskotēka'),
]

const funSunPageEntProgramBlock2 = new Vue({
    el: '#s3b2',
    data:{
        funSunPageEntPrograms2: funSunPageEntPrograms2,
        funSunPageEntProgram2: funSunPageEntProgram2
        
    }
});

//ПРОГРАММА РАЗВЛЕЧЕНИЙ Для всей семьи
const funSunPageEntProgram3 = (background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV) => ({background, titleRU, titleBY, titleUA, titleEE, titleLT, titleLV});

const funSunPageEntPrograms3 = [
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/93dbe7dc-f200-4130-a56e-85ae460e843e/Pilates);background-size: cover;', 'Стретчинг / Йога / Кардио', 'Стретчинг / Йога / Кардио', 'Стретчинг / Йога / Кардио','Stretching / jooga / kardio','Tempimas / Joga / Kardio','Stiepšanās / Joga / Kardio'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/dec7cb2f-0427-496b-b29e-df975d821139/shutterstock_369865703-min);background-size: cover;', 'Air Gun', 'Air Gun', 'Air Gun', 'Air Gun','Air Gun','Air Gun'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/4d455d63-9760-46ef-b06f-81b83f4744e3/volley1-min);background-size: cover;', 'Пляжный волейбол', 'Пляжный волейбол', 'Пляжный волейбол', 'Rannavõrkpall','Paplūdimio tinklinis','Pludmales volejbols'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/6ac6cb10-7cf0-4860-8c59-934d3d3b9d59/shutterstock_556528312-min_1);background-size: cover;background-position: 40% 100%', 'Стрельба из лука', 'Стрельба из лука', 'Стрельба из лука', 'Vibulaskmine','Šaudymas iš lanko','Loka šaušana'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/2ffb6089-e012-4ad2-8ccb-51f67f5087c6/aqua);background-size: cover;', 'Аквааэробика в бассейне', 'Аквааэробика в бассейне', 'Аквааэробика в бассейне', 'Vesiaeroobika basseinis','Vandens aerobika baseine','Ūdens aerobika baseinā'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/545503e0-e442-4111-9fe1-1407e7189af4/polo1-min);background-size: cover;', 'Водное поло', 'Водное поло', 'Водное поло', 'Veepall','Vandens polo','Ūdens polo'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/862a4287-d9ad-41b1-a13e-81344810c2db/step_1);background-size: cover;', 'Степ-аэробика', 'Степ-аэробика', 'Степ-аэробика', 'Step-aeroobika','Step aerobika','Step-aerobika'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/f3293581-202b-4c8f-ad03-9b0ec0305437/shutterstock_1146053129-min);background-size: cover;background-position: 60% 100%;', 'Мастер-класс по мобильной фотографии', 'Мастер-класс по мобильной фотографии', 'Мастер-класс по мобильной фотографии', 'Mobiilse fotograafia meistriklassid','Mobiliosios fotografijos pamokos','Mobīlās fotogrāfijas meistarklase'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/519f0618-2757-4456-976e-04c5937c9c55/artisty);background-size: cover;', 'Вечернее шоу', 'Вечернее шоу', 'Вечернее шоу', 'Õhtused meelelahutusprogrammid','Vakaro šou','Vakara šovi'),
    
    funSunPageEntProgram3('background: url(https://www.tui.ru/getmedia/20fb1be5-91a2-4794-9d48-fe0f3ee0569d/disco);background-size: cover;', 'Дискотека', 'Дискотека', 'Дискотека', 'Diskoteek','Diskoteka','Diskotēka'),
]

const funSunPageEntProgramBlock3 = new Vue({
    el: '#s3b3',
    data:{
        funSunPageEntPrograms3: funSunPageEntPrograms3,
        funSunPageEntProgram3: funSunPageEntProgram3
        
    }
});


//ПРОГРАММА АНИМАЦИИ СКАЧАТЬ
const funSunPageAnimationProg = new Vue ({
    el: '#funSunAnimationProgDownload',
    data: {
        //иконка
        funSunPageAnimationProgIcon: 'display:inline-block;margin-right:10px;height:32px;width:25px;vertical-align:middle;background:url(https://www.tui.ru/getmedia/da0916cf-da69-4c98-9e87-3096a923581e/pdf-icon) no-repeat top left',
        
        //Titles
        funSunPageAnimationProgTitle1RU: 'Скачайте программу анимации в отелях FUN&SUN',
        funSunPageAnimationProgTitle1BY: 'Скачайте программу анимации в отелях FUN&SUN',
        funSunPageAnimationProgTitle1UA: 'Скачайте программу анимации в отелях FUN&SUN',
        funSunPageAnimationProgTitle1EE: 'Laadige alla FUN&SUN ajakava programmi',
        funSunPageAnimationProgTitle1LT: 'Animacijos programa FUN&SUN viešbučiuose',
        funSunPageAnimationProgTitle1LV: 'Lejuplādējiet animācijas programmu FUN&SUN viesnīcas',
        
        funSunPageAnimationProgTitle2RU: 'программа анимации в отелях FUN&SUN в Турции',
        funSunPageAnimationProgTitle2BY: 'программа анимации в отелях FUN&SUN в Турции',
        funSunPageAnimationProgTitle2UA: 'программа анимации в отелях FUN&SUN в Турции',
        funSunPageAnimationProgTitle2EE: 'Türgi FUN&SUN animatsiooni programm',
        funSunPageAnimationProgTitle2LT: 'Animacijos programa FUN&SUN viešbučiuose Turkijoje',
        funSunPageAnimationProgTitle2LV: 'animācijas programma FUN&SUN viesnīcas Turcijā',
        funSunPageAnimationProgTitle2LinkRU: 'https://www.tui.ru/getmedia/f07b8f72-0a3f-4d82-963c-0274a81cdcbd/FS-RUS-program',
        
        funSunPageAnimationProgTitle3RU: 'программа анимации в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle3BY: 'программа анимации в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle3UA: 'программа анимации в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle3EE: 'Küprose FUN&SUN animatsiooni programm',
        funSunPageAnimationProgTitle3LT: 'nimacijos programa FUN&SUN viešbučiuose Kipre',
        funSunPageAnimationProgTitle3LV: 'animācijas programma FUN&SUN viesnīcas Kiprā',
        funSunPageAnimationProgTitle3LinkRU: 'https://www.tui.ru/getmedia/cefabb62-875f-44a0-8bd6-18e439051c7a/FUNSUN-Cyprus-RUS_1',
        
        funSunPageAnimationProgTitle4RU: 'вечерние шоу в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle4BY: 'вечерние шоу в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle4UA: 'вечерние шоу в отелях FUN&SUN на Кипре',
        funSunPageAnimationProgTitle4EE: 'FUN&SUN õhtused meelelahutusprogrammid',
        funSunPageAnimationProgTitle4LT: 'Vakaro šou FUN&SUN viešbučiuose Kipre',
        funSunPageAnimationProgTitle4LV: 'vakara šovi FUN&SUN viesnīcas Kiprā',
        funSunPageAnimationProgTitle4LinkRU: 'https://tui.ru/getmedia/e423049e-70ab-4d2b-9bde-9b8134102fca/vechernie-show-RU',
        
        funSunPageAnimationProgTitle5RU: 'Скачайте программу детского клуба Toucan в отелях FUN&SUN',
        funSunPageAnimationProgTitle5BY: 'Скачайте программу детского клуба Toucan в отелях FUN&SUN',
        funSunPageAnimationProgTitle5UA: 'Скачайте программу детского клуба Toucan в отелях FUN&SUN',
        funSunPageAnimationProgTitle5EE: 'Laadige alla FUN&SUN hotellide Toucan lasteprogrammi',
        funSunPageAnimationProgTitle5LT: 'Vaikų klubo Toucan programa FUN&SUN viešbučiuose',
        funSunPageAnimationProgTitle5LV: 'Lejuplādējiet bērnu kluba Toucan programmu FUN&SUN viesnīcas',
        
        funSunPageAnimationProgTitle6RU: 'программа клубов Тукан в Турции',
        funSunPageAnimationProgTitle6BY: 'программа клубов Тукан в Турции',
        funSunPageAnimationProgTitle6UA: 'программа клубов Тукан в Турции',
        funSunPageAnimationProgTitle6EE: 'Türgi Toucan klubide programm',
        funSunPageAnimationProgTitle6LT: 'Vaikų klubo Toucan programa Turkijoje',
        funSunPageAnimationProgTitle6LV: 'Toucan klubu programma Turcijā',
        funSunPageAnimationProgTitle6LinkRU: 'https://www.tui.ru/getmedia/266dd7d9-e5e2-41ad-936c-9bedca320e9f/FS-toucan-ru-19',
        
        funSunPageAnimationProgTitle7RU: 'программа клуба Тукан на Кипр FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7BY: 'программа клуба Тукан на Кипр FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7UA: 'программа клуба Тукан на Кипр FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7EE: 'Toucan programm Küprosel, FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7LT: 'Vaikų klubo Toucan programa Kipre FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7LV: 'Toucan kluba programma Kiprā FUN&SUN Vangelis Hotel & Suite 4*',
        funSunPageAnimationProgTitle7LinkRU: 'https://www.tui.ru/getmedia/16d32659-fd91-406e-944a-47dc7b744a72/programma_FS-Vangelis',
        
        funSunPageAnimationProgTitle8RU: 'программа клуба Тукан на Кипр FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8BY: 'программа клуба Тукан на Кипр FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8UA: 'программа клуба Тукан на Кипр FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8EE: 'Toucan programm Küprosel, FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8LT: 'Vaikų klubo Toucan programa Kipre FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8LV: 'Toucan kluba programma Kiprā FUN&SUN Panthea Waterpark 4*',
        funSunPageAnimationProgTitle8LinkRU: 'https://www.tui.ru/getmedia/c8a51b7d-ab2b-4fa6-a736-ee1ceb99993d/programma_FS-Panthea',
        
    }
});

//FOOTER fun sun
const funSunPageFooter = new Vue ({
    el: '#funSunFooter',
    data: {
        
        funSunPageFooterTitle1RU: 'Сайты о концепциях',
        funSunPageFooterTitle2RU: 'Контакты',
        funSunPageFooterTitle3RU: 'FUN&SUN в социальных сетях',
        
        funSunPageFooterTitle1BY: 'Сайты о концепциях',
        funSunPageFooterTitle2BY: 'Контакты',
        funSunPageFooterTitle3BY: 'FUN&SUN в социальных сетях',
        
        funSunPageFooterTitle1UA: 'Сайты о концепциях',
        funSunPageFooterTitle2UA: 'Контакты',
        funSunPageFooterTitle3UA: 'FUN&SUN в социальных сетях',
        
        funSunPageFooterTitle1EE: 'Meie kontseptsioonid',
        funSunPageFooterTitle2EE: 'Kontakt',
        funSunPageFooterTitle3EE: 'FUN&SUN sotsiaalmeedias',
        
        funSunPageFooterTitle1LT: 'Mūsų koncepcijos',
        funSunPageFooterTitle2LT: 'Kontaktai',
        funSunPageFooterTitle3LT: 'FUN&SUN socialiniuose tinkluose',
        
        funSunPageFooterTitle1LV: 'Mūsu koncepcijas',
        funSunPageFooterTitle2LV: 'Kontakti',
        funSunPageFooterTitle3LV: 'FUN&SUN sociālajos tīklos',
        
        funSunPageFooterSite1RU : 'Все концепции',
        funSunPageFooterSite2RU : 'Сайт для агентств',
        funSunPageFooterSite3RU : 'Сайт B2b',
        
        funSunPageFooterSite1BY : 'Все концепции',
        funSunPageFooterSite2BY : 'Сайт для агентств',
        funSunPageFooterSite3BY : 'Сайт B2b',
        
        funSunPageFooterSite1UA : 'Все концепции',
        funSunPageFooterSite2UA : 'Сайт для агентств',
        funSunPageFooterSite3UA : 'Сайт B2b',
        
        funSunPageFooterSite1EE : 'Kõik kontseptsioonid',
        funSunPageFooterSite2EE : 'Agentidele',
        funSunPageFooterSite3EE : 'B2B veebileht',
        
        funSunPageFooterSite1LT : 'Visos koncepcijos',
        funSunPageFooterSite2LT : 'Svetainė agentūroms',
        funSunPageFooterSite3LT : 'B2B svetainė',
        
        funSunPageFooterSite1LV : 'Visas koncepcijas',
        funSunPageFooterSite2LV : 'Aģentu vietne',
        funSunPageFooterSite3LV : 'B2B vietne',
        
        funSunPageFooterSiteLink1 : '/concepts/home/',
        
        funSunPageFooterSiteLink2RU : 'http://agent.tui.ru/',
        funSunPageFooterSiteLink3RU : 'http://b2b.tui.ru/',
        
        funSunPageFooterSiteLink2BY : 'http://agent.tui.by/',
        funSunPageFooterSiteLink3BY : 'http://b2b.tui.by/',
        
        funSunPageFooterSiteLink2UA : 'http://agent.tui.ua/',
        funSunPageFooterSiteLink3UA : 'http://b2b.tui.ua/',
        
        funSunPageFooterSiteLink2EE : 'http://agent.tui.ee/',
        funSunPageFooterSiteLink3EE : 'https://b2b.tuibaltics.eu/',
        
        funSunPageFooterSiteLink2LT : 'http://agent.tui.lt/',
        funSunPageFooterSiteLink3LT : 'https://b2b.tuibaltics.eu/',
        
        funSunPageFooterSiteLink2LV : 'http://agent.tui.lv/',
        funSunPageFooterSiteLink3LV : 'https://b2b.tuibaltics.eu/',
        
        funSunPageFooterPhoneTitleRU : '8 (495) 104-34-50',
        funSunPageFooterPhoneLinkRU : 'tel:84951043450',
        
        funSunPageFooterPhoneTitleBY : '+375 17 316 90 74',
        funSunPageFooterPhoneLinkBY : 'tel:+375173169074',
        
        funSunPageFooterPhoneTitleUA : '+380 044 401 08 08',
        funSunPageFooterPhoneLinkUA : 'tel:+3800444010808',
        
        funSunPageFooterPhoneTitleEE : '+372 3350005',
        funSunPageFooterPhoneLinkEE : 'tel:+3723350005',
        
        funSunPageFooterPhoneTitleLT : '+370 5 240 88 89',
        funSunPageFooterPhoneLinkLT : 'tel:+37052408889',
        
        funSunPageFooterPhoneTitleLV : '+371 63007772',
        funSunPageFooterPhoneLinkLV : 'tel:+37163007772',
        
        funSunPageFooterMailTitleRU : 'diffproduct@tui.ru',
        funSunPageFooterMailLinkRU : 'mailto:diffproduct@tui.ru',
        
        funSunPageFooterMailTitleBY : 'diffproduct@tui.ru',
        funSunPageFooterMailLinkBY : 'mailto:diffproduct@tui.by',
        
        funSunPageFooterMailTitleUA : 'diffproduct@tui.ua',
        funSunPageFooterMailLinkUA : 'mailto:diffproduct@tui.ua',
        
        funSunPageFooterMailTitleEE : 'tallinn@tuibaltics.eu',
        funSunPageFooterMailLinkEE : 'mailto:tallinn@tuibaltics.eu',
        
        funSunPageFooterMailTitleLT : 'book@tuibaltics.eu',
        funSunPageFooterMailLinkLT : 'mailto:book@tuibaltics.eu',
        
        funSunPageFooterMailTitleLV : 'book@tuibaltics.eu',
        funSunPageFooterMailLinkLT : 'mailto:book@tuibaltics.eu',
        
        
        funSunPageFooterInstagramLink : 'https://www.instagram.com/tui_funandsun/',
        funSunPageFooterInstagramImgLink : 'https://www.tui.ru/getmedia/2f4194da-6feb-4717-a9b0-8c58d9f77851/logo-instagram-blue',
        funSunPageFooterInstagramImgWhiteLink : 'https://agent.tui.ru/getmedia/cd28b133-b476-4008-a1d9-b4ce712d7246/logoInstagramWhite',
        
        funSunPageFooterFacebookLink : 'https://www.facebook.com/TUIFUNSUN/',
        funSunPageFooterFacebookImgLink : 'https://www.tui.ru/getmedia/5647804b-b88c-4e76-b3d3-6eafcf599045/logo-fb-blue',
        funSunPageFooterFacebookImgWhiteLink : 'https://agent.tui.ru/getmedia/047e1618-6265-4712-a091-6c62e6bd8897/logoFbWhite',
        
    }
});


//СТРАНИЦА АФИША КОНЦЕРТЫ И МАСТЕРКЛАССЫ FUN SUN
const funSunPageAfishaName = new Vue({
    el: '#funSunPageAfishaName',
    data: {
        funSunPageAfishaNameLogo: 'https://www.tui.ru/getmedia/a43e4cf0-4244-45b4-8bd4-275b7d8ba1a9/logoTopFN',
        
        funSunPageAfishaNameTitleRU: 'Твое звездное лето в отелях FUN&SUN',
        funSunPageAfishaNameTitleBY: 'Твое звездное лето в отелях FUN&SUN',
        funSunPageAfishaNameTitleUA: 'Твое звездное лето в отелях FUN&SUN',
        funSunPageAfishaNameTitleEE: 'Teie maagiline suvi FUN&SUN hotellides',
        funSunPageAfishaNameTitleLT: 'Tavo nuostabi vasara FUN&SUN viešbučiuose',
        funSunPageAfishaNameTitleLV: 'Tava neaizmirstamā vasara FUN&SUN viesnīcas',
        
        funSunPageAfishaNameButtonRU: 'Подобрать тур',
        funSunPageAfishaNameButtonBY: 'Подобрать тур',
        funSunPageAfishaNameButtonUA: 'Подобрать тур',
        funSunPageAfishaNameButtonEE: 'Broneeri',
        funSunPageAfishaNameButtonLT: 'Rezervuoti',
        funSunPageAfishaNameButtonLV: 'Izvēlēties ceļojumu',
        
    }
})

const funSunPageAfishaMainInfo = new Vue({
    el: '#funSunPageAfishaMainInfo',
    data: {
        funSunPageAfishaMainInfoTitleRU: 'Грандиозный сюрприз для гостей TUI',
        funSunPageAfishaMainInfoTitleBY: 'Грандиозный сюрприз для гостей TUI',
        funSunPageAfishaMainInfoTitleUA: 'Грандиозный сюрприз для гостей TUI',
        funSunPageAfishaMainInfoTitleEE: 'Suurejooneline kingitus turistidele',
        funSunPageAfishaMainInfoTitleLT: 'Siurprizas TUI svečiams',
        funSunPageAfishaMainInfoTitleLV: 'Grandiozais pārsteigums viesiem',
        
        funSunPageAfishaMainInfoText1RU: 'Этим летом отдыхаем в лучших турецких отелях с концертами популярных исполнителей.',
        funSunPageAfishaMainInfoText1BY: 'Этим летом отдыхаем в лучших турецких отелях с концертами популярных исполнителей.',
        funSunPageAfishaMainInfoText1UA: 'Этим летом отдыхаем в лучших турецких отелях с концертами популярных исполнителей.',
        funSunPageAfishaMainInfoText1EE: 'Sel suvel puhkame Türgi parimates hotellides. Lisaks populaarsete artistide esinemised.',
        funSunPageAfishaMainInfoText1LT: 'Šią vasarą kviečiame atostogauti geriausiuose Turkijos viešbučiuose, kur koncertuoja geriausi atlikėjai.',
        funSunPageAfishaMainInfoText1LV: 'Šajā vasarā atpūtīsimies Turcijas labākajās viesnīcas, kurās uzstāsies populārākie skatuves mākslinieki.',
        
        funSunPageAfishaMainInfoText2RU: 'А ещё вас ждут профессиональные мастер-классы от лучших wellness и fitness инструкторов!',
        funSunPageAfishaMainInfoText2BY: 'А ещё вас ждут профессиональные мастер-классы от лучших wellness и fitness инструкторов!',
        funSunPageAfishaMainInfoText2UA: 'А ещё вас ждут профессиональные мастер-классы от лучших wellness и fitness инструкторов!',
        funSunPageAfishaMainInfoText2EE: 'Teid ootavad professionaalsed mestriklassid parimate wellness ja fitness instruktorite poolt!',
        funSunPageAfishaMainInfoText2LT: 'Taip pat Jūsų laukia profesionalūs wellness ir fitness instruktoriai!',
        funSunPageAfishaMainInfoText2LV: 'Jūs gaida profesionālās meistarklases no labākajiem Wellness un Fitness instruktoriem!',
    }
})

const funSunPageAfishaBanner = new Vue ({
    el: '#funSunPageAfishaBanner',
    data: {
        funSunPageAfishaBannerLinkRU: 'https://agent.tui.ru/getmedia/ee99b904-026f-448f-bad7-02bf60b02089/bannerFs-min',
    }
})

const funSunPageAfishaHotels = new Vue ({
    el: '#blockGetRound',
    data: {
        //ОТЕЛЬ 1
        funSunPageAfishaHotelImage1: 'background: url(https://agent.tui.ru/getmedia/6d964ab6-ecc5-454f-bd8e-af8837a5bbd7/hotel1Img-min)',
        funSunPageAfishaHotelName1 : 'FUN&SUN River Resort Belek 5*',
        funSunPageAfishaHotelLink1: '/Tours/Europe/Turkey/belek/Belek/TUI-FUN-SUN-River-Resort-Belek',
        funSunPageAfishaHotelLinkClient1: '/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/',
        
        //ОТЕЛЬ 2
        funSunPageAfishaHotelImage2: 'background: url(https://agent.tui.ru/getmedia/e30b07ac-0d51-4c4a-a2c8-9d8873cf72b9/hotel2Img-min)',
        funSunPageAfishaHotelName2 : 'FUN&SUN Club Serra Palace 5*',
        funSunPageAfishaHotelLink2: '/Tours/Europe/Turkey/side/Kizilot/TUI-FUN-SUN-Club-Serra-Palace-(ex-Club-Calimera-S',
        funSunPageAfishaHotelLinkClient2: '/hotel/europe-turkey-side-kizilot-tui__fun__sun__club__serra__palace__(ex__club__calimera__s/',
        
        //ОТЕЛЬ 3
        funSunPageAfishaHotelImage3: 'background: url(https://agent.tui.ru/getmedia/c732bef6-4c7d-46bd-85bf-d5de7e001080/hotel3Img-min)',
        funSunPageAfishaHotelName3 : 'FUN&SUN Miarosa Ghazal Resort 5*',
        funSunPageAfishaHotelLink3: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Miarosa-Ghazal-Resort',
        funSunPageAfishaHotelLinkClient3: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/',
        
        //ОТЕЛЬ 4
        funSunPageAfishaHotelImage4: 'background: url(https://agent.tui.ru/getmedia/63df2739-c9c8-44e6-af78-cf6727660980/hotel4Img-min)',
        funSunPageAfishaHotelName4 : 'FUN&SUN Comfort Beach Resort 5*',
        funSunPageAfishaHotelLink4: '/Tours/Europe/Turkey/Kemer/Goynuk/TUI-FUN-SUN-Comfort-Beach-Resort',
        funSunPageAfishaHotelLinkClient4: '/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/',
        
        //ОТЕЛЬ 5
        funSunPageAfishaHotelImage5: 'background: url(https://agent.tui.ru/getmedia/11138675-0288-4249-af47-af258998266e/hotel5Img-min)',
        funSunPageAfishaHotelName5 : 'FUN&SUN Club Belek 5*',
        funSunPageAfishaHotelLink5: '/Tours/Europe/Turkey/belek/belek/TUI-FUN-SUN-Club-Belek',
        funSunPageAfishaHotelLinkClient5: '/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/',
        
        //ОТЕЛЬ 6
        funSunPageAfishaHotelImage6: 'background: url(https://agent.tui.ru/getmedia/ec5344c2-e889-4e91-8095-6d6c72b42d09/hotel6Img-min)',
        funSunPageAfishaHotelName6 : 'FUN&SUN Club Saphire 5*',
        funSunPageAfishaHotelLink6: '/Tours/Europe/Turkey/kemer/Tekirova/TUI-FUN-SUN-Club-Saphire/',
        funSunPageAfishaHotelLinkClient6: '/hotel/europe-turkey-kemer-tekirova-tui__fun__sun__club__saphire/',
        
        //ОТЕЛЬ 7
        funSunPageAfishaHotelImage7: 'background: url(https://agent.tui.ru/getmedia/e0a3f2db-f85b-4c57-834a-d0c6e1ca8133/hotel7Img-min)',
        funSunPageAfishaHotelName7 : 'FUN&SUN Club Di Finica 5*',
        funSunPageAfishaHotelLink7: '/Tours/Europe/Turkey/Kemer/Finike/TUI-FUN-SUN-Club-Di-Finica',
        funSunPageAfishaHotelLinkClient7: '/hotel/europe-turkey-kemer-finike-tui__fun__sun__club__di__finica/',
        
        //КНОПКИ
        funSunPageAfishaHotelButtonRU: 'Выбрать тур',
        funSunPageAfishaHotelButtonBY: 'Выбрать тур',
        funSunPageAfishaHotelButtonUA: 'Выбрать тур',
        funSunPageAfishaHotelButtonEE: 'Broneeri',
        funSunPageAfishaHotelButtonLT: 'Pasirinkti',
        funSunPageAfishaHotelButtonLV: 'Izvēlēties ceļojumu',
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 1
        //RU ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1RU: '28 апреля 2019',
        funSunPageAfishaHotel1Artist1RU: 'Estradarada',
        
        funSunPageAfishaHotel1Date2RU: '1 июня 2019',
        funSunPageAfishaHotel1Artist2RU: 'Белый орёл',
        
        funSunPageAfishaHotel1Date3RU: '29 июня 2019',
        funSunPageAfishaHotel1Artist3RU: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4RU: '30 июля 2019',
        funSunPageAfishaHotel1Artist4RU: 'Пропаганда',
        
        funSunPageAfishaHotel1Date5RU: '26 августа 2019',
        funSunPageAfishaHotel1Artist5RU: 'Virus!',
        
        funSunPageAfishaHotel1Date6RU: '21 сентября 2019',
        funSunPageAfishaHotel1Artist6RU: 'Корни',
        
        
        //BY ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1BY: '28 апреля 2019',
        funSunPageAfishaHotel1Artist1BY: 'Estradarada',
        
        funSunPageAfishaHotel1Date2BY: '1 июня 2019',
        funSunPageAfishaHotel1Artist2BY: 'Белый орёл',
        
        funSunPageAfishaHotel1Date3BY: '29 июня 2019',
        funSunPageAfishaHotel1Artist3BY: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4BY: '30 июля 2019',
        funSunPageAfishaHotel1Artist4BY: 'Пропаганда',
        
        funSunPageAfishaHotel1Date5BY: '26 августа 2019',
        funSunPageAfishaHotel1Artist5BY: 'Virus!',
        
        funSunPageAfishaHotel1Date6BY: '21 сентября 2019',
        funSunPageAfishaHotel1Artist6BY: 'Корни',
        
        
        //UA ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1UA: '28 апреля 2019',
        funSunPageAfishaHotel1Artist1UA: 'Estradarada',
        
        funSunPageAfishaHotel1Date2UA: '1 июня 2019',
        funSunPageAfishaHotel1Artist2UA: 'Белый орёл',
        
        funSunPageAfishaHotel1Date3UA: '29 июня 2019',
        funSunPageAfishaHotel1Artist3UA: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4UA: '30 июля 2019',
        funSunPageAfishaHotel1Artist4UA: 'Пропаганда',
        
        funSunPageAfishaHotel1Date5UA: '26 августа 2019',
        funSunPageAfishaHotel1Artist5UA: 'Virus!',
        
        funSunPageAfishaHotel1Date6UA: '21 сентября 2019',
        funSunPageAfishaHotel1Artist6UA: 'Корни',
        
        
        //EE ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1EE: '28 aprill 2019',
        funSunPageAfishaHotel1Artist1EE: 'Estradarada',
        
        funSunPageAfishaHotel1Date2EE: '1 juuni 2019',
        funSunPageAfishaHotel1Artist2EE: 'White Eagle',
        
        funSunPageAfishaHotel1Date3EE: '29 juuni 2019',
        funSunPageAfishaHotel1Artist3EE: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4EE: '30 juuli 2019',
        funSunPageAfishaHotel1Artist4EE: 'Propaganda',
        
        funSunPageAfishaHotel1Date5EE: '26 august 2019',
        funSunPageAfishaHotel1Artist5EE: 'Virus!',
        
        funSunPageAfishaHotel1Date6EE: '21 september 2019',
        funSunPageAfishaHotel1Artist6EE: 'Korni',
        
        
        //LT ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1LT: '2019 balandžio 28',
        funSunPageAfishaHotel1Artist1LT: 'Estradarada',
        
        funSunPageAfishaHotel1Date2LT: '2019 birželio 1',
        funSunPageAfishaHotel1Artist2LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel1Date3LT: '2019 birželio 29',
        funSunPageAfishaHotel1Artist3LT: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4LT: '2019 birželio 30',
        funSunPageAfishaHotel1Artist4LT: 'Propaganda',
        
        funSunPageAfishaHotel1Date5LT: '2019 rugpjūčio 30',
        funSunPageAfishaHotel1Artist5LT: 'Virus!',
        
        funSunPageAfishaHotel1Date6LT: '2019 rugsėjo 21',
        funSunPageAfishaHotel1Artist6LT: 'Korni',
        
        
        //LV ОТЕЛЬ 1
        funSunPageAfishaHotel1Date1LV: '2019. gada 28. aprīlī',
        funSunPageAfishaHotel1Artist1LV: 'Estradarada',
        
        funSunPageAfishaHotel1Date2LV: '2019. gada 1.jūnijā',
        funSunPageAfishaHotel1Artist2LV: 'Belij orel',
        
        funSunPageAfishaHotel1Date3LV: '2019. gada 29. jūnijā',
        funSunPageAfishaHotel1Artist3LV: 'Rumbero’s',
        
        funSunPageAfishaHotel1Date4LV: '2019. gada 30. jūlijā',
        funSunPageAfishaHotel1Artist4LV: 'Propaganda',
        
        funSunPageAfishaHotel1Date5LV: '2019. gada 26. augustā',
        funSunPageAfishaHotel1Artist5LV: 'Virus!',
        
        funSunPageAfishaHotel1Date6LV: '2019. gada 21. septembrī',
        funSunPageAfishaHotel1Artist6LV: 'Korni',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 2
        //RU ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1RU: '30 апреля 2019',
        funSunPageAfishaHotel2Artist1RU: 'Estradarada',
        
        funSunPageAfishaHotel2Date2RU: '5 июня 2019',
        funSunPageAfishaHotel2Artist2RU: 'Белый орёл',
        
        funSunPageAfishaHotel2Date3RU: '3 июля 2019',
        funSunPageAfishaHotel2Artist3RU: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4RU: '1 августа 2019',
        funSunPageAfishaHotel2Artist4RU: 'Пропаганда',
        
        funSunPageAfishaHotel2Date5RU: '30 августа 2019',
        funSunPageAfishaHotel2Artist5RU: 'Virus!',
        
        funSunPageAfishaHotel2Date6RU: '25 сентября 2019',
        funSunPageAfishaHotel2Artist6RU: 'Корни',
        
        
        //BY ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1BY: '30 апреля 2019',
        funSunPageAfishaHotel2Artist1BY: 'Estradarada',
        
        funSunPageAfishaHotel2Date2BY: '5 июня 2019',
        funSunPageAfishaHotel2Artist2BY: 'Белый орёл',
        
        funSunPageAfishaHotel2Date3BY: '3 июля 2019',
        funSunPageAfishaHotel2Artist3BY: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4BY: '1 августа 2019',
        funSunPageAfishaHotel2Artist4BY: 'Пропаганда',
        
        funSunPageAfishaHotel2Date5BY: '30 августа 2019',
        funSunPageAfishaHotel2Artist5BY: 'Virus!',
        
        funSunPageAfishaHotel2Date6BY: '25 сентября 2019',
        funSunPageAfishaHotel2Artist6BY: 'Корни',
        
        
        //UA ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1UA: '30 апреля 2019',
        funSunPageAfishaHotel2Artist1UA: 'Estradarada',
        
        funSunPageAfishaHotel2Date2UA: '5 июня 2019',
        funSunPageAfishaHotel2Artist2UA: 'Белый орёл',
        
        funSunPageAfishaHotel2Date3UA: '3 июля 2019',
        funSunPageAfishaHotel2Artist3UA: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4UA: '1 августа 2019',
        funSunPageAfishaHotel2Artist4UA: 'Пропаганда',
        
        funSunPageAfishaHotel2Date5UA: '30 августа 2019',
        funSunPageAfishaHotel2Artist5UA: 'Virus!',
        
        funSunPageAfishaHotel2Date6UA: '25 сентября 2019',
        funSunPageAfishaHotel2Artist6UA: 'Корни',
        
        
        //EE ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1EE: '30 aprill 2019',
        funSunPageAfishaHotel2Artist1EE: 'Estradarada',
        
        funSunPageAfishaHotel2Date2EE: '5 juuni 2019',
        funSunPageAfishaHotel2Artist2EE: 'White Eagle',
        
        funSunPageAfishaHotel2Date3EE: '3 juuli 2019',
        funSunPageAfishaHotel2Artist3EE: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4EE: '1 august 2019',
        funSunPageAfishaHotel2Artist4EE: 'Propaganda',
        
        funSunPageAfishaHotel2Date5EE: '30 august 2019',
        funSunPageAfishaHotel2Artist5EE: 'Virus!',
        
        funSunPageAfishaHotel2Date6EE: '25 september 2019',
        funSunPageAfishaHotel2Artist6EE: 'Korni',
        
        
        //LT ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1LT: '2019 balandžio 30',
        funSunPageAfishaHotel2Artist1LT: 'Estradarada',
        
        funSunPageAfishaHotel2Date2LT: '2019 birželio 5',
        funSunPageAfishaHotel2Artist2LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel2Date3LT: '2019 birželio 3',
        funSunPageAfishaHotel2Artist3LT: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4LT: '2019 rugpjūčio 1',
        funSunPageAfishaHotel2Artist4LT: 'Propaganda',
        
        funSunPageAfishaHotel2Date5LT: '2019 rugpjūčio 30',
        funSunPageAfishaHotel2Artist5LT: 'Virus!',
        
        funSunPageAfishaHotel2Date6LT: '2019 rugsėjo 25',
        funSunPageAfishaHotel2Artist6LT: 'Korni',
        
        
        //LV ОТЕЛЬ 2
        funSunPageAfishaHotel2Date1LV: '2019.gada 30. aprīlī',
        funSunPageAfishaHotel2Artist1LV: 'Estradarada',
        
        funSunPageAfishaHotel2Date2LV: '2019.gada 5. jūnijā',
        funSunPageAfishaHotel2Artist2LV: 'Belij orel',
        
        funSunPageAfishaHotel2Date3LV: '2019.gada 3. jūlijā',
        funSunPageAfishaHotel2Artist3LV: 'Rumbero’s',
        
        funSunPageAfishaHotel2Date4LV: '2019.gada 1. augustā',
        funSunPageAfishaHotel2Artist4LV: 'Propaganda',
        
        funSunPageAfishaHotel2Date5LV: '2019.gada 30. augustā',
        funSunPageAfishaHotel2Artist5LV: 'Virus!',
        
        funSunPageAfishaHotel2Date6LV: '2019.gada 25. septembrī',
        funSunPageAfishaHotel2Artist6LV: 'Korni',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 3
        //RU ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1RU: '7 мая 2019',
        funSunPageAfishaHotel3Artist1RU: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2RU: '4 июня 2019',
        funSunPageAfishaHotel3Artist2RU: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3RU: '1 июля 2019',
        funSunPageAfishaHotel3Artist3RU: 'Пропаганда',
        
        funSunPageAfishaHotel3Date4RU: '30 июля 2019',
        funSunPageAfishaHotel3Artist4RU: 'Белый орёл',
        
        funSunPageAfishaHotel3Date5RU: '23 августа 2019',
        funSunPageAfishaHotel3Artist5RU: 'Корни',
        
        funSunPageAfishaHotel3Date6RU: '22 сентября 2019',
        funSunPageAfishaHotel3Artist6RU: 'Estradarada',
        
        
        //BY ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1BY: '7 мая 2019',
        funSunPageAfishaHotel3Artist1BY: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2BY: '4 июня 2019',
        funSunPageAfishaHotel3Artist2BY: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3BY: '1 июля 2019',
        funSunPageAfishaHotel3Artist3BY: 'Пропаганда',
        
        funSunPageAfishaHotel3Date4BY: '30 июля 2019',
        funSunPageAfishaHotel3Artist4BY: 'Белый орёл',
        
        funSunPageAfishaHotel3Date5BY: '23 августа 2019',
        funSunPageAfishaHotel3Artist5BY: 'Корни',
        
        funSunPageAfishaHotel3Date6BY: '22 сентября 2019',
        funSunPageAfishaHotel3Artist6BY: 'Estradarada',
        
        
        //UA ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1UA: '7 мая 2019',
        funSunPageAfishaHotel3Artist1UA: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2UA: '4 июня 2019',
        funSunPageAfishaHotel3Artist2UA: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3UA: '1 июля 2019',
        funSunPageAfishaHotel3Artist3UA: 'Пропаганда',
        
        funSunPageAfishaHotel3Date4UA: '30 июля 2019',
        funSunPageAfishaHotel3Artist4UA: 'Белый орёл',
        
        funSunPageAfishaHotel3Date5UA: '23 августа 2019',
        funSunPageAfishaHotel3Artist5UA: 'Корни',
        
        funSunPageAfishaHotel3Date6UA: '22 сентября 2019',
        funSunPageAfishaHotel3Artist6UA: 'Estradarada',
        
        
        //EE ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1EE: '7 mai 2019',
        funSunPageAfishaHotel3Artist1EE: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2EE: '4 juuni 2019',
        funSunPageAfishaHotel3Artist2EE: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3EE: '1 juuli 2019',
        funSunPageAfishaHotel3Artist3EE: 'Propaganda',
        
        funSunPageAfishaHotel3Date4EE: '30 juuli 2019',
        funSunPageAfishaHotel3Artist4EE: 'White Eagle',
        
        funSunPageAfishaHotel3Date5EE: '23 august 2019',
        funSunPageAfishaHotel3Artist5EE: 'Korni',
        
        funSunPageAfishaHotel3Date6EE: '22 september 2019',
        funSunPageAfishaHotel3Artist6EE: 'Estradarada',
        
        
        //LT ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1LT: '2019 gegužės 7',
        funSunPageAfishaHotel3Artist1LT: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2LT: '2019 birželio 4',
        funSunPageAfishaHotel3Artist2LT: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3LT: '2019 liepos 1',
        funSunPageAfishaHotel3Artist3LT: 'Propaganda',
        
        funSunPageAfishaHotel3Date4LT: '2019 liepos 30',
        funSunPageAfishaHotel3Artist4LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel3Date5LT: '2019 rugpjūčio 23',
        funSunPageAfishaHotel3Artist5LT: 'Korni',
        
        funSunPageAfishaHotel3Date6LT: '2019 rugsėjo 22',
        funSunPageAfishaHotel3Artist6LT: 'Estradarada',
        
        
        //LV ОТЕЛЬ 3
        funSunPageAfishaHotel3Date1LV: '2019.gada 7. maijā',
        funSunPageAfishaHotel3Artist1LV: 'Rumbero’s',
        
        funSunPageAfishaHotel3Date2LV: '2019.gada 4. jūnijā',
        funSunPageAfishaHotel3Artist2LV: 'VIRUS!',
        
        funSunPageAfishaHotel3Date3LV: '2019.gada 1. jūlijā',
        funSunPageAfishaHotel3Artist3LV: 'Propaganda',
        
        funSunPageAfishaHotel3Date4LV: '2019.gada 30. jūlijā',
        funSunPageAfishaHotel3Artist4LV: 'Belij orel',
        
        funSunPageAfishaHotel3Date5LV: '2019.gada 23. augustā',
        funSunPageAfishaHotel3Artist5LV: 'Korni',
        
        funSunPageAfishaHotel3Date6LV: '2019.gada 22.septembrī',
        funSunPageAfishaHotel3Artist6LV: 'Estradarada',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 4
        //RU ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1RU: '6 мая 2019',
        funSunPageAfishaHotel4Artist1RU: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2RU: '3 июня 2019',
        funSunPageAfishaHotel4Artist2RU: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3RU: '30 июня 2019',
        funSunPageAfishaHotel4Artist3RU: 'Пропаганда',
        
        funSunPageAfishaHotel4Date4RU: '28 июля 2019',
        funSunPageAfishaHotel4Artist4RU: 'Белый орёл',
        
        funSunPageAfishaHotel4Date5RU: '21 августа 2019',
        funSunPageAfishaHotel4Artist5RU: 'Корни',
        
        funSunPageAfishaHotel4Date6RU: '20 сентября 2019',
        funSunPageAfishaHotel4Artist6RU: 'Estradarada',
        
        
        //BY ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1BY: '6 мая 2019',
        funSunPageAfishaHotel4Artist1BY: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2BY: '3 июня 2019',
        funSunPageAfishaHotel4Artist2BY: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3BY: '30 июня 2019',
        funSunPageAfishaHotel4Artist3BY: 'Пропаганда',
        
        funSunPageAfishaHotel4Date4BY: '28 июля 2019',
        funSunPageAfishaHotel4Artist4BY: 'Белый орёл',
        
        funSunPageAfishaHotel4Date5BY: '21 августа 2019',
        funSunPageAfishaHotel4Artist5BY: 'Корни',
        
        funSunPageAfishaHotel4Date6BY: '20 сентября 2019',
        funSunPageAfishaHotel4Artist6BY: 'Estradarada',
        
        
        //UA ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1UA: '6 мая 2019',
        funSunPageAfishaHotel4Artist1UA: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2UA: '3 июня 2019',
        funSunPageAfishaHotel4Artist2UA: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3UA: '30 июня 2019',
        funSunPageAfishaHotel4Artist3UA: 'Пропаганда',
        
        funSunPageAfishaHotel4Date4UA: '28 июля 2019',
        funSunPageAfishaHotel4Artist4UA: 'Белый орёл',
        
        funSunPageAfishaHotel4Date5UA: '21 августа 2019',
        funSunPageAfishaHotel4Artist5UA: 'Корни',
        
        funSunPageAfishaHotel4Date6UA: '20 сентября 2019',
        funSunPageAfishaHotel4Artist6UA: 'Estradarada',
        
        
        //EE ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1EE: '6 mai 2019',
        funSunPageAfishaHotel4Artist1EE: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2EE: '3 juuni 2019',
        funSunPageAfishaHotel4Artist2EE: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3EE: '30 juuni 2019',
        funSunPageAfishaHotel4Artist3EE: 'Propaganda',
        
        funSunPageAfishaHotel4Date4EE: '28 juuli 2019',
        funSunPageAfishaHotel4Artist4EE: 'White Eagle',
        
        funSunPageAfishaHotel4Date5EE: '21 august 2019',
        funSunPageAfishaHotel4Artist5EE: 'Korni',
        
        funSunPageAfishaHotel4Date6EE: '20 september 2019',
        funSunPageAfishaHotel4Artist6EE: 'Estradarada',
        
        
        //LT ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1LT: '2019 gegužės 6',
        funSunPageAfishaHotel4Artist1LT: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2LT: '2019 birželio 3',
        funSunPageAfishaHotel4Artist2LT: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3LT: '2019 birželio 30',
        funSunPageAfishaHotel4Artist3LT: 'Propaganda',
        
        funSunPageAfishaHotel4Date4LT: '2019 birželio 28',
        funSunPageAfishaHotel4Artist4LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel4Date5LT: '2019 rugpjūčio 21',
        funSunPageAfishaHotel4Artist5LT: 'Korni',
        
        funSunPageAfishaHotel4Date6LT: '2019 rugsėjo 20',
        funSunPageAfishaHotel4Artist6LT: 'Estradarada',
        
        
        //LV ОТЕЛЬ 4
        funSunPageAfishaHotel4Date1LV: '2019.gada 6.maijā',
        funSunPageAfishaHotel4Artist1LV: 'Rumbero’s',
        
        funSunPageAfishaHotel4Date2LV: '2019.gada 3. jūnijā',
        funSunPageAfishaHotel4Artist2LV: 'VIRUS!',
        
        funSunPageAfishaHotel4Date3LV: '2019.gada 30. jūnijā',
        funSunPageAfishaHotel4Artist3LV: 'Propaganda',
        
        funSunPageAfishaHotel4Date4LV: '2019.gada 28. jūlijā',
        funSunPageAfishaHotel4Artist4LV: 'Belij orel',
        
        funSunPageAfishaHotel4Date5LV: '2019.gada 21.augustā',
        funSunPageAfishaHotel4Artist5LV: 'Korni',
        
        funSunPageAfishaHotel4Date6LV: '2019.gada 20. septembrī',
        funSunPageAfishaHotel4Artist6LV: 'Estradarada',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 5
        //RU ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1RU: '29 апреля 2019',
        funSunPageAfishaHotel5Artist1RU: 'Estradarada',
        
        funSunPageAfishaHotel5Date2RU: '3 июня 2019',
        funSunPageAfishaHotel5Artist2RU: 'Белый орёл',
        
        funSunPageAfishaHotel5Date3RU: '1 июля 2019',
        funSunPageAfishaHotel5Artist3RU: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4RU: '31 июля 2019',
        funSunPageAfishaHotel5Artist4RU: 'Пропаганда',
        
        funSunPageAfishaHotel5Date5RU: '28 августа 2019',
        funSunPageAfishaHotel5Artist5RU: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6RU: '23 сентября 2019',
        funSunPageAfishaHotel5Artist6RU: 'Корни',
        
        
        
        //BY ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1BY: '29 апреля 2019',
        funSunPageAfishaHotel5Artist1BY: 'Estradarada',
        
        funSunPageAfishaHotel5Date2BY: '3 июня 2019',
        funSunPageAfishaHotel5Artist2BY: 'Белый орёл',
        
        funSunPageAfishaHotel5Date3BY: '1 июля 2019',
        funSunPageAfishaHotel5Artist3BY: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4BY: '31 июля 2019',
        funSunPageAfishaHotel5Artist4BY: 'Пропаганда',
        
        funSunPageAfishaHotel5Date5BY: '28 августа 2019',
        funSunPageAfishaHotel5Artist5BY: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6BY: '23 сентября 2019',
        funSunPageAfishaHotel5Artist6BY: 'Корни',
        
        
        
        //UA ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1UA: '29 апреля 2019',
        funSunPageAfishaHotel5Artist1UA: 'Estradarada',
        
        funSunPageAfishaHotel5Date2UA: '3 июня 2019',
        funSunPageAfishaHotel5Artist2UA: 'Белый орёл',
        
        funSunPageAfishaHotel5Date3UA: '1 июля 2019',
        funSunPageAfishaHotel5Artist3UA: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4UA: '31 июля 2019',
        funSunPageAfishaHotel5Artist4UA: 'Пропаганда',
        
        funSunPageAfishaHotel5Date5UA: '28 августа 2019',
        funSunPageAfishaHotel5Artist5UA: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6UA: '23 сентября 2019',
        funSunPageAfishaHotel5Artist6UA: 'Корни',
        
        
        //EE ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1EE: '29 aprill 2019',
        funSunPageAfishaHotel5Artist1EE: 'Estradarada',
        
        funSunPageAfishaHotel5Date2EE: '3 juuni 2019',
        funSunPageAfishaHotel5Artist2EE: 'White Eagle',
        
        funSunPageAfishaHotel5Date3EE: '1 juuli 2019',
        funSunPageAfishaHotel5Artist3EE: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4EE: '31 juuli 2019',
        funSunPageAfishaHotel5Artist4EE: 'Propaganda',
        
        funSunPageAfishaHotel5Date5EE: '28 august 2019',
        funSunPageAfishaHotel5Artist5EE: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6EE: '23 september 2019',
        funSunPageAfishaHotel5Artist6EE: 'Korni',
        
        
        //LT ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1LT: '2019 balandžio 29',
        funSunPageAfishaHotel5Artist1LT: 'Estradarada',
        
        funSunPageAfishaHotel5Date2LT: '2019 birželio 3',
        funSunPageAfishaHotel5Artist2LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel5Date3LT: '2019 liepos 1',
        funSunPageAfishaHotel5Artist3LT: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4LT: '2019 liepos 31',
        funSunPageAfishaHotel5Artist4LT: 'Propaganda',
        
        funSunPageAfishaHotel5Date5LT: '2019 rugpjūčio 28',
        funSunPageAfishaHotel5Artist5LT: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6LT: '2019 rugsėjo 23',
        funSunPageAfishaHotel5Artist6LT: 'Korni',
        
        
        //LV ОТЕЛЬ 5
        funSunPageAfishaHotel5Date1LV: '2019.gada 29. aprīlī',
        funSunPageAfishaHotel5Artist1LV: 'Estradarada',
        
        funSunPageAfishaHotel5Date2LV: '2019. gada 3. jūnijā',
        funSunPageAfishaHotel5Artist2LV: 'Belij orel',
        
        funSunPageAfishaHotel5Date3LV: '2019. gada 1. jūlijā',
        funSunPageAfishaHotel5Artist3LV: 'Rumbero’s',
        
        funSunPageAfishaHotel5Date4LV: '2019.gada 31. jūlijā',
        funSunPageAfishaHotel5Artist4LV: 'Propaganda',
        
        funSunPageAfishaHotel5Date5LV: '2019. gada 28. augustā',
        funSunPageAfishaHotel5Artist5LV: 'VIRUS!',
        
        funSunPageAfishaHotel5Date6LV: '2019.gada 23. septembrī',
        funSunPageAfishaHotel5Artist6LV: 'Korni',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 6
        //RU ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1RU: '8 мая 2019',
        funSunPageAfishaHotel6Artist1RU: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2RU: '6 июня 2019',
        funSunPageAfishaHotel6Artist2RU: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3RU: '3 июля 2019',
        funSunPageAfishaHotel6Artist3RU: 'Пропаганда',
        
        funSunPageAfishaHotel6Date4RU: '1 августа 2019',
        funSunPageAfishaHotel6Artist4RU: 'Белый орёл',
        
        funSunPageAfishaHotel6Date5RU: '25 августа 2019',
        funSunPageAfishaHotel6Artist5RU: 'Корни',
        
        funSunPageAfishaHotel6Date6RU: '24 сентября 2019',
        funSunPageAfishaHotel6Artist6RU: 'Estradarada',
        
        
        //BY ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1BY: '8 мая 2019',
        funSunPageAfishaHotel6Artist1BY: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2BY: '6 июня 2019',
        funSunPageAfishaHotel6Artist2BY: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3BY: '3 июля 2019',
        funSunPageAfishaHotel6Artist3BY: 'Пропаганда',
        
        funSunPageAfishaHotel6Date4BY: '1 августа 2019',
        funSunPageAfishaHotel6Artist4BY: 'Белый орёл',
        
        funSunPageAfishaHotel6Date5BY: '25 августа 2019',
        funSunPageAfishaHotel6Artist5BY: 'Корни',
        
        funSunPageAfishaHotel6Date6BY: '24 сентября 2019',
        funSunPageAfishaHotel6Artist6BY: 'Estradarada',
        
        
        //UA ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1UA: '8 мая 2019',
        funSunPageAfishaHotel6Artist1UA: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2UA: '6 июня 2019',
        funSunPageAfishaHotel6Artist2UA: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3UA: '3 июля 2019',
        funSunPageAfishaHotel6Artist3UA: 'Пропаганда',
        
        funSunPageAfishaHotel6Date4UA: '1 августа 2019',
        funSunPageAfishaHotel6Artist4UA: 'Белый орёл',
        
        funSunPageAfishaHotel6Date5UA: '25 августа 2019',
        funSunPageAfishaHotel6Artist5UA: 'Корни',
        
        funSunPageAfishaHotel6Date6UA: '24 сентября 2019',
        funSunPageAfishaHotel6Artist6UA: 'Estradarada',
        
        
        //EE ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1EE: '8 mai 2019',
        funSunPageAfishaHotel6Artist1EE: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2EE: '6 juuni 2019',
        funSunPageAfishaHotel6Artist2EE: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3EE: '3 juuli 2019',
        funSunPageAfishaHotel6Artist3EE: 'Propaganda',
        
        funSunPageAfishaHotel6Date4EE: '1 august 2019',
        funSunPageAfishaHotel6Artist4EE: 'White Eagle',
        
        funSunPageAfishaHotel6Date5EE: '25 august 2019',
        funSunPageAfishaHotel6Artist5EE: 'Korni',
        
        funSunPageAfishaHotel6Date6EE: '24 september 2019',
        funSunPageAfishaHotel6Artist6EE: 'Estradarada',
        
        
        //LT ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1LT: '2019 gegužės 8',
        funSunPageAfishaHotel6Artist1LT: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2LT: '2019 birželio 6',
        funSunPageAfishaHotel6Artist2LT: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3LT: '2019 birželio 3',
        funSunPageAfishaHotel6Artist3LT: 'Propaganda',
        
        funSunPageAfishaHotel6Date4LT: '2019 rugpjūčio 1',
        funSunPageAfishaHotel6Artist4LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel6Date5LT: '2019 rugpjūčio 25',
        funSunPageAfishaHotel6Artist5LT: 'Korni',
        
        funSunPageAfishaHotel6Date6LT: '2019 rugpjūčio 24',
        funSunPageAfishaHotel6Artist6LT: 'Estradarada',
        
        
        //LV ОТЕЛЬ 6
        funSunPageAfishaHotel6Date1LV: '2019.gada 8.maijā',
        funSunPageAfishaHotel6Artist1LV: 'Rumbero’s',
        
        funSunPageAfishaHotel6Date2LV: '2019.gada 6. jūnijā',
        funSunPageAfishaHotel6Artist2LV: 'VIRUS!',
        
        funSunPageAfishaHotel6Date3LV: '2019.gada 3. jūlijā',
        funSunPageAfishaHotel6Artist3LV: 'Propaganda',
        
        funSunPageAfishaHotel6Date4LV: '2019. gada 1. augustā',
        funSunPageAfishaHotel6Artist4LV: 'Belij orel',
        
        funSunPageAfishaHotel6Date5LV: '2019. gada 25.augustā',
        funSunPageAfishaHotel6Artist5LV: 'Korni',
        
        funSunPageAfishaHotel6Date6LV: '2019.gada 24. septembrī',
        funSunPageAfishaHotel6Artist6LV: 'Estradarada',
        
        
        
        
        
        //ДАТЫ И АРТИСТЫ ОТЕЛЬ 7
        //RU ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1RU: '9 мая 2019',
        funSunPageAfishaHotel7Artist1RU: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2RU: '8 июня 2019',
        funSunPageAfishaHotel7Artist2RU: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3RU: '4 июля 2019',
        funSunPageAfishaHotel7Artist3RU: 'Пропаганда',
        
        funSunPageAfishaHotel7Date4RU: '3 августа 2019',
        funSunPageAfishaHotel7Artist4RU: 'Белый орёл',
        
        funSunPageAfishaHotel7Date5RU: '27 августа 2019',
        funSunPageAfishaHotel7Artist5RU: 'Корни',
        
        funSunPageAfishaHotel7Date6RU: '26 сентября 2019',
        funSunPageAfishaHotel7Artist6RU: 'Estradarada',
        
        
        //BY ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1BY: '9 мая 2019',
        funSunPageAfishaHotel7Artist1BY: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2BY: '8 июня 2019',
        funSunPageAfishaHotel7Artist2BY: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3BY: '4 июля 2019',
        funSunPageAfishaHotel7Artist3BY: 'Пропаганда',
        
        funSunPageAfishaHotel7Date4BY: '3 августа 2019',
        funSunPageAfishaHotel7Artist4BY: 'Белый орёл',
        
        funSunPageAfishaHotel7Date5BY: '27 августа 2019',
        funSunPageAfishaHotel7Artist5BY: 'Корни',
        
        funSunPageAfishaHotel7Date6BY: '26 сентября 2019',
        funSunPageAfishaHotel7Artist6BY: 'Estradarada',
        
        
        //UA ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1UA: '9 мая 2019',
        funSunPageAfishaHotel7Artist1UA: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2UA: '8 июня 2019',
        funSunPageAfishaHotel7Artist2UA: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3UA: '4 июля 2019',
        funSunPageAfishaHotel7Artist3UA: 'Пропаганда',
        
        funSunPageAfishaHotel7Date4UA: '3 августа 2019',
        funSunPageAfishaHotel7Artist4UA: 'Белый орёл',
        
        funSunPageAfishaHotel7Date5UA: '27 августа 2019',
        funSunPageAfishaHotel7Artist5UA: 'Корни',
        
        funSunPageAfishaHotel7Date6UA: '26 сентября 2019',
        funSunPageAfishaHotel7Artist6UA: 'Estradarada',
        
        
        //EE ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1EE: '9 мая 2019',
        funSunPageAfishaHotel7Artist1EE: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2EE: '8 juuni 2019',
        funSunPageAfishaHotel7Artist2EE: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3EE: '4 juuli 2019',
        funSunPageAfishaHotel7Artist3EE: 'Propaganda',
        
        funSunPageAfishaHotel7Date4EE: '3 august 2019',
        funSunPageAfishaHotel7Artist4EE: 'White Eagle',
        
        funSunPageAfishaHotel7Date5EE: '27 august 2019',
        funSunPageAfishaHotel7Artist5EE: 'Korni',
        
        funSunPageAfishaHotel7Date6EE: '26 september 2019',
        funSunPageAfishaHotel7Artist6EE: 'Estradarada',
        
        
        //LT ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1LT: '2019 gegužės 9',
        funSunPageAfishaHotel7Artist1LT: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2LT: '2019 birželio 8',
        funSunPageAfishaHotel7Artist2LT: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3LT: '2019 birželio 4',
        funSunPageAfishaHotel7Artist3LT: 'Propaganda',
        
        funSunPageAfishaHotel7Date4LT: '2019 rugpjūčio 3',
        funSunPageAfishaHotel7Artist4LT: 'Baltasis erelis',
        
        funSunPageAfishaHotel7Date5LT: '2019 rugpjūčio 27',
        funSunPageAfishaHotel7Artist5LT: 'Korni',
        
        funSunPageAfishaHotel7Date6LT: '2019 rugsėjo 26',
        funSunPageAfishaHotel7Artist6LT: 'Estradarada',
        
        
        //LV ОТЕЛЬ 7
        funSunPageAfishaHotel7Date1LV: '2019.gada 8. jūnijā',
        funSunPageAfishaHotel7Artist1LV: 'Rumbero’s',
        
        funSunPageAfishaHotel7Date2LV: '2019.gada 8. jūnijā',
        funSunPageAfishaHotel7Artist2LV: 'VIRUS!',
        
        funSunPageAfishaHotel7Date3LV: '2019. gada 4. jūlijā',
        funSunPageAfishaHotel7Artist3LV: 'Propaganda',
        
        funSunPageAfishaHotel7Date4LV: '2019. gada 3. augustā',
        funSunPageAfishaHotel7Artist4LV: 'Belij orel',
        
        funSunPageAfishaHotel7Date5LV: '2019. gada 27. augustā',
        funSunPageAfishaHotel7Artist5LV: 'Korni',
        
        funSunPageAfishaHotel7Date6LV: '2019. gada 26. septembrī',
        funSunPageAfishaHotel7Artist6LV: 'Estradarada',
    }
})

const funSunPageAfishaSport = new Vue ({
    el: '#funSunPageAfishaSport',
    data: {
        funSunPageAfishaSportTitleRU: 'Спортивная программа с модными фитнес-инструкторами!',
        funSunPageAfishaSportTitleBY: 'Спортивная программа с модными фитнес-инструкторами!',
        funSunPageAfishaSportTitleUA: 'Спортивная программа с модными фитнес-инструкторами!',
        funSunPageAfishaSportTitleEE: 'Proffesionaalsete treenerite meistriklassid!',
        funSunPageAfishaSportTitleLT: 'Sporto programa su fitness instruktoriai!',
        funSunPageAfishaSportTitleLV: 'Sporta programma ar slaveniem fitnesa instruktoriem!',
        
        funSunPageAfishaSportTextRU: 'C 7 мая по 28 сентября мастер-классы от профессиональных wellness и fitness инструкторов в отелях FUN&SUN',
        funSunPageAfishaSportTextBY: 'C 7 мая по 28 сентября мастер-классы от профессиональных wellness и fitness инструкторов в отелях FUN&SUN',
        funSunPageAfishaSportTextUA: 'C 7 мая по 28 сентября мастер-классы от профессиональных wellness и fitness инструкторов в отелях FUN&SUN',
        funSunPageAfishaSportTextEE: '7 mai kuni 28 september professionaalsete fitness&amp;wellness treenerite meistriklassid FUN&SUN hotellides',
        funSunPageAfishaSportTextLT: 'Nuo gegužės 7 iki rugsėjo 28 d. profesionalūs užsiėmimai su wellness ir fitness instruktoriais FUN&SUN viešbučiuose',
        funSunPageAfishaSportTextLV: 'No 7. maijā līdz 28. septembrīm profesionālas meistarklases no labākajiem Wellness un Fitness instruktoriem FUN&SUN viesnīcās',
        
        funSunPageAfishaSportCountry1RU: 'в Турции',
        funSunPageAfishaSportCountry1BY: 'в Турции',
        funSunPageAfishaSportCountry1UA: 'в Турции',
        funSunPageAfishaSportCountry1EE: 'в Турции',
        funSunPageAfishaSportCountry1LT: 'Turkijoje',
        funSunPageAfishaSportCountry1LV: 'Turcijā',
        
        funSunPageAfishaSportCountry2RU: 'на Кипре',
        funSunPageAfishaSportCountry2BY: 'на Кипре',
        funSunPageAfishaSportCountry2UA: 'на Кипре',
        funSunPageAfishaSportCountry2EE: 'на Кипре',
        funSunPageAfishaSportCountry2LT: 'ir Kipre',
        funSunPageAfishaSportCountry2LV: 'un Kiprā',
        
        
        
        funSunPageAfishaSportCountry1Flag: 'https://agent.tui.ru/getmedia/138b02aa-dd59-48e6-905d-4d8c0d594cb2/flag1',
        funSunPageAfishaSportCountry2Flag: 'https://agent.tui.ru/getmedia/2866620e-5452-46ee-930b-8481506e1fbf/flag1Copy',
    }
})


