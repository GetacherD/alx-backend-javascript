export default function uploadPhoto(filename) {
  return new Promise((res, rej) => {
    if (filename) {
      rej(new Error(`${filename} cannot be processed`));
    } else {
      res(true);
    }
  });
}
