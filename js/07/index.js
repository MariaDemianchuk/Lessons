// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
class circle {
    //     поле, що зберігає радіус кола;
    constructor(r) {
        this.r = r
    }
    //     get-властивість, яке повертає радіус кола;
    getRadius() {
        return this.r
    }
    //     set-властивість, що встановлює радіус кола;
    setRadius(value) {
        return this.r = value
    }
    //     get-властивість, яке повертає діаметр кола;
    getDiametr() {
        return this.r * 2
    }
    //     метод, що обчислює площу кола;
    circleAria() {
        return (Math.PI * Math.pow(this.r, 2)).toFixed(3)
    }
    //     метод, що обчислює довжину кола.
    circleWidth() {
        return (2 * Math.PI * this.r).toFixed(3)

    }
}
// Продемонструй роботу властивостей і методів.
let circle1 = new circle(10)
console.log('радіус:', circle1.getRadius())
console.log('новий радіус:', circle1.setRadius(15))
console.log('діаметр:', circle1.getDiametr())
console.log('площа кола:', circle1.circleAria())
console.log('довжина кола:', circle1.circleWidth())


// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
class marker {
    constructor(color, ink = 100) {
        //     поле, яке зберігає колір маркера;
        this.color = color;
        //     поле, яке зберігає кількість чорнил у маркері (у відсотках);
        this.ink = ink;
    }

    writing(text) {
        for (let sym of text) {
            if (sym !== ' ') {
                this.ink -= 0.5
            }
            if (this.ink > 0) {
                document.write(`<span style='color:${this.color};'>${sym}</span>`)
            } else {
                document.write("Marker is over");
                break;
            }
        }
    }
}

let marker1 = new marker('green')
console.log(marker1)
//     метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
marker1.writing('A fully independent Ukraine emerged only late in the 20th century, after long periods of successive domination by Poland-Lithuania, Russia, and the Union of Soviet Socialist Republics (U.S.S.R.). Ukraine had experienced a brief period of independence in 1918–20, but portions of western Ukraine were ruled by Poland, Romania, and Czechoslovakia in the period between the two World Wars, and Ukraine thereafter became part of the Soviet Union as the Ukrainian Soviet Socialist Republic (S.S.R.). ')

// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.
class markerSuper extends marker {
    filling(ink) {
        if (ink > 100) {
            ink = 100
        } else if ((this.ink += ink) > 100) {
            this.ink = 100
        } else {
            this.ink += ink
        }
    }
}

let marker2 = new markerSuper('red')
console.log(marker2)
marker2.filling(100)
marker2.writing('A fully independent Ukraine emerged only late in the 20th century, after long periods of successive domination by Poland-Lithuania, Russia, and the Union of Soviet Socialist Republics (U.S.S.R.). Ukraine had experienced a brief period of independence in 1918–20, but portions of western Ukraine were ruled by Poland, Romania, and Czechoslovakia in the period between the two World Wars, and Ukraine thereafter became part of the Soviet Union as the Ukrainian Soviet Socialist Republic (S.S.R.). ')
marker2.filling(20)
marker2.writing(' lets writing go on...')
marker2.filling(10)


// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
const arrEmployees = [
    new Employee("Василь Лисаченко", "менеджер з продажів", 25000),
    new Employee("Степан Колесник", "менеджер з продажів", 25000),
    new Employee("Лариса Велика", "кредитний менеджер", 27000),
    new Employee("Ольга Лисак", "касир", 15000),
    new Employee("Аліна Олійник", "директор", 35000),
    new Employee("Василина Тарнавська", "старший касир", 19000),
    new Employee("Віктор Трайдакало", "системний адміністратор", 30000)
]
class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }

    getHTML() {
        document.write('<table style="border: 1px solid; margin: 50px 50px"><thead><tr><th style="border: 1px solid;">name</th><th style="border: 1px solid;">position</th><th style="border: 1px solid;">salary</th></tr></thead>')
        let row = '<tbody>'
        this.arr.forEach(element => {
            row += `<tr><td style="border: 1px solid;">${element.name}</td><td style="border: 1px solid;">${element.position}</td><td style="border: 1px solid;">${element.salary}</td><tr>`
        })
        document.write(row + '</tbody>' + '</table>')
    }
}

const EmpTableNew = new EmpTable(arrEmployees)
EmpTableNew.getHTML()