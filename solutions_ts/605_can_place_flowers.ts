function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i]) {
      i += 1;
    } else {
      if (
        flowerbed[i - 1] === 0 &&
        i + 1 < flowerbed.length &&
        flowerbed[i + 1] === 0
      ) {
        flowerbed[i] = 1;
        n--;
        if (n === 0) {
          return true;
        }
      } else {
        return false;
      }
    }
  }

  return n > 0 ? false : true;
}
