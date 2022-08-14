const URL = 'https://reqres.in/api'
async function getUsers() {
    const response = await fetch(`${URL}/users`, { mode: 'cors' })
    const respJSON = await response.json()

    return respJSON.data
}



// $(function () {
//     const container = $('#demo')

//     getUsers().then((users) => {
//         console.log('users', users)
//         users.forEach(user => {
//             const card = $('<div class = "card"></div>')
//             container.append(card)
//             const image = $(`<img class = "avatar" src = &{user.avatar}></img>`)
//             const info = $(`<div class = "info"></div>`)
//             card.append(image)
//             card.append(info)
//             container.append(card)
//         });

//     })

// })

$(function () {
    const container = $('#demo')
    getUsers().then((users) => {
        console.log('users', users)
        users.forEach(user => {
            const card = $('<div class="card"></div>')
            const image = $(`<img class="avatar" src='${user.avatar}'>`)
            console.log('image', image)
            const info = $(`<div class="info"></div>`)
            info.append($(`<div class = "fulname">${user.first_name} ${user.last_name}</div>`))
            card.append(image)
            card.append(info)
            container.append(card)
        })
    })
}) 