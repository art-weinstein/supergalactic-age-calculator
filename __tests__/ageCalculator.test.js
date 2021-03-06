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
    expect(person.averageRemaining).toEqual("52.0");
  });
  test('Should calculate years beyond expected average if user has surpassed it', () =>{
    let person = new Person ('Roger', 90);
    person.averageAgeLeft();
    expect(person.livedBeyond).toEqual("10.0");
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
  test('Should calculate the time lived beyond the average expected life in Venus years', () =>{
    let person = new Person ('Roger', 90);
    person.venusCalculator();
    person.venusLeft();
    expect(person.venusBeyond).toEqual("16.2");
  });
  test('Should calculate the time lived in Mars years', () => {
    let person = new Person ("Art", 28);
    person.marsCalculator();
    expect(person.marsAge).toEqual("14.9");
  });
  test('Should calculate average remaining time a person has left to live in Mars years', () => {
    let person = new Person ("Art", 28);
    person.marsCalculator();
    person.marsLeft();
    expect(person.marsRemaining).toEqual("27.7");
  });
  test('Should calculate the time lived beyond the average expected life in Mars years', () => {
    let person = new Person ("Roger", 90);
    person.marsCalculator();
    person.marsLeft();
    expect(person.marsBeyond).toEqual("5.3")
  });
  test('Should calculate the time lived in Jupiter years', () =>{
    let person = new Person("Art", 28);
    person.jupiterCalculator();
    expect(person.jupiterAge).toEqual("2.4")
  });
  test('Should calculate the time remaining to live in Jupiter yeras', () =>{
    let person = new Person("Art", 28);
    person.jupiterCalculator();
    person.jupiterLeft();
    expect(person.jupiterRemaining).toEqual("4.3");
  });
  test('Should calculate the amount of time lived in Jupiter years beyond the expected average', () =>{
    let person = new Person ("Roger", 90);
    person.jupiterCalculator();
    person.jupiterLeft();
    expect(person.jupiterBeyond).toEqual("0.9");
  });
});