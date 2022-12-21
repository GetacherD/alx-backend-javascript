export default function divideFunction(numerator, denominator) {
  return new Promise((res, rej) => {
    if (denominator !== 0) {
      res(numerator / denominator);
    } else {
      rej(new Error('cannot divide by 0'));
    }
  });
}
