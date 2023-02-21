process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  process.stdin.resume();
  process.stdout.write(`Your name is: ${data}`);
  process.exit(0);
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
