while (true) {
  const a = prompt();
  if (isNaN(a)) {
    console.log(a);
    break;
  } else {
    console.log(`Это не строка`);
  }
}
