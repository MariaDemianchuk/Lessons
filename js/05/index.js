// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
let car = {
    manufacturer: 'Bayerische Motoren Werke',
    model: 'X5',
    year: 2021,
    'average speed': 200,
    'fuel tank capacity': 60,
    'average fuel consumption per 100 km': 9,
    driver1: 'Степан',
    driver2: 'Василь',
    driver3: 'Петро',

    info() {
        console.log('manufacturer:', this.manufacturer, 'model:', this.model, 'year:', this.year, 'average speed:', this["average speed"], 'fuel tank capacity:',
            this["fuel tank capacity"], 'average fuel consumption per 100 km:', this["average fuel consumption per 100 km"], 'drivers:', this.driver1, this.driver2, this.driver3)
    },

    addDriver(name) {
        this.driver4 = name
        return this.driver4
    },

    isDriver(name) {
        if (this.driver1 === name || this.driver2 === name || this.driver3 === name || this.driver4 === name) {
            return 'є такий водій'
        } else {
            return 'немає такого водія'
        }
    },

    timeFuel(dist) {
        fuel = (dist / 100) * this["average fuel consumption per 100 km"]
        timeArrival = dist / this["average speed"]
        restTime = parseInt(timeArrival / 4)
        fullTime = timeArrival + restTime - 1
        return `палива потрібно: ${fuel} літри, часу потрібно: ${fullTime} год.`
    }
}
// Метод, який виводить на екран інформацію про автомобіль.
car.info()
// Додавання ім’я водія у список
car.addDriver('Alex')
console.log('новий список водіїв:', car.driver1, car.driver2, car.driver3, car.driver4)
// Перевірка водія на наявність його ім’я у списку
console.log(car.isDriver('Mark'))
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
console.log(car.timeFuel(1600))



// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, 
//то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
let time = {
    hours: 10,
    minutes: 10,
    seconds: 10,

    whatTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    },

    changeSec(sec) {
        sum = this.seconds + sec
        this.seconds = sum % 60
        this.minutes = (this.minutes + parseInt(sum / 60)) % 60
        this.hours = this.hours + parseInt((this.minutes + parseInt(sum / 60)) / 60)

        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    },

    changeMin(min) {
        sum = this.minutes + min
        this.minutes = sum % 60
        this.hours = this.hours + parseInt(sum / 60)

        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    },

    changeHour(hour) {
        sum = this.hours + hour
        this.hours = sum % 24

        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }
}
// Для виведення часу на екран.
time.whatTime()
// Зміни часу на передану кількість секунд.
time.changeSec(3666)
// Зміни часу на передану кількість хвилин.
time.changeMin(78)
// Зміни часу на передану кількість годин.
time.changeHour(28)




// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
let count = {
    f1: ['numerator:', 2, 'denominator:', 4],
    f2: ['numerator:', 2, 'denominator:', 3],

    addFraction() {
        result = []
        denominator = this.f1[3] * this.f2[3]
        numerator = this.f1[1] * this.f2[3] + this.f2[1] * this.f1[3]
        if (numerator === denominator) {
            result.push('number:', numerator / denominator)
        } else if (numerator > denominator) {
            result.push('number:', parseInt(numerator / denominator), 'numerator:', (numerator - parseInt(numerator / denominator) * denominator), 'denominator:', denominator)
        } else {
            result.push('numerator:', numerator, 'denominator:', denominator)
        }
        console.log('додавання:', result)
    },

    subtractingFraction() {
        result = []
        denominator = this.f1[3] * this.f2[3]
        numerator = this.f1[1] * this.f2[3] - this.f2[1] * this.f1[3]
        if (numerator === denominator) {
            result.push('number:', numerator / denominator)
        } else if (numerator > denominator) {
            result.push('number:', parseInt(numerator / denominator), 'numerator:', (numerator - parseInt(numerator / denominator) * denominator), 'denominator:', denominator)
        } else {
            result.push('numerator:', numerator, 'denominator:', denominator)
        }

        console.log('віднімання:', result)
    },

    multiplicationFraction() {
        result = []
        denominator = this.f1[3] * this.f2[3]
        numerator = this.f1[1] * this.f2[1]
        if (numerator === denominator) {
            result.push('number:', numerator / denominator)
        } else if (numerator > denominator) {
            result.push('number:', parseInt(numerator / denominator), 'numerator:', (numerator - parseInt(numerator / denominator) * denominator), 'denominator:', denominator)
        } else {
            result.push('numerator:', numerator, 'denominator:', denominator)
        }

        console.log('множення:', result)
    },

    divisionFraction() {
        result = []
        denominator = this.f1[3] * this.f2[1]
        numerator = this.f1[1] * this.f2[3]
        if (numerator === denominator) {
            result.push('number:', numerator / denominator)
        } else if (numerator > denominator) {
            result.push('number:', parseInt(numerator / denominator), 'numerator:', (numerator - parseInt(numerator / denominator) * denominator), 'denominator:', denominator)
        } else {
            result.push('numerator:', numerator, 'denominator:', denominator)
        }

        console.log('ділення:', result)
    },

    reducingFraction() {
        result = []
        nsd = 1
        for (i = 1; i <= this.f1[1] && i <= this.f1[3]; i++) {
            if (this.f1[1] % i === 0 && this.f1[3] % i === 0) {
                nsd = i;
            }
        }
        denominator = this.f1[3] / nsd
        numerator = this.f1[1] / nsd
        if (numerator === denominator) {
            result.push('number:', numerator / denominator)
        } else if (numerator > denominator) {
            result.push('number:', parseInt(numerator / denominator), 'numerator:', (numerator - parseInt(numerator / denominator) * denominator), 'denominator:', denominator)
        } else {
            result.push('numerator:', numerator, 'denominator:', denominator)
        }

        console.log('скорочення:', result)
    }
}
console.log(count)
// Складання 2-х об'єктів-дробів.
count.addFraction()
// Віднімання 2-х об'єктів-дробів.
count.subtractingFraction()
// Множення 2-х об'єктів-дробів.
count.multiplicationFraction()
// Ділення 2-х об'єктів-дробів.
count.divisionFraction()
// Скорочення об'єкта-дробу.
count.reducingFraction()


