import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const res = Promise.all([createUser(), uploadPhoto()]);
  res.then((val) => {
    const obj = {};

    for (const v of val) {
      for (const k in v) {
        if (v[`${k}`]) {
          obj[`${k}`] = `${v[k]}`;
        }
      }
    }
    console.log(`${obj.body} ${obj.firstName} ${obj.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
