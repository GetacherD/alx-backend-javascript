export default function getStudentsByLocation(objs, city) {
  if (!Array.isArray(objs)) {
    return [];
  }
  return objs.filter((item) => item.location === city);
}
