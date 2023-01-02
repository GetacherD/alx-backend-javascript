export default function updateStudentGradeByCity(objs, city, newGrades) {
  if (!Array.isArray(objs)) {
    return [];
  }

  const stds = objs.filter((std) => std.location === city);
  const newStuds = stds.map((std) => {
    for (const v of newGrades.values()) {
      if (v.studentId === std.id) {
        return { ...std, grade: v.grade };
      }
    }
    return { ...std, grade: 'N/A' };
  });
  return newStuds;
}
