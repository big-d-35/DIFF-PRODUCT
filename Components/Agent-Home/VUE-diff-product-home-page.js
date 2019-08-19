const homePageFirstBlock = new Vue ({
    el: '#home-page-first-block',
    data:{
        //TITLE
        firstBlockHeadNameRU1: 'KОНЦЕПЦИИ ОТДЫХА,',
        firstBlockHeadNameRU2: 'СОЗДАННЫЕ TUI',
        firstBlockHeadNameBY1: 'KОНЦЕПЦИИ ОТДЫХА,',
        firstBlockHeadNameBY2: 'СОЗДАННЫЕ TUI',
        firstBlockHeadNameUA1: 'KОНЦЕПЦИИ ОТДЫХА,',
        firstBlockHeadNameUA2: 'СОЗДАННЫЕ TUI',
        firstBlockHeadNameEE1: 'PUHKUSE KONTSEPTSIOONID,',
        firstBlockHeadNameEE2: 'TUI',
        firstBlockHeadNameLT1: 'POILSIO KONCEPCIJOS,',
        firstBlockHeadNameLT2: 'SUKURTOS TUI',
        firstBlockHeadNameLV1: 'ATPŪTAS KONCEPCIJAS,',
        firstBlockHeadNameLV2: 'KAS RADĪTAS TUI',
        
        //COMMENT
        firstBlockHeadCommentRU1: 'Мы знаем, какой отдых вам нужен,',
        firstBlockHeadCommentRU2: 'потому что вы нам сами об этом рассказали!',
        firstBlockHeadCommentBY1: 'Мы знаем, какой отдых вам нужен,',
        firstBlockHeadCommentBY2: 'потому что вы нам сами об этом рассказали!',
        firstBlockHeadCommentUA1: 'Мы знаем, какой отдых вам нужен,',
        firstBlockHeadCommentUA2: 'потому что вы нам сами об этом рассказали!',
        firstBlockHeadCommentEE1: 'Teame, millist puhkust te vajate,',
        firstBlockHeadCommentEE2: 'sest olete ise meile sellest rääkinud!',
        firstBlockHeadCommentLT1: 'Mes žinome, kokių reikia atostogų,',
        firstBlockHeadCommentLT2: 'nes Jūs mums apie tai pasakėte!',
        firstBlockHeadCommentLV1: 'Mēs zinām, kāda atpūta jums ir nepieciešama,',
        firstBlockHeadCommentLV2: 'jo jūs paši par to mums pastāstījāt!',
        
        //ПРЕЗЕНТАЦИЯ
        firstBlockHeadPresentaionLink: 'https://agent.tui.ru/getmedia/244095d3-62f8-4aff-81ea-162043e96d27/NEW-Concept-Presentation_B2B_11-07',
        firstBlockHeadPresentaionRU: 'Презентация Дифф продукта',
        firstBlockHeadPresentaionBY: 'Презентация Дифф продукта',
        firstBlockHeadPresentaionUA: 'Презентация Дифф продукта',
        firstBlockHeadPresentaionEE: 'Vali konsept',
        firstBlockHeadPresentaionLT: 'Prezentacija',
        firstBlockHeadPresentaionLV: 'Diferencēta produkta prezentācija',
        
        //Details
        firstBlockHeadDeatilsRU: '* Концепции отдыха TUI - это отдых в новом формате, где учтены интересы всех поколений.',
        firstBlockHeadDeatilsBY: '* Концепции отдыха TUI - это отдых в новом формате, где учтены интересы всех поколений.',
        firstBlockHeadDeatilsUA: '* Концепции отдыха TUI - это отдых в новом формате, где учтены интересы всех поколений.',
        firstBlockHeadDeatilsEE: '* TUI puhkuse konseptsioon - uue formaadi puhkus, kus on võetud arvesse igas vanuses puhkajate huvid.',
        firstBlockHeadDeatilsLT: '* TUI poilsio koncepcijos - tai naujas poilsio formatas, kur atsižvelgiama į visų kartų interesus.',
        firstBlockHeadDeatilsLV: '* TUI atpūtas koncepcijas - atpūta jaunā formātā, kas ņem vērā visu paaudžu intereses.',
    }
});

const homePageTextBlock = new Vue ({
    el: '#home-page-text-block',
    data: {
        homePageTextBlockRU1: 'Концепции отдыха TUI',
        homePageTextBlockRU2: '- это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.',
        homePageTextBlockRU3: 'Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        homePageTextBlockBY1: 'Концепции отдыха TUI',
        homePageTextBlockBY2: '- это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.',
        homePageTextBlockBY3: 'Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        homePageTextBlockUA1: 'Концепции отдыха TUI',
        homePageTextBlockUA2: '- это новый формат отдыха, где учтены интересы всех поколений и современные тренды. 100 000 человек уже сделали свой выбор в пользу отдыха в наших отелях.',
        homePageTextBlockUA3: 'Время и вам сделать выбор! Выберите страну и забронируйте формат отдыха, который подходит именно вам!',
        homePageTextBlockEE1: 'TUI puhkuse konseptsioonid',
        homePageTextBlockEE2: '- uue formaadi puhkus, kus on võetud arvesse igas vanuses puhkajate huvid. Juba 42 600 inimest on valinud puhkuse meie hotellides.',
        homePageTextBlockEE3: 'Nüüd on teilgi aeg teha valik! Valige sihtkoht ja broneerige just teile sobiva puhkuse kontseptsiooni!',
        homePageTextBlockLT1: 'TUI poilsio koncepcijos',
        homePageTextBlockLT2: '- tai naujas poilsio formatas, kur atsižvelgiama į visų kartų interesus ir šiuolaikines tendencijas. 100 000 turistų jau pasirinko ir išbandė tokio tipo poilsį mūsų viešbučiuose.',
        homePageTextBlockLT3: 'Laikas rinktis! Išsirinkite šalį ir užsisakykite Jums tinkamiausią atostogų tipą!',
        homePageTextBlockLV1: 'TUI atpūtas koncepcijas',
        homePageTextBlockLV2: '- jauna formāta atpūta, kur tiek ņemtas vērā visu paaudžu intereses un mūsdienīgas tendences. Jau 100 000 viesu ir izvēlējušies atpūtu mūsu viesnīcas. ',
        homePageTextBlockLV3: 'Ir pienācis laiks izdarīt izvēli! Izvēlēties valsti un rezervējiet atpūtas koncepciju, kas ir piemērota tieši jums!',
    }
});

