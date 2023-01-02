const weakMap = new WeakMap();
let count = 0;
function queryAPI(endpoint) {
  count += 1;
  weakMap.set(endpoint, count);
  if (count >= 5) {
    count = 0;
    throw new Error('Endpoint load is high');
  }
}
module.exports = { queryAPI, weakMap };
// console.log(queryAPI)
