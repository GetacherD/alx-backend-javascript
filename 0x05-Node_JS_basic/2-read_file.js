const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
if (!filePath || !fs.existsSync(path.join(__dirname, filePath)) || filePath.slice(filePath.length - 4, filePath.length - 1) !== 'csv') {
  throw new Error('Cannot load the database');
}
const countStudents = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const nd = data.split('\n').slice(1);
    let total = 0;
    const st = new Set();
    const mp = new Map();
    const length = nd[0].split(',').length - 1;

    nd.forEach((d) => {
      if (d) {
        const va = d.split(',');
        st.add(va[length]);
        total += 1;
      }
    });
    console.log(`Number of students: ${total}`);
    st.forEach((v) => {
      mp.set(v, 0);
    });

    nd.forEach((d) => {
      if (d) {
        total += 1;
        const key = d.split(',')[length];
        mp.set(key, mp.get(key) + 1);
      }
    });

    let first = 1;
    mp.forEach((val, key) => {
      process.stdout.write(`Number of students in ${key}: ${val}. List: `);
      nd.forEach((d) => {
        if (d) {
          const va = d.split(',');
          if (va[length] === key) {
            if (first) {
              process.stdout.write(`${va[0]}`);
              first = 0;
            } else {
              process.stdout.write(`, ${va[0]}`);
            }
          }
        }
      });
      first = 1;
      process.stdout.write('\n');
    });
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
