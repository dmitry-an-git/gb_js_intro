// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cube(number) {
    return number * number * number;
}

console.log(cube(2) + cube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let input = prompt("pls enter the number:");

if (isNaN(input)) {
    alert("input is not a number");
} else {
    salary(input);
}

function salary(number) {
    console.log(`Размер заработной платы за вычетом налогов равен ${number * 0.87}`);
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let input1 = prompt("pls enter the first number:");
let input2 = prompt("pls enter the second number:");
let input3 = prompt("pls enter the third number:");

function maxOfThree(number1, number2, number3) {
    let max = number1;
    if (max < number2) {
        max = number2;
    }
    if (max < number3) {
        max = number3;
    }
    console.log(max);
}

// maxOfThree(3, 4, 5)
// maxOfThree(5, 4, 3)
// maxOfThree(3, 5, 4)

maxOfThree(input1, input2, input3);


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum(n1, n2) {
    return n1 + n2;
}
function substract(n1, n2) {
    if (n1 > n2) {
        return n1 - n2;
    } else {
        return n2 - n1;
    }
}
function product(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    return n1 / n2;
}

console.log(sum(2, 6));
console.log(substract(2, 6));
console.log(product(2, 6));
console.log(division(2, 6));
