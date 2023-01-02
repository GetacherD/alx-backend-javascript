export default function hasValuesFromArray(st, arr) {
  return arr.every((item) => st.has(item));
}
