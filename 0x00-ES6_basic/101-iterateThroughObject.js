export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const val in reportWithIterator) {
    if (val === 0) {
      str += reportWithIterator[val];
    } else {
      str += ` | ${reportWithIterator[val]}`;
    }
  }
  return str;
}
