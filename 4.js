//Utwórz funkcję podnoszącą do kwadratu każdą cyfrę liczby.

function squareDigits(b) {
  const start = b.toString().split("");

  const squaredDigits = start.map(function (digit) {
    return (Number(digit) ** 2).toString();
  });

  return squaredDigits.join("");
}

console.log(squareDigits(9119));

console.log(squareDigits(2483));

console.log(squareDigits(3212));
