export default function getStudentIdsSum(objs) {
  if (!Array.isArray(objs)) {
    return 0;
  }
  return objs.reduce((sum, item) => sum + item.id, 0);
}
