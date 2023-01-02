export default function cleanSet(st, str) {
  const res = [];
  if (!str) {
    return '';
  }
  st.forEach((item) => {
    if (String(item).startsWith(str)) {
      res.push(String(item).slice(str.length));
    }
  });
  return res.join('-');
}
