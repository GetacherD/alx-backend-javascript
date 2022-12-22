export default class HolbertonCourse {
  constructor(name, length, students) {
    this.students = students;
    this.name = name;
    this.length = length;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new Error('Name must be a string');
    } else {
      this._name = val;
    }
  }

  set students(val) {
    if (!Array.isArray(val) || !(val.every((x) => typeof x === 'string'))) {
      throw new Error('students must be an array of strings');
    } else {
      this._students = val;
    }
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new Error('Length must be a number');
    } else {
      this._length = val;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
