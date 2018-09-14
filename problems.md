### problem001

Napisz funkcję wyliczającą pole trójkąta o zadanych bokach (kolejne boki trójką są argumentami funkcji). Wyliczone pole 
zaokrąglij do dwóch miejsc po przecinku. W przypadku gdy pole trójkąta nie może zostać wyliczone, funkcja powinna zwrócić wartość `-1`.
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
