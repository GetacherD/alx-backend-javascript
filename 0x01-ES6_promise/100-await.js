import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = {};
  await createUser().then((data) => {
    obj.user = data;
  }).catch(() => {
    obj.user = null;
  });
  await uploadPhoto().then((data) => {
    obj.photo = data;
  }).catch(() => {
    obj.photo = null;
  });
  return Promise.resolve(obj);
}
