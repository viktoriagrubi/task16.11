// Utwórz funkcję, która przyjmuje obiekt i zwraca klucze i wartości jako oddzielne tablice. Zwraca klucze posortowane alfabetycznie i odpowiadające im wartości w tej samej kolejności.

function keysAndValues(b) {
  const keys = Object.keys(b);
  const sortedKeys = keys.sort();

  const values = sortedKeys.map(function (key) {
    return b[key];
  });

  return [sortedKeys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
