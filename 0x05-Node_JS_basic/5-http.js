const http = require('http');
const fs = require('fs');

const filePath = process.argv[2];
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    // eslint-disable-next-line no-use-before-define
    countSync(filePath).then((data) => {
      res.write('This is the list of our students\n');
      res.write(Buffer.from(data));
      res.end();
    });
  }
}).listen(1245);

const countSync = (filePath) => new Promise((success, failure) => {
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
    let result = `Number of students: ${total}\n`;
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
      result += `Number of students in ${key}: ${val}. List: `;
      nd.forEach((d) => {
        if (d) {
          const va = d.split(',');
          if (va[length] === key) {
            if (first) {
              result += ` ${va[0]}`;
              first = 0;
            } else {
              result += `, ${va[0]}`;
            }
          }
        }
      });
      first = 1;
      result += '\n';
    });
    success(result);
  } catch (e) {
    failure(new Error('Cannot load the database'));
  }
});
module.exports = app;
