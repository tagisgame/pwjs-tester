function magicSequence(a) {
  let sequence = [,-1,-2,-2];

  if (a >= 1 && a <= 3) {
    return sequence[a];
  }

  sequence[a] = magicSequence(a - 1) * (a - 3);
  return sequence[a];
}
