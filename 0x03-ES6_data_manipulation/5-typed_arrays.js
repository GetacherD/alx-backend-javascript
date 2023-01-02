export default function createInt8TypedArray(length, position, number) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arr = new ArrayBuffer(length);
  const view = new DataView(arr);
  view.setUint8(position, number);
  return view;
}
