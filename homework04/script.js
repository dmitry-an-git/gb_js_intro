// Повторить то, что было на семинаре, либо решить следущие задания
// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


for (let index = 0; index < 11; index++) {
    if (index == 0) {
        console.log("0 - это ноль");
    } else if (index % 2 == 0) {
        console.log(`${index} - четное число`);
    } else {
        console.log(`${index} - нечетное число`);
    }

}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2);
arr2.splice(3, 2);
console.log(arr2);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arr3 = [];
let min = Infinity;
let ifThree = false;
for (let index = 0; index < 5; index++) {
    let newNumber = Math.round(Math.random() * 10);
    if (newNumber < min) {
        min = newNumber;
    }
    if (!ifThree && newNumber == 3) {
        ifThree = true;
    }
    arr3.push(newNumber);
}
console.log(arr3);
console.log(min);
console.log(ifThree);


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let string = "";
for (let index = 0; index < 20; index++) {
    string += "x";
    console.log(string);
}