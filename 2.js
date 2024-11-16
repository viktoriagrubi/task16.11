// Napisz funkcję, która przyjmuje ciąg znaków i zwraca ciąg znaków w odwrotnej kolejności .

function invert(boom) {
  let reversed = boom.split("").reverse().join("");

  let inverted = reversed
    .split("")
    .map((x) => {
      if (x === reversed.toUpperCase()) {
        return x.toLowerCase();
      } else {
        return x.toUpperCase();
      }
    })
    .join("");
  return inverted;
}

console.log(invert("dLROW YM sI HsEt"));

console.log(invert("ytInIUgAsnOc"));

console.log(invert("step on NO PETS"));

console.log(invert("XeLPMoC YTiReTXeD"));
