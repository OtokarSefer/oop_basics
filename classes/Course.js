class Course {
    constructor(name) {
      this.name = name;
      this.grades = [];
    }
  
    getGrades() {
      return this.grades;
    }
  
    addGrade(student, grade) {
      this.grades.push({ student, grade });
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) return -1;
      const total = this.grades.reduce((sum, gradeObj) => sum + gradeObj.grade, 0);
      return total / this.grades.length;
    }
  
    description() {
      return `${this.name} - Course`;
    }
  }
  
  module.exports = Course;
  