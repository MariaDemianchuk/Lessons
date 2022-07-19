// Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. 
//Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
let $name = 'Maria Demianchuk';
let firstName = 'Maria Demianchuk';
let yourName1 = 'Maria Demianchuk';
let User_name = 'Maria Demianchuk';

// let 1name = 'Maria Demianchuk';
// let your-name = 'Maria Demianchuk';
// let var = 'Maria Demianchuk';
// let my name = 'Maria Demianchuk';


//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”
let yourName = prompt ('Please, enter your name');
console.log (yourName);
alert ('Привіт, ' + yourName);

//Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу
const thisYear = 2022;
let birthYear = prompt ('Please, enter your birth year');
let age = thisYear - birthYear;
console.log(age);
alert ('Гадаю, тобі зараз ' + age + ' років');

//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let a = prompt ('Введіть, будь ласка, довжину сторони квадрата в сантиметрах');
let P = 4*a;
console.log(P);
alert ('Периметр квадрата рівний ' + P + ' см');

//Запитай у користувача радіус кола і виведи площу такої окружності.
const p = 3.14;
let r = prompt ('Please, enter circle radius in in centimeters');
let s = (Math.pow(r,2))*p;
console.log(s);
alert ('Circle area ' + s + ' square centimeters');

//Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
//Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let width = prompt ('Введіть, будь ласка, відстань між містами (в кілометрах)');
let time = prompt ('Введіть, будь ласка, час за який Вам потрібно дістатись місця призначення (в годинах)');
let speed = width/time;
console.log(speed);
alert ('Щоб встигнути до місця призначення за ' +time+ ' год, Вам треба рухатись із швидкістю ' +speed+ ' км/год');

//Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const exchangeRate = 0.98;
let dolAmount = prompt ('Введіть, будь ласка, суму в доларах США:');
let eurAmount = exchangeRate*dolAmount;
console.log(eurAmount);
alert (eurAmount+ ' євро');