### problem001

Napisz funkcję wyliczającą pole trójkąta o zadanych bokach (kolejne boki trójką są argumentami funkcji). Wyliczone pole 
zaokrąglij do dwóch miejsc po przecinku (wynik musi być typem numerycznym). W przypadku gdy pole trójkąta nie może zostać wyliczone, funkcja powinna zwrócić wartość `-1`.
Funkcja powinna przyjmować wyłącznie wartości większe od zera, również wówczas zwracana wartość to `-1`.
```
function triangleArea(a, b, c) {...
```

### problem002

Napisz funkcję, która zwróci łańcuch tekstowy przesunięty o określoną liczbę liter (pierwszy argument funkcji to łańcuch 
tekstowy, drugi to liczba liter do przesunięcia). Przesuniecie rozumiane jest przeniesienie pierwszej litery na koniec łańcucha.
Drugi argument musi być nieujemną liczbą, w przeciwnym wypadku funkcja zwraca pusty łańcuch tesktowy.
```
function stringRotate(a, b) {...
```
Przykład:
```
console.log(stringRotate('UniwersytetŚląski', 2)); // iwersytetŚląskiUn
```

### problem003

Napisz funkcję sprawdzającą czy podany jako argument rok, jest przestępny. Zwracana przez funkcję wartość musi być typem logicznym. 
```
function isLeapYear(a) {...
```

### problem004

Napisz funkcję zwracającą liczbę wszystkich pierwszych stycznia z podanego zakresu lat, które były/są/będą niedzielą. 
Pierwszy argument to rok, od którego rozpoczynamy szukanie (włącznie), drugi to rok, do którego szukamy (włącznie).
```
function getTotalNumberOfNewYaersEveSundays(a, b) {...
```
### problem005

Napisz funkcję przyjmującą jako argumenty dwie liczby całkowite. Jeżeli liczby są równe to funkcja zwraca ich potrojoną sumę, w przeciwnym wypadku 
funkcja zwraca normalną sumę ich wartości. Jeżeli na wejście funkcji zostanie przekazany nieprawidłowy typ, funkcja zwraca `null`.
```
function strangeSum(a, b) {...
```

### problem006

Napisz funkcję, która sprawdza, czy podana jako pierwszy argument, liczba jest podzielna przez kolejne podane na wejście funkcji.
Funkcja musi zwracać wartość logiczną, `true` w przypadku podzielności, `false` w przeciwnym.
```
function divisible(a) {...
```
Przykład:
```
console.log(divisible(15, 3, 5)); // true
console.log(divisible(15, 3, 5, 6)); // false
```

### problem007

Napisz funkcję zwracającą największą liczbę z podanych argumentów, liczba argumentów funkcji nie jest określona.
```
function findMax(a, b, ...) {...
```
Przykład:
```
console.log(findMax(15, 3, 5)); // 15
console.log(findMax(5, 3, 5, 6)); // 6
```

### problem008

Napisz rekurencyjną funkcję wyliczającą `n`-ty element ciągu, w którym pierwszy element (indeks równy jeden) jest równy `-1`, kolejne dwa elementy są równe `-2`, a 
każdy kolejny element jest wyliczany na podstawie wzoru: `magicSequence(a - 1) * (a - 3)`.
```
function magicSequence(a) {...
```

