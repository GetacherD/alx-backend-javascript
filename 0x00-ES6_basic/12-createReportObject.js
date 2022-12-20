export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(em) {
      return Object.keys(em).length;
    },
  };
}
