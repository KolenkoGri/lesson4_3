"use strict";

const sum = prompt("Введите сумму для налога");

const tax1 = 0.13;
const tax2 = 0.2;
const tax3 = 0.3;

if (sum < 15000 && sum > 0) {
  console.log("Ваша сумма налога", sum * tax1);
} else if (sum > 15000 && sum < 50000) {
  console.log("Ваша сумма налога", sum * tax2);
} else if (sum > 50000) {
  console.log("Ваша сумма налога", sum * tax3);
} else {
  console.log("Введите положительную сумму в формате числа");
}
