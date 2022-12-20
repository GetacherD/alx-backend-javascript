export default function createIteratorObject(report) {
  const res = [];
  for (const em in report.allEmployees) {
    if (report.allEmployees[`${em}`]) {
      for (const i of report.allEmployees[`${em}`]) {
        res.push(i);
      }
    }
  }
  return res;
}
