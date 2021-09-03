export class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.averageRemaining = 0;
    this.livedBeyond = 0;
    this.mercuryAge = 0;
    this.mercuryRemaining = 0;
    this.mercuryBeyond = 0;
    this.venusAge = 0;
    this.venusRemaining = 0;
    this.venusBeyond = 0;
    this.marsAge = 0;
    this.marsRemaining = 0;
    this.marsBeyond = 0;
    this.jupiterAge = 0;
    this.jupiterRemaining = 0;
    this.jupiterBeyond = 0;
  }
  averageAgeLeft() {
    if (this.age <= 80){
    this.averageRemaining = (80 - this.age).toFixed(1);
    } else {
    this.livedBeyond = (this.age - 80).toFixed(1);
    }
  }
  mercuryCalculator() {
    this.mercuryAge = (this.age / .24).toFixed(1);
  }
  mercuryLeft() {
    if (this.mercuryAge <= (80 / .24)){
      this.mercuryRemaining = (80 / .24 - this.mercuryAge).toFixed(1);
    } else {
      this.mercuryBeyond = (this.mercuryAge - 80 / .24).toFixed(1);
    }
  }
  venusCalculator() {
    this.venusAge = (this.age / .62).toFixed(1);
  }
  venusLeft() {
    if (this.venusAge <= (80 / .62)){
      this.venusRemaining = (80 / .62 - this.venusAge).toFixed(1);
    } else {
      this.venusBeyond = (this.venusAge - 80 / .62).toFixed(1);
    }
  }
  marsCalculator() {
    this.marsAge = (this.age / 1.88).toFixed(1);
  }
  marsLeft () {
    if (this.marsAge <= 80 / 1.88){
      this.marsRemaining = (80 / 1.88 - this.marsAge).toFixed(1);
    } else {
      this.marsBeyond = (this.marsAge - 80 / 1.88).toFixed(1);
    }
  }
  jupiterCalculator() {
    this.jupiterAge = (this.age / 11.86).toFixed(1);
  }
  jupiterLeft() {
    if(this.jupiterAge <= 80 / 11.86){
      this.jupiterRemaining = (80 / 11.86 - this.jupiterAge).toFixed(1);
    }
  }
}

