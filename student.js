'use strict';

let Student = function(first, last) {
  this.first = first
  this.last = last
  this.name = `${first} ${last}`
  this.courses = []
  this.enroll = function(course) {
    this.courses.push(course)
    course.addStudent(this.name)
  }
  this.courseLoad = function() {
    let results = {}
    this.courses.forEach(function(course){
      results[course.department] = 0;
    })
    this.courses.forEach(function(course){
      results[course.department] += course.credits;
    })
    return results;
  }
}

let Course = function(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.addStudent = function(student) {
    this.students.push(student);
  }
}
