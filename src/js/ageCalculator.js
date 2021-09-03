export class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.averageRemaining = 0;
    this.livedBeyond = 0;
  };
  averageAgeLeft() {
    if (this.age <= 80){
    this.averageRemaining = (80 - this.age);
    } else {
    this.livedBeyond = (this.age - 80);
    }
  }
};