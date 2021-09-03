const { exportAllDeclaration } = require("@babel/types");
const { TestScheduler } = require("jest-cli");
import { Person } from  "../src/js/ageCalculator";

describe ('Person', () =>{
  test('Should create a person object with an initial age', () =>{
    let person = new Person('Art', 28);
    expect(person.name).toEqual("Art");
    expect(person.age).toEqual(28);
  });
  test('Should calculate the rough amount of years a person has left to live, baseline average will be 80', () =>{
    let person = new Person ('Art', 28);
    person.averageAgeLeft();
    expect(person.averageRemaining).toEqual(52);
  });
  test('Should calculate years beyond expected average if user has surpassed it', () =>{
    let person = new Person ('Roger', 90);
    person.averageAgeLeft();
    expect(person.livedBeyond).toEqual(10);
  });
  // test('Should calculate the age of a person on Mercury', () =>{
  //   let person = new Person('Art', 28);
  //   expect(person.mercuryAge).toEqual(116);
  // })
});