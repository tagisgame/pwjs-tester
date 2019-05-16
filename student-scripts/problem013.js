function parametricSort(a, b) {
  if (b !== "asc" && b !== "desc") return false;

  let array = a.slice();
  array.sort(b === "asc" ? (a, b) => a - b : (a, b) => b - a);

  return array;
}
