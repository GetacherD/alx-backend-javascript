process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  process.stdout.write(data.toString());
  process.exit(0);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
