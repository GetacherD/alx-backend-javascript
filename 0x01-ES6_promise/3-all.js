import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let first;
  let last;
  return uploadPhoto().then((data) => {
    body = data.body;
    createUser().then((data) => {
      first = data.firstName;
      last = data.lastName;
      console.log(`${body} ${first} ${last}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
  }).catch(() => {
    console.log('Signup system offline');
  });
}
