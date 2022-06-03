const num = 10;

if (num === 0) console.log(`Зелёный`);
else if ((num <= 10 && num >= 0) || (num >= 19 && num <= 28)) {
  if (num % 2 != 0) {
    console.log(`Красный`);
  } else console.log(`Чёрный`);
} else if ((num >= 11 && num <= 18) || (num >= 29 && num <= 36)) {
  if (num % 2 === 0) console.log(`Красный`);
  else console.log(`Чёрный`);
} else console.log(`Ошибка`);
