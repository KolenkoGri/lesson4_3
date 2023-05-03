"use strict";

// ВТОРАЯ ЗАДАЧА
const rain = Math.round(Math.random());

if (rain === 1) {
  console.log("Пошёл дождь. Возьмите зонт!");
} else {
  console.log("Дождя нет!");
}

// ТРЕТЬЯ ЗАДАЧА

const mathematics = prompt("Введите кол-во баллов по математике:");
const russianLanguage = prompt("Введите кол-во баллов по русскому языку:");
const informatics = prompt("Введите кол-во баллов по информатике:");

if (
  Number(mathematics) + Number(russianLanguage) + Number(informatics) >=
  265
) {
  console.log("Вы поступили на бюджет");
} else {
  console.log("Вы не поступили на бюджет или ввели данные не в формате чисел");
}

//  Четвёртая задача

const banknote = 100;

const needBank = prompt("Сколько денег Вы хотите снять ?");
if (needBank % 100 === 0) {
  console.log(`Вы можете снять средства в размере ${needBank}`);
} else {
  console.log("Вы не можете снять деньги , введите сумму кратную 100");
}
