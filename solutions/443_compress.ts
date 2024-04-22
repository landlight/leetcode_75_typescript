/**
 *
 * @param chars
 * @returns
 * Time: O(n)
 * Space: O(1)
 */
function compress(chars: string[]): number {
  let read = 0;
  let write = 0;

  while (read < chars.length) {
    let count = 0;
    let currentChar = chars[read];
    while (read < chars.length && chars[read] === currentChar) {
      read++;
      count++;
    }
    chars[write++] = currentChar;
    if (count > 1) {
      for (let c of count.toString().split("")) {
        chars[write++] = c;
      }
    }
  }

  chars.length = write;
  return write;
}
