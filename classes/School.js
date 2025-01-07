const Student = require('./Student');
const Course = require('./Course');

class School {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.courses = [];
  }

  addCourse(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
    }
  }

  addStudent(student) {
    if (!this.students.includes(student) && student.age() >= 6 && student.age() <= 18) {
      // Only assign ID if student is not already in the list
      student.setId(this.students.length + 1); // Assign unique ID
      this.students.push(student);
    }
  }

  addStudentGrade(student, course, grade) {
    // Check if student and course are valid in the school
    if (this.students.includes(student) && this.courses.includes(course)) {
      student.addGrade(course, grade);
      course.addGrade(student, grade);
    }
  }

  getStudents() {
    return this.students;
  }

  getCourses() {
    return this.courses;
  }

  getStudentsOrderedByAverageGrade() {
    return [...this.students].sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
  }

  description() {
    return `${this.name} - School`;
  }
}

module.exports = School;
