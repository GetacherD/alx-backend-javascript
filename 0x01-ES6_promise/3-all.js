import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const res = Promise.all([uploadPhoto(), createUser()]);
  res.then((val) => {
    console.log(val[0].body, val[1].firstName, val[1].lastName);
  }).catch(() => new Error('Signup system offline'));
}
