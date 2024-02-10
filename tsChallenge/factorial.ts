function isFact(num: number): number {
  if (num === 0 || num === 1) {
      return 1;
  } else {
      return num * isFact(num - 1);
  }
}
