const Person = require('./Person');

class Student extends Person {
  constructor(name) {
    super(name);
    this.id = null;
    this.grades = [];
  }

  setId(id) {
    if (this.id === null) {
      this.id = id;
    }
  }

  getId() {
    return this.id;
  }

  getGrades() {
    return this.grades;
  }

  addGrade(course, grade) {
    this.grades.push({ course, grade });
  }

  getAverageGrade() {
    if (this.grades.length === 0) return -1;
    const total = this.grades.reduce((sum, gradeObj) => sum + gradeObj.grade, 0);
    return total / this.grades.length;
  }

  description() {
    return `${this.name} - Student`;
  }
}

module.exports = Student;
