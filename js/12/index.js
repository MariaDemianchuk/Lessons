
const API = 'https://www.omdbapi.com/?apikey=98b548a&s'
let btn = document.querySelector('.btn')
$('.btn').click(function () {
    console.log('clicked')
    $('ul').empty()

    let searchName = document.querySelector('input').value
    let text = $('.select__items option:selected').text()
    let searchType = `&type=${text}`
    let page = 1

    async function search() {
        const responce = await fetch(`${API}&s=${searchName}${searchType}&page=${page}`)
        const data = await responce.json()
        console.log(data)

        if (data.Response == 'True') {
            for (let i = 0; i < data.Search.length; i++) {
                let name = document.getElementsByClassName('list')
                console.log(name)
                let item = document.createElement('li')
                item.setAttribute('class', 'list__item')
                console.log(item)
                item.innerText = data.Search[i].Title
                let more = `<span><a href="#" class = "more" id="${i}">Details</a></span>`
                $(item).append(more)
                $(name).append(item)

                let id = data.Search[i].imdbID
                let newAPI = API + `&i=${id}`
                const r = await fetch(newAPI)
                const info = await r.json()
                console.log(info)
                let img = data.Search[i].Poster
                let year = data.Search[i].Year
                let rel = info.Released
                let actors = info.Actors
                let lang = info.Language
                let count = info.Country
                let genr = info.Genre
                let rate = info.imdbRating
                let inf = info.Plot
                let details = document.createElement('div')
                details.setAttribute('id', `details${i}`)
                details.setAttribute('class', "details")
                $(details).append(`<p>Year: ${year}</p>`)
                $(details).append(`<p>Released: ${rel}</p>`)
                $(details).append(`<p>Actors: ${actors}</p>`)
                $(details).append(`<p>Language: ${lang}</p>`)
                $(details).append(`<p>Country: ${count}</p>`)
                $(details).append(`<p>Genre: ${genr}</p>`)
                $(details).append(`<p>imdbRating: ${rate}</p>`)
                $(details).append(`<p>About: ${inf}</p>`)
                if (img === 'N/A') {
                    $(details).append('<img src="assets/images/4zevar190100102.jpg" alt="image">')
                } else {
                    $(details).append(`<img src="${img}" alt="img">`)
                }
               
                $(item).append(details)

                $('.details').hide()

                $(`#${i}`).click(function () {
                    $(`#details${i}`).toggle()
                })
            }
        } else {
            let name = document.getElementsByClassName('list')
            const err = document.createElement('li')
            err.innerText = 'Movie not found!'
            $(name).append(err)
        }
    }

    search()

    async function getPage() {
        const totalFilms = await fetch(`${API}&s=${searchName}${searchType}`);
        const totalFilmsJson = await totalFilms.json();
        let totalPages = 0
        let ifMorePages = totalFilmsJson.totalResults % 10

        if (ifMorePages > 0) {
            totalPages = parseInt(totalFilmsJson.totalResults / 10) + 1
        } else {
            totalPages = parseInt(totalFilmsJson.totalResults / 10)
        }


        for (p = 1; p <= totalPages; p++) {
            let pags = document.getElementsByClassName('pages')
            let page = document.createElement('li')
            page.innerText = `${p}`
            page.setAttribute('id', `page${p}`)
            page.setAttribute('class', "page")
            $(page).css({ cursor: "pointer" })
            $(pags).append(page)
        }

        let items = $('.page')
        console.log(items)
        items.on('click', function (event) {
            page = parseInt(event.target.innerText)
            $('.list').empty()
            search()
        })
    }

    getPage()
})

