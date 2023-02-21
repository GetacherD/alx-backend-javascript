const fs = require('fs');


const countStudents = (file_path) => {
        try {
                const data = fs.readFileSync(file_path, 'utf-8');
                const nd = data.split('\n').slice(1);
                // console.log(nd)
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
                                key = d.split(',')[length];
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
        } catch {
                throw error('Error: Cannot load the database', err);
        }
};
module.exports = countStudents;
