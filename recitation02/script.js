
// Текст задания
// 1. Создать новый файл lesson2.html
// 2. Создать переменную и спросить у пользователя “Ваш возраст”
// 3. Вывести на экран текст. Вам “возраст пользователя” лет
// 4. Спросить у пользователя его имя
// 5. Вывести на экран, Добро пожаловать на сайт “Имя пользователя”

// let userAge = Number(prompt("Ваш возраст:"));
// console.log(`Your age is ${userAge}`);
// let userName = String(prompt("Your name:"));
// console.log(`Welcome ${`Welcome to our page ${userName}`}`);

// Текст задания
// 1. Найти остаток от деления двух переменных
// a. let a = 13;
// b. let b = 5;
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. let a;
// b. alert(a);
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert('abc' * 3); 
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert( 1 / 0);
// b. alert(-1 / 0);
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// a. alert('2' * '3'); 

// let a = 13;
// let b = 5;
// let divResidue = a % b;
// console.log(divResidue);

// let a; // undefined
// alert(a);

// alert('abc' * 3); // NAN !!

// alert(1 / 0); // infinity
// alert(-1 / 0); // -infinity

// alert('2' * '3'); // 6


// Текст задания 3
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка.
// 2. Необходимо вывести в консоль результат суммы данных переменных
// a. let a = '2';
// b. let b = '3';
// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль
// вывести текст
// a. Сумма чисел равна “результат”
// b. Разность чисел равна “результат”
// c. Произведение чисел равно “результат”
// d. Частное чисел равно “результат”
// e. Остаток от деления чисел равен “результат”

// let testError = Numer('aaa');

// let a = '2';
// let b = '3';
// console.log(Number(a) + Number(b));
// console.log(+a + (+b));
// console.log(parseInt(a) +pardeInt(b));
// 

// let firstNum = Number(prompt("pls enter the first number"));
// let secondNum = Number(prompt("pls enter the second number"));
// console.log(`Сумма чисел равна ${firstNum + secondNum}`);
// console.log(`Разность чисел равна ${firstNum - secondNum}`);
// console.log(`Произведение чисел равно ${firstNum * secondNum}`);
// console.log(`Частное чисел равно ${firstNum / secondNum}`);
// console.log(`Остаток от деления чисел равен ${firstNum % secondNum}`);



// Текст задания 4
// не запуская код, определите, что выведется console.log(String(true));
// не запуская код, определите, что выведется console.log('a' + true);
// не запуская код, определите, что выведется console.log(Number(true));
// не запуская код, определите, что выведется console.log(true + 1);
// не запуская код, определите, что выведется console.log(true + true)
// не запуская код, определите, что выведется console.log(true - true)
// не запуская код, определите, что выведется console.log(String(true) + Number(true))


// Текст задания 5
// 1. Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который
// a. Выводит в консоль “Число больше 5”
// b. Выводит в консоль “Число меньше 5”
// c. Выводит в консоль “Число равно 5”
// 2. Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
// 3. Пользовать с клавиатуры вводит 2 числа
// a. Необходимо найти какое из двух чисел минимальное
// 4. Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.

// let userNumber = Number(prompt(`pls enter some number`));
// if (userNumber == 5) { alert("number is equal to 5") }
// else if (userNumber < 5) { alert("number is less than 5") }
// else (alert("number is greater than 5"))

// let test1 = 5;
// let test2 = 6;
// console.log((test1 === test2) ? "the vars are equal" : "the vars are not equal");

// let userNumber1 = Number(prompt("first number"));
// let userNumber2 = Number(prompt("second number"));
// if (userNumber2 < userNumber1) {
//     console.log(userNumber2);
// } else if (userNumber1 < userNumber2) {
//     console.log(userNumber1);
// } else if (userNumber1 === userNumber2) {
//     console.log("the numbers are equal");
// } else {
//     console.log("wrong input");
// }

// let userNumber3 = Number(prompt("first number"));
// ((userNumber3 > 0) && (userNumber3 < 15)) ? true : false;