var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.12071074819811,
            lng: 26.818001965327685,
        },
        zoom: 15,
        styles: [
            {
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#212121',
                    },
                ],
            },
            {
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575',
                    },
                ],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#212121',
                    },
                ],
            },
            {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#757575',
                    },
                ],
            },
            {
                featureType: 'administrative.country',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9e9e9e',
                    },
                ],
            },
            {
                featureType: 'administrative.land_parcel',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#bdbdbd',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#181818',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#616161',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1b1b1b',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#2c2c2c',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#8a8a8a',
                    },
                ],
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#373737',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#3c3c3c',
                    },
                ],
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#4e4e4e',
                    },
                ],
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#616161',
                    },
                ],
            },
            {
                featureType: 'transit',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#000000',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#3d3d3d',
                    },
                ],
            },
        ],
    });

    const markers = []
    const menu = $("#menu")

    const marker1 = new google.maps.Marker({
        position: {
            lat: 50.12665386303686,
            lng: 26.807959774437997
        },
        map,
        title: 'Костел святого Іоана Хрестителя',
    })

    const infowindow1 = new google.maps.InfoWindow({
        content: `<div>
                    <img class="avatar" src="https://m.day.kyiv.ua/sites/default/files/main/articles/30112016/10izjaslav_12.jpg">
                    <p>Заснований (початок зведення 24 червня 1599 р.) князем Янушем Заславським (бл. 1556 — 4.VIII.1629) і його дружиною княжною Олександрою Романівною Санґушківною († 1602) разом з будинками школи, шпиталю і плебанії для священиків, коштом міської оренди у Старому Заславі. На власність парафії передавалося село Збирів. Згідно з фундушем Януша Заславського при храмі повинні були утримуватися три священики[1]. Будувався за проєктом швейцарського архітектора Якопо Мадлена у відповідності до ренесансної архітектурної традиції.

                    Як свідчить інвентар Старозаславського замку на 1622 рік спорудження святині тривало. 
                    <span><a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%99%D0%BE%D0%B0%D0%BD%D0%B0_%D0%A5%D1%80%D0%B5%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D1%8F_(%D0%86%D0%B7%D1%8F%D1%81%D0%BB%D0%B0%D0%B2)" target="_blank" rel="noopener noreferrer">більше</a></span>
                    </p>
                    </div>`,
    });

    marker1.addListener('click', () => {
        infowindow1.open({
            anchor: marker1,
            map,
            shouldFocus: false,
        });
    })
    markers.push(marker1)

    const marker2 = new google.maps.Marker({
        position: {
            lat: 50.12351731104687, 
            lng: 26.81079218725304
        },
        map,
        title: 'Собор різдва Христового',
    })

    const infowindow2 = new google.maps.InfoWindow({
        content: `<div>
                    <img class="avatar" src="https://www.pslava.info/files/PSlava/Personal/Zharkikh/Dlock02/2011/2011-06-26/2011-06-26-214.jpg">
                    <p>Собор Різдва Христового — втрачена пам'ятка православного сакрального будівництва в Заславі на Волині. Збудована в другій чверті 19 століття на місці старої замкової церкви. Знищена комуністами в 1930-х роках.

                    Церкву Різдва Христового ПРЦ закладено на місці старої замкової церкви «на чотири дзвони»[1]. Будівництво, що розпочалося на пожертви доброчинців, завершено в 1835 році коштом власника міста, князя Карла Санґушка[2]. У 1836 році церкву освячено. Храм мав два престоли: Різдва Христового і Преображення Господнього. Був це тинькований кам'яний однобаневий храм центричного типу, в проєкції латинського хреста, з добудованим від заходу притвором.
                    
                    У 1839 році до парафії примусово долучено заславських греко-католиків.
                    <span><a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%D0%A0%D1%96%D0%B7%D0%B4%D0%B2%D0%B0_%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_(%D0%86%D0%B7%D1%8F%D1%81%D0%BB%D0%B0%D0%B2)" target="_blank" rel="noopener noreferrer">більше</a></span>
                    </p>
                    </div>`,
    });

    marker2.addListener('click', () => {
        infowindow2.open({
            anchor: marker2,
            map,
            shouldFocus: false,
        });
    })

    markers.push(marker2)

    const marker3 = new google.maps.Marker({
        position: {
            lat: 50.117133517825984, 
            lng: 26.819289425698162
        },
        map,
        title: 'Палац князів Санґушків',
    })

    const infowindow3 = new google.maps.InfoWindow({
        content: `<div>
                    <img class="avatar" src="https://times.zt.ua/wp-content/uploads/2017/06/IMG_7017-1024x683.jpg">
                    <p>Пала́ц кня́зів Санґу́шків — барокова будівля, частина архітектурного комплексу, розташованого на обширі Новозаславського замку (нині місто Ізяслав Хмельницької області), що ефектно розкинувся на мисі при впадінні річки Понори до річки Горині. Палац збудовано у 1754 —1770 роках для Барбари Санґушкової як приватна резиденція і урядовий центр волинських володінь князів Санґушків.
                    Сама будівля — двоповерховий будинок, що отримав ориґінальне планування piano nobile, і не подібний до інших палаців Речі Посполитої. Вплив особистого смаку Барбари Санґушкової є визначним у реалізації проєкту, її не задовольнив проєкт розроблений Паоло Фонтана: Якуб Фонтана, королівський архітектор, доопрацював проєкт. До палацу добудовано двір, що з'єднав його з палацом князів Заславських і залишками Новозаславського замку. 
                    Будівельні зусилля, здійснені під зверхністю князів Санґушків на новозаславському замковому обширі, були настільки змінили його образ, що й сам замок відтоді отримав нове ім'я — замок Санґушків, а й просто «палац».
                    <span><a href="https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B0%D1%86_%D0%A1%D0%B0%D0%BD%D2%91%D1%83%D1%88%D0%BA%D1%96%D0%B2_(%D0%86%D0%B7%D1%8F%D1%81%D0%BB%D0%B0%D0%B2)" target="_blank" rel="noopener noreferrer">більше</a></span>
                    </p>
                    </div>`,
    });

    marker3.addListener('click', () => {
        infowindow3.open({
            anchor: marker3,
            map,
            shouldFocus: false,
        });
    })

    markers.push(marker3)

    const marker4 = new google.maps.Marker({
        position: {
            lat: 50.122065898397345, 
            lng:26.810674170357114 
        },
        map,
        title: 'Старозаславський замок',
    })

    const infowindow4 = new google.maps.InfoWindow({
        content: `<div>
                    <img class="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%22%D0%97%D0%B0%D0%BC%D0%BE%D0%BA%22_%D0%BC.%D0%86%D0%B7%D1%8F%D1%81%D0%BB%D0%B0%D0%B2.JPG/800px-%22%D0%97%D0%B0%D0%BC%D0%BE%D0%BA%22_%D0%BC.%D0%86%D0%B7%D1%8F%D1%81%D0%BB%D0%B0%D0%B2.JPG">
                    <p>
                    Старозаславський замок — єдина частково збережена будівля замкового комплексу 15 століття[1], розташована на останці у старій частині міста Ізяслава на Волині при впадінні річки Сошені до річки Горині.
                    Спорудження в XV столітті Старозаславського замку пов'язують з ім'ям князя Василя Федоровича Красного (*?—† після 1461)[2].

На існування замку в означений час вказує й та обставина, що заславські замкові книги[3] велися від 1512 року[4]. Книги за 1572–1575 рр. досі є цінним джерелом з історії Заславської волості, до якої, крім міста Заслава, в другій половині XVI ст. входило ще 70 містечок і сіл.
                    <span><a href="https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B7%D0%B0%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA" target="_blank" rel="noopener noreferrer">більше</a></span>
                    </p>
                    </div>`,
    });

    marker4.addListener('click', () => {
        infowindow4.open({
            anchor: marker4,
            map,
            shouldFocus: false,
        });
    })

    markers.push(marker4)

    const marker5 = new google.maps.Marker({
        position: {
            lat: 50.116514354607595, 
            lng:26.821510294796806
        },
        map,
        title: 'Костел святого Йосипа та монастир отців Лазаритів',
    })

    const infowindow5 = new google.maps.InfoWindow({
        content: `<div>
                    <img class="avatar" src="https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/13660_800x600_63518934.jpg">
                    <p>
                    Костел Святого Йосифа та монастир лазаристів (пол. Kościół św. Józefa Oblubieńca i klasztor oo. Misjonarzy) — комплекс колишнього монастиря католицького товариства лазаристів і костелу Святого Йосифа, що знаходиться по вул. Шевченка, 10 (колишній Старокостянтинівській) в Ізяславі. Це одна з найцікавіших пам'яток пізнього бароко на Волині. Костел є єдиною нині діючою католицькою культовою спорудою в місті, що використовується парафією Святого Йосифа. 
                    <span><a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%99%D0%BE%D1%81%D0%B8%D1%84%D0%B0_%D1%82%D0%B0_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80_%D0%BB%D0%B0%D0%B7%D0%B0%D1%80%D0%B8%D1%81%D1%82%D1%96%D0%B2_(%D0%86%D0%B7%D1%8F%D1%81%D0%BB%D0%B0%D0%B2)" target="_blank" rel="noopener noreferrer">більше</a></span>
                    </p>
                    </div>`,
    });

    marker5.addListener('click', () => {
        infowindow4.open({
            anchor: marker5,
            map,
            shouldFocus: false,
        });
    })

    markers.push(marker5)


console.log(markers)

  
for (let i =0; i<markers.length; i++) {
    const menuItem = $(`<div class = "items">${markers[i].title}</div>`)
    menuItem.on('click', () => {
        console.log('ON CLICK')
        const coords = markers[i].getPosition()
        console.log('coords', coords)
        map.setCenter(coords, coords)
    })
    menu.append(menuItem)
}
   
}
