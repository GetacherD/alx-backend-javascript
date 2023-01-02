export default function cleanSet(st, str) {
  const res = [];
  st.forEach((item) => {
    if (String(item).startsWith(str) && str) {
      res.push(String(item).slice(str.length));
    }
  });
  return res.join('-');
}
