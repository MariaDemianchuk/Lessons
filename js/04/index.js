//Створи функцію, яка буде виводити кількість переданих їй аргументів.
function first() {
    return arguments.length
}
console.log('кількість переданих аргументів:', first(10, 20, 'arg', -345, 'glk'))

// 3 Напиши функцію, яка приймає 2 числа і повертає :
// 1 -1, якщо перше число менше, ніж друге; 
// 2 1 - якщо перше число більше, ніж друге; 
// 3 0 - якщо числа рівні.
function second(a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
}
console.log('ці два числа:', second(-5, -10))

//Напиши функцію, яка обчислює факторіал переданого їй числа.
function third(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}
console.log('факторіал числа:', third(4))

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function fourth(a, b, c) {
    let num = ''
    num += a
    num += b
    num += c
    return parseInt(num)
}
console.log('число:', fourth(4, 6, 3))

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function rectangleArea(a, b) {
    let sgr = 0
    if (b === undefined) {
        sgr = a ** 2
    } else {
        sgr = a * b
    }
    return sgr
}
console.log('площа прямокутника:', rectangleArea(5))

//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
//Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isPerfect(num) {
    let divider = 0
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            divider += i
        }
    }
    if (divider === num) {
        return `досконале`
    } else {
        return `не досконале`
    }
}
console.log('введене чило -', isPerfect(28))

//Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
//Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function isPerfectArr(min, max) {
    let perfectArr = []
    for (i = min; i <= max; i++) {
        if (isPerfect(i) === `досконале`) {
            perfectArr.push(i)
        }
    }
    return `${perfectArr} - досконалі числа діапазону`
}

console.log(isPerfectArr(1, 1000))
