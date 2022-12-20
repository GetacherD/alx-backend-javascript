export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let count = 0;
  for (const val of reportWithIterator) {
    if (count === 0) {
      str += val;
    } else {
      str += ` | ${val}`;
    }
    count += 1;
  }
  return str;
}
