"use strict";

const product = prompt("Наименование товара ?");

const count = prompt("Количество товара в штуках?");
if (!isNaN(count) && count > 0) {
  const category = prompt("Категория товара ?");
  const price = prompt("Стоимость в деревянных за штуку?");
  if (!isNaN(price) && price > 0) {
    console.log(`На складе ${count} товара ${product} из категории ${category}
      на сумму ${price * count} деревянных`);
  } else {
    console.log(
      "Вы ввели некорректные данные на вопрос стоимость в деревянных за штуку,должно быть число больше 0"
    );
  }
} else {
  console.log(
    "Вы ввели некорректные данные на вопрос количество товара в штуках,должно быть число больше 0"
  );
}
