"use strict";

// Для правильного отображения необходимо закомментировать файл tasksHard_1.js

const sum = prompt("Введите сумму для налога");

const tax1 = 0.13;
const tax2 = 0.2;
const tax3 = 0.3;

const sum1 = 15000;
const sum2 = 50000;

if (sum < 15000 && sum > 0) {
  console.log("Ваша сумма налога", sum * tax1);
} else if (sum > 15000 && sum < 50000) {
  console.log("Ваша сумма налога", (sum - sum1) * tax2);
} else if (sum > 50000) {
  console.log("Ваша сумма налога", (sum - sum2) * tax3);
} else {
  console.log("Введите положительную сумму в формате числа");
}
