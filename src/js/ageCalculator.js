export class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.averageRemaining = 0;
  };
  averageAgeLeft() {
    this.averageRemaining = (80 - this.age);
  };
};