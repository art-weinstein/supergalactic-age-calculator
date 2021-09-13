# Super Galactic Age Calculator

#### A calculator program designed to generate a planet-based age for the user.

#### By Art Weinstein

## Technologies Used

* HTML
* CSS
* JavaScript
* Webpack
* ESLINT

## Description
  This program takes a user age, and returns to them a planet based age (Mecury, Venus, Mars and Jupiter). The program takes into account the global average human lifespan rounded up (80 years), and tells the user roughly how long they would have left to live for each planet's year. If the user happens to be above the age of the average human lifespan, the program returns to them how much longer they have lived in each of the planet's years. As of now, there is only styling and JS code, user interface logic has yet to be applied.  

## Setup/Installation Requirements
1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) this repository.
2. Open the program in VS Code.
3. Open a new Git Bash terminal and run "npm install" to install all the required packages.
4. To observe that the code passes the tests, run "npm test," the program will display all passing or failing tests within your terminal.
5. Since there is no UI logic for this program, "npm run start" will not open an interface that allows you to change name and age parameters for the "Person" constructor. To change your parameters, navigate to "ageCalculator.test.js in the test folder. The constructor requires a name and and age. Change those to any name or age you would like to test, and enter "npm test" to see if it passes. A comma is required to separate each property  (e.g: Person(Joe, 26))

## Known Bugs
* No known bugs at the moment. 

## License
* [MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Art Weinstein

## Contact Information

[Email](artur.weintsein@gmail.com)