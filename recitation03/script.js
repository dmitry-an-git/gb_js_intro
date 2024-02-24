// Текст задания 1
// 1. Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
// 2. Создайте функцию которая возводит переданное число в квадрат
// 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

function greetings(name, surname, age) {
    console.log(`Привет ${name} ${surname} с возрастом ${age}`);
}

greetings("иван", "petrov", 18)

function squared(number) {
    return number * number;
}

console.log(squared(3));

function sign(number) {
    if (number > 0) {
        console.log('+++');
    }
    if (number < 0) {
        console.log('---');
    }
}

sign(9);
sign(-9);

// Задание 2
// 1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = 1; let param2 = 2; let param3 = 3;
// 1. Дана фукнция
// function func(num = 5) {
// console.log(num * num); }
// Расскажите, каким будет результат каждого из вызовов функции. func(2);
// func(3);
// func();

function sumOfThree(first, second, third) {
    console.log(first + second + third);
}

let param1 = 1; let param2 = 2; let param3 = 3;

sumOfThree(param1, param2, param3);

// Задание 3
// 1. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
// 2. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции

function squareRoot(number) {
    return Math.sqrt(number);
}

console.log(squareRoot(3) + squareRoot(4));

function getMin(number1, number2) {
    if (number1 < number2) {
        return number1;
    } else if (number2 < number1) {
        return number2;
    }
}

console.log(getMin(1, 2));


// Задание 4 
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// 2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток(Доброе утро\день\вечер\ночи Иван)

function dayOfWeek(number) {
    if (number < 0 || number > 7) {
        return "error";
    } else {
        switch (number) {
            case 1: return "monday";
            case 2: return "tuesday";
            case 3: return "wednesday";
            case 4: return "thursday";
            case 5: return "friday";
            case 6: return "satturday";
            case 7: return "sunday";
        }
    }
}

console.log(dayOfWeek(5));

function greetings(name) {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 6) {
        greeting = "good night";
    } else if (hours < 12) {
        greeting = "good morning";
    } else if (hours < 20) {
        greeting = "good day";
    } else {
        greeting = "good evening";
    }

    console.log(`${greeting}, ${name}`);

}

greetings("ivan");