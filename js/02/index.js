//Request current time from a user (hh:mm), and display how many hours and minutes are left until tomorrow.
let userTIme = prompt('What time is it now?');  
result = userTIme.split(':');
let hours = result[0]*60;
let minutes = Number(result[1]);
const dayMinutes = 1440;
total = hours + minutes;
restInMinutes = dayMinutes - total;
restMinutes = restInMinutes%60;
restHours = (restInMinutes -restMinutes)/60;
alert (`${restHours<10 ? "0"+restHours : restHours}:${restMinutes<10 ? "0"+restMinutes : restMinutes} hours left before the start of a new day`);

//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
sum = (0.1+0.2).toFixed(1);
alert (`сума чисел 0.1 та 0.2 становить: ${sum}`);

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let one = '1';
let two = 2;
sum = Number(one)+two;
alert (`результат додавання рядка "1" і цифри 2 становить: ${sum}`);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let fleshMemory = prompt('Введіть, будь ласка, обсяг флешки (Гб)')*1024; 
const fileVolume = 820;
let fileCount = fleshMemory/fileVolume;
fileCount = fileCount.toString();
fileNumber = fileCount.split('.');
alert (`${fileNumber[0]} файлів, розміром 820 Мб поміститься на флешці обсягом ${fleshMemory/1024} Гб`);

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let money = prompt('Введіть, будь ласка, суму грошей у Вашому гаманці'); 
let price = prompt('Введіть, будь ласка, ціну шоколадки'); 
let rest = (money%price).toFixed(2);
chocolateQuantity = (money/price).toString();
chocolateQuantity = chocolateQuantity.split('.');
alert (`Ви можете придбати ${chocolateQuantity[0]} шоколадок. При цьому залишок у гаманці складе ${rest} грн.`);

//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let numb = prompt('Введіть, будь ласка, тризначне число'); 
let res = '';
res = res + (numb%10);
numb = parseInt(numb/10);
res = res + (numb%10);
numb = parseInt(numb/10);
res =res + numb; 
alert (`result: ${res}`);

//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let amount = Number(prompt('Введіть, будь ласка, суму вкладу')); 
let monthPercent = 0.05/12;
let fullAmount = amount + amount*monthPercent;
fullAmount = fullAmount + fullAmount*monthPercent;
percentAmount = fullAmount-amount;
alert (`Сума відсотків за депозитом із капіталізацією відсотків становить: ${percentAmount.toFixed(2)} грн.`);

//Що повернуть вирази:
// 2 && 0 && 3 - 0, повертає значення першого хибного операнда (завжди буде false - 0, false, null, NaN, underfined, пустий string)
console.log(2 && 0 && 3, 'повертає вираз 2 && 0 && 3');
// 2 || 0 || 3 - 2, повертає перше true значення зліва на право
console.log(2 || 0 || 3, 'повертає вираз 2 || 0 || 3');
// 2 && 0 || 3 - 3, послідовність дій зліва на право - перший оператор (логічне "і") повертає 0, далі другий оператор (логічне "або") із 0 та 3 вибирає перше true і відповідно повертає 3
console.log(2 && 0 || 3,'повертає вираз 2 && 0 || 3' );


