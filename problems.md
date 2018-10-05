## Struktura programu

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

### problem009

Napisz funkcję przyjmującą trzy argumenty: pierwszy z nich jest funkcją anonimową, która zostanie wykonana, a na jej
wejście podane zostaną pozostałe dwa argumenty funkcji `runIt`. Funkcja zwraca wynik wykonanej funkcji anonimowej.
```
function runIt(a, b, c) {...
```
Przykład:
```
console.log(runIt((a, b) => a + b, 3, 5)); // 8
```

## Obiekty i tablice

### problem010

Napisz funkcję **kopiującą** wielowymiarową tablicę, tablica podana jest jako argument funkcji. Nowo utworzona tablica nie może zawierać elementów 
będących referencją do orginalnej tablicy.
```
function deepCopy(a) {...
```

### problem011

Napisz funkcję, której pierwszym argumentem jest wielowymiarowa tablica zawierająca dowolne wartości, drugi argument zawiera dowolną wartość. Funkcja zwraca 
liczbę wystąpień podanej wartości we wszystkich wymiarach tablicy.
```
function deepFindAndCount(a, b) {...
```
Przykład:
```
console.log(deepFindAndCount([5, 3, 2, [5, 1], [[5]]], 5)); // 3
```

### problem012

Napisz funkcję przyjmującą 2 obiekty jako swoje argumenty. Funkcja zwraca tablicę z nazwami własności obu obiektów z wyłączeniem własności, które znajdują się 
w obu obiektach. Funkcja nie musi sprawdzać zagnieżdżonych obiektów. Wynikowa tablica powinna najpierw zawierać własności z pierwszego obiektu. Kolejność własności 
powinna zostać zachowana.
```
function objectsDiff(a, b) {...
```
Przykład:
```
console.log(objectsDiff({x: 1, y: 1, z: 1}, {w: 2, x: 2, z: 2}); // ['y', 'w']
```

### problem013

Napisz funkcję zwracającą posortowaną tablicę przekazaną jako pierwszy argument funkcji, drugi argument funkcji musi mieć wartość `asc` lub `desc` (w przypadku podania 
innej wartości funkcja zwraca wartość `false`). W zadaniu wykorzystać wbudowaną w język funkcję `Array.prototype.sort()`. Gdy drugi argument funkcji ma wartość `asc` 
tablica powinna być posortowana rosnącą, dla wartości `desc` malejąco.
```
function parametricSort(a, b) {...
```

### problem014

Stwórz obiekt `Vectors` zawierający metody wykonujące operację na wektorach kolumnowych i liczbach, które zwracają wynikowy wektor. Jako n-wymiarowy wektor wykorzystaj zwykłe tablice.
W przypadku gdy dana operacja nie może zostać przeprowadzona, metody powinny zwrócić wartość `false`.
Obiekt powinnien implementować operacje:
- sumy: `sum(a, b)`, która dodaje dwa wektory `a` i `b` do siebie,
- mnożenia przez liczbę: `mulByScalar(a, b)`, która mnoży wektor `a` przez liczbę `b`.

Operacje dodawania oraz mnożenia przez liczbę opisuje ten [dokument](http://wmii.uwm.edu.pl/~mariab/DYDAKTYKA_WSIiZ/Algebra%20liniowa/Materialy/02_Wektory_teoria.pdf).

### problem015

Stwórz obiekt `Stack`, różniący się od klasycznego stosu metodami `push` i `pop`, które mają mają dodatkowy argument. Stos powinien być pusty.
Metoda `push(a, b)` doda na stos `b - 1` wartości `null` a nastepnie doda wartość przekazaną jako argument `a`. Podanie argumentu `b` jest opcjonalne, jego domyślna wartość to 1.
Metoda `pop(a)` zdejmie ze stosu `a` elementów i zwróci ostatni z nich, tj. tego, którego dodano jako pierwszego. Podanie argumentu `a` jest opcjonalne, jego domyślna wartość to 1.

## Funkcje wyższego rzędu

### problem016

Napisz funkcję `maybe(a, b, c)`, gdzie `a` to predykat, czyli funkcja zwracająca wartość logiczną, przyjmujący na wejście wartość `c`; `b` to dowolna funkcja, c jest dowolną wartością.
Funkcja powinna zwracać wartość funkcji `b(c)` jeżeli `a` zwraca `true`, lub `c` w przeciwnym przypadku.
```
function maybe(a, b, c) {...
```

### problem017

Napisz funkcję `compose()`, która zwróci nową funkcję złożoną na podstawie przekazanych przez argumenty funkcji czystych.
Przekazane funkcje muszą być wykonane w kolejności od prawej do lewej. W przypadku gdy na wejście nie zostanie podany żaden argument, zwracana, nowa funkcja
powinna przepisywać wartość.
```
function compose(...) {...
```
Przykład:
```
let fn1 = compose(x => x*2, x => x + 1, x => x - 5);
console.log(fn1(100)); // 192
let fn2 = compose();
console.log(fn2(100)); // 100
```

### problem018

Napisz funkcję `reverse(a)`, której wynikiem będzie nowa funkcja, działająca dokładnie jak podana jako argument funkcja `a`, z tym, że argumenty nowej funkcji będą 
odwrócone względem orginału.
```
function reverse(a) {...
```
Przykład:
```
let fn1 = (a, b) => a - b;
let fn2 = reverse(fn1);
console.log(fn1(2, 1)); // 1
console.log(fn2(2, 1)); // -1
```

### problem019

Napisz funkcję `carry(a)`, której wynikiem będzie nowa funkcja przyjmująca `n-1` argumentów względem orginału, ta z kolei zwraca funkcję przyjmującą `n-2` argumenty względem orginału itd.
Celem nowej funkcji jest wywołanie kaskady funkcji, z której każda z nich jest argumentowa.
```
function carry(a) {...
```
Przykład:
```
let fn1 = carry((a, b) => a + b);
console.log(fn1(5)(4)); // 9
let fn2 = carry((a, b, c) => a + b - c);
console.log(fn2(5)(4)(2)); // 7
```

## Życie obiektów

### problem020

Stwórz funkcję kontruktora `Square(a)`, przyjmującą jako argument długość boku kwadratu. Tworzone za pomocą kontruktora obiekty muszą mieć 
metodę `getArea()` zwracającą pole kwadratu oraz metodę `getPerimeter()` zwracającą obwód figury.

