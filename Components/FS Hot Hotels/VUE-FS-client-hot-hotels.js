const hotel = (image, place, name, oldPrice, newPrice, conditions, link) => ({image, place, name, oldPrice, newPrice, conditions, link});

const hotels = [
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=cc593b08-f217-4016-9484-63e15cc57fa2', 'Турция, Белек, Белек', 'FUN&SUN River Resort Belek 5*', '108 830', '73 492', 'на двоих, 6 ночей', 'https://www.tui.ru/hotel/europe-turkey-belek-belek-tui__fun__sun__river__resort__belek/'),
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=f2a7cde6-9bcb-4918-9339-94a3accf0129', 'Турция, Кемер, Гейнюк', 'FUN&SUN Miarosa Ghazal Resort 5', '115 364', '101 004', 'на двоих, 7 ночей', 'https://www.tui.ru/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__miarosa__ghazal__resort/'),
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=5bc1d530-5e06-4495-aae2-34e4acb454d6', 'Турция, Кемер, Гейнюк', 'FUN&SUN Comfort Beach Resort 5*', '103 764', '77 206', 'на двоих, 6 ночей', 'https://www.tui.ru/hotel/europe-turkey-kemer-goynuk-tui__fun__sun__comfort__beach__resort/'),
    hotel('https://www.tui.ru/CmsPages/GetPhoto.aspx?fileguid=752f478f-bd54-4dec-9eaa-462af30c8e3c', 'Турция, Белек, Белек', 'FUN&SUN Club Belek 5', '118 469', '91 884', 'на двоих, 7 ночей', 'https://www.tui.ru/hotel/europe-turkey-belek-belek-tui__fun__sun__club__belek/')     
]

new Vue({
    el: '#fs-hot-hotels',
    data:{
        hotels: hotels,
        hotel: hotel
        
    }
})