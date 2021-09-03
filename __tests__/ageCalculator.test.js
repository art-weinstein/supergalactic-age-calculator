const { exportAllDeclaration } = require("@babel/types");
const { TestScheduler } = require("jest-cli");
import { Person } from  "../src/js/ageCalculator";

describe ('Person', () =>{
  test('Should create a person object with an initial age', () =>{
    let person = new Person('Art', 28);
    expect(person.name).toEqual("Art");
    expect(person.age).toEqual(28);
  });
});