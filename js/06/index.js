
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
let shoppingList = [
    {
        name: 'bread',
        quantity: 1,
        price: 35,
        isBought: true,
        amount: 35
    },
    {
        name: 'butter',
        quantity: 1,
        price: 60,
        isBought: true,
        amount: 60
    },
    {
        name: 'tomatoes',
        quantity: 2,
        price: 30,
        isBought: false,
        amount: 60
    },
    {
        name: 'onions',
        quantity: 2,
        price: 20,
        isBought: false,
        amount: 40
    },
    {
        name: 'apples',
        quantity: 3,
        price: 15,
        isBought: false,
        amount: 45
    }

]
console.log('shopping list', shoppingList)

// Написати кілька функцій для роботи з таким масивом:


// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
let shoppingListSort = (array) => array.sort((a, b) => a.isBought - b.isBought)
console.log('sorted by "isBought"', shoppingListSort(shoppingList))


// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function shoppingListBought(array, value) {
    index = array.findIndex(obj => obj.name === value)
    array[index].isBought = true
}
shoppingListBought(shoppingList, 'apples')
console.log('marked as bought', shoppingList)


//Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
function shopingListDelete(array, value) {
    i = array.findIndex(obj => obj.name === value)
    let newarr = []
    array.forEach((element, index) => {
        if (index !== i) {
            newarr.push(element)
        }
    });
    return newarr
}
console.log('delete element', shopingListDelete(shoppingList, 'tomatoes'))


//Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
//При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function shopingListAdd(array, name, quantity, price) {
    toAdd = array.findIndex(obj => obj.name === name)
    if (toAdd === -1) {
        array.push({
            name: name,
            quantity: quantity,
            price: price,
            isBought: false,
            amount: quantity * price
        })
    } else {
        array[toAdd].quantity += quantity
        array[toAdd].amount = array[toAdd].amount + quantity * price
    }
}
shopingListAdd(shoppingList,'avocado', 2, 60)
console.log('add to shopping list', shoppingList)


//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
let shopingListCount = array => array.reduce(function (acc, obj){ return acc + obj.quantity; }, 0)
console.log('quantity of products: ', shopingListCount(shoppingList))


//Підрахунок суми всіх не придбаних продуктів.
let shopingListCountNotBought = array => array.reduce(function (acc, array) { 
    if (array.isBought === false) {
        return acc + array.quantity
    } else {
        return acc
    }
}, 0)
console.log('quantity of products (not bought): ', shopingListCountNotBought(shoppingList))


//Підрахунок суми всіх придбаних продуктів.
let shopingListCountBought = array => array.reduce(function (acc, array) { 
    if (array.isBought !== false) {
        return acc + array.quantity
    } else {
        return acc
    }
}, 0)
console.log('quantity of products (bought): ', shopingListCountBought(shoppingList))


//Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
function shopListSort (sorting_direction, array) {
    sorting_direction === 'asc' ?  array.sort((a, b) => a.amount - b.amount) :  array.sort((a, b) => b.amount - a.amount);
    return array
}
console.log('sorting by amount', shopListSort('desc', shoppingList))
