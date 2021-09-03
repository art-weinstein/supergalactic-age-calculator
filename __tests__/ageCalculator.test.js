// const { exportAllDeclaration } = require("@babel/types");
// const { TestScheduler } = require("jest-cli");
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
  test('Should calculate the age of a person on Mercury', () =>{
    let person = new Person('Art', 28);
    person.mercuryCalculator();
    expect(person.mercuryAge).toEqual("116.7");
  });
  test('Should calculate the average age remaining for a person on mercury', () =>{
    let person = new Person('Art', 28);
    person.mercuryCalculator();
    person.mercuryLeft();
    expect(person.mercuryRemaining).toEqual("216.6")
  });
  test('Should calculate the years lived beyond average expected mercury years', () =>{
    let person = new Person ('Roger', 90);
    person.mercuryCalculator();
    person.mercuryLeft();
    expect(person.mercuryBeyond).toEqual("41.7")
  });
  test('Should calculate the age of a person in Venus years', () => {
    let person = new Person('Art', 28);
    person.venusCalculator();
    expect(person.venusAge).toEqual("45.2");
  });
  test('Calculate average remaining Venus years a person has left to live', () => {
    let person = new Person('Art', 28);
    person.venusCalculator();
    person.venusLeft();
    expect(person.venusRemaining).toEqual("83.8");
  });
});