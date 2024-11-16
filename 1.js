// Utwórz funkcję, która zwraca rozkład częstości tablicy. Ta funkcja powinna zwracać obiekt, gdzie klucze są unikalnymi elementami, a wartościami są częstość występowania tych elementów.

function getFrequencies(array) {
  let frequencies = {};
  array.forEach((item) => {
    if (frequencies[item]) {
      frequencies[item] += 1;
    } else {
      frequencies[item] = 1;
    }
  });
  return frequencies;
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]));

console.log(getFrequencies([1, 2, 3, 3, 2]));

console.log(getFrequencies([true, false, true, false, false]));

console.log(getFrequencies([]));

// jak to zapisać w wersji skróconej?
