// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран
// каждый из этих элементов.
// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
// первого элемента число 1, вместо второго - 2, вместо третьего - 3.

const arr = [1, 2, 3];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

const arrRandom = [2, 3, 10, 10, 10];
console.log(arrRandom.length);

const arr3 = ['a', 'b', 'c'];
arr3[0] = 1;
arr3[1] = 2;
arr3[2] = 3;

console.log(arr3);

// Задание 2 (тайминг 15 минут)
// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
// 2. Узнайте длину следующего массива: const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// 1. Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.
// 1. Создайте произвольный массив из 5 элементов, Удалите из него два
// элемента. Проверьте, какое станет значение свойства length после этого.

for (let index = 0; index < arr.length; index++) {
    arr[index]++;
}
console.log(arr);

const arr4 = [];
arr4[3] = 'a';
arr4[8] = 'b';
console.log(arr4.length);

const arr5 = [1, 2, 3];
arr5.push(4);
arr5.push(5);
console.log(arr5);

const arr6 = [4, 5, 6, 6, 7];
arr6.pop();
arr6.pop();
console.log(arr6.length);

// Задание 3 (тайминг 25 минут)
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// 2. С помощью цикла for выведите в консоль нечетные числа в
// промежутке от 1 до 99.
// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// 4. Дано число num с неким начальным значением. Умножайте его на 3
// столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

for (let index = 11; index < 34; index++) {
    console.log(index);
}

for (let index = 1; index < 100; index = index + 2) {
    console.log(index);
}

for (let index = 100; index > 0; index--) {
    console.log(index);
}

let counter = 0;
for (let index = 1; index < 1001; index = index * 3) {
    console.log(index);
    counter++;
}
console.log(`${counter} итераций`);

// Задание 4 (тайминг 25 минут)
// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// 1. Найдите сумму четных чисел от 2 до 100.
// 2. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
// 1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// 2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

const arr7 = [2, 5, 9, 15, 1, 4];
for (let index = 0; index < arr7.length; index++) {
    if (arr7[index] > 3 && arr7[index] < 10) {
        console.log(arr7[index]);
    }
}

let sumOfEven = 0;
for (let index = 0; index < 101; index = index + 2) {
    sumOfEven += index;
}
console.log(sumOfEven);

let string = '-';
for (let index = 0; index < 10; index++) {
    string = string + index + "-";
}
console.log(string);

const arr8 = [2, 5, 9, 0, 3, 1, 4];
let myIndex = 0;
while (arr8[myIndex] != 0) {
    console.log(arr8[myIndex]);
    myIndex++;
}


// 1. Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
// 2. С помощью двух вложенных циклов выведите на экран следующую строку:
// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве.
// 1. Дан следующий массив: [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < arr9.length; index++) {
    if (arr9[index] % 2 == 0) {
        console.log(arr9[index] * arr9[index]);
    } else if (arr9[index] % 3 == 0) {
        console.log(arr9[index] * arr9[index] * arr9[index]);
    }
}

const arr10 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter3 = 0;
for (let index = 0; index < arr10.length; index++) {
    if (arr10[index] == 3) { counter3++ };
}
console.log(counter3);

const arr11 = [1, 2, 3, 4, 5];
arr11.splice(1, 2);
console.log(arr11);
