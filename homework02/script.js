// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

console.log('task 01');

let num1 = prompt('enter first number');
let num2 = prompt('enter second number');

if (isNaN(num1) || isNaN(num2)) {
    console.log('wrong input');
} else {
    console.log(`first number (${num1}) is equal to or less than 1:`);
    console.log(num1 <= 1);
    console.log(`second number (${num2}) is equal to or greater than 3:`);
    console.log(num2 >= 3);
}

// Задание 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

console.log('task 02');

let test = true;
console.log((test === true) ? '+++' : '---');

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

console.log('task 03');

let day = prompt('enter the day number for task 03');

if (isNaN(day) || (day < 1) || (day > 31)) {
    console.log('wrong input');
} else {
    if (day < 11) {
        console.log(`the day (${day}) is in the first decade`);
    } else if (day < 21) {
        console.log(`the day (${day}) is in the second decade`);
    } else {
        console.log(`the day (${day}) is in the third decade`); // assuming that 31st is in the 3rd decade
    }
}

// Задание 4

// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

console.log('task 04');

let userNum = prompt('pls enter a number for task 04');

let residual = userNum % 1000;
let hundreds = (residual - residual % 100) / 100;
residual = residual % 100;
let tens = (residual - residual % 10) / 10;
residual = residual % 10;

console.log(`В числе ${userNum} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${residual}`)