var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 49.0387626073707,
            lng: 31.4513703765201
        },
        zoom: 7,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#263c3f"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6b9a76"
                }
              ]
            },
            {
              "featureType": "road",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#38414e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#212a37"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9ca5b3"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#1f2835"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#f3d19c"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2f3948"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#515c6d"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            }
          ],
        disableDefaultUI: true,
    });
}

$('#search').on('keypress', function (e) {
    if (e.which == 13) {
        $('.block').empty()
        let search = document.querySelector('#search').value

        let store = getWithExpiry(search)

        if (store !== null) {
            weatherFromStoreLoc()

            const marker = new google.maps.Marker({
                position: posit,
                map
            })

        } else {
            weather()
        }

        function weatherFromStoreLoc() {

            let res = store[0].split(",")
            let lat = Number(res[8])
            let lng = Number(res[9]) 
            let name = res[0]
            const posit = {lat: lat, lng: lng}
            console.log(posit)
            map.panTo(posit)
            
            $('.block').append(`<h2 class = "block__name">${res[0]}</h2>`)
            $('.block').append(`<p class = "block__item"> Швидкість вітру: ${res[1]} м/с</p>`)
            $('.block').append(`<p class = "block__item"> Пориви вітру до: ${res[2]} м/с</p>`)
            $('.block').append(`<p class = "block__item"> Температура повітря: ${res[3]} °C</p>`)
            $('.block').append(`<p class = "block__item"> Відчувається як: ${res[4]} °C</p>`)
            $('.block').append(`<p class = "block__item"> Вологість повітря: ${res[5]} %</p>`)
            $('.block').append(`<p class = "block__item"> Тиск: ${res[7]} hPa</p>`)
            $('.block').append(`<p class = "block__item"> Висота над рівнем моря: ${res[6]} м</p>`)
        }

        async function weather() {
            const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=02fa9e0cf8335ab0ffff25b142256550&units=metric`)
            const data = await responce.json()

            if (data.message == undefined) {
                let lat = data.coord.lat
                let lng = data.coord.lon
                const posit = { lat: lat, lng: lng }
                console.log(posit)
                map.panTo(posit)

                let name = data.name
                let windSpeed = data.wind.speed
                let windGust = data.wind.gust
                let temp = data.main.temp
                let tempFeels = data.main.feels_like
                let humid = data.main.humidity
                let sea_level = data.main.sea_level
                let pressVal = data.main.pressure

                let value = [`${name}, ${windSpeed}, ${windGust}, ${temp}, ${tempFeels}, ${humid}, ${sea_level}, ${pressVal}, ${lat}, ${lng}`]
                let key = search
                let ttl = 7200000

                setWithExpiry(key, value, ttl)

                const marker = new google.maps.Marker({
                    position: posit,
                    map,
                    title: name,
                    animation:google.maps.Animation.DROP
                })

                $('.block').append(`<h2 class = "block__name">${name}</h2>`)
                $('.block').append(`<p class = "block__item"> Швидкість вітру: ${windSpeed} м/с</p>`)
                $('.block').append(`<p class = "block__item"> Пориви вітру до: ${windGust} м/с</p>`)
                $('.block').append(`<p class = "block__item"> Температура повітря: ${temp} °C</p>`)
                $('.block').append(`<p class = "block__item"> Відчувається як: ${tempFeels} °C</p>`)
                $('.block').append(`<p class = "block__item"> Вологість повітря: ${humid} %</p>`)
                $('.block').append(`<p class = "block__item"> Тиск: ${pressVal} hPa</p>`)
                $('.block').append(`<p class = "block__item"> Висота над рівнем моря: ${sea_level} м</p>`)
        
            } else {
                alert('Please enter correct name')
            }
        }
      
       
        initMap()
    }
})

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}

function setWithExpiry(key, value, ttl) {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}




