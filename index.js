/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value

   let votingAge = 21;

   age = 18 
   if (votingAge => 18) => return true;
   if (votingAge < 18) => return false;

   2. Return true if age is 18 or higher

   HINT: no function required
*/
console.log("Task 1a");

let votingAge = 21;

if (votingAge > 17) {
  console.log("true");
} else {
  console.log("false");
}

// let votingAge = 21 ? "true" : "false";

// votingAge = true || false;

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/

console.log("Task 1b");

var name = "Jane";
var age = 88;

if (age != 18) {
  var name = "Cindy";
}

console.log(name);

/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/

console.log("Task 1c");

let d = "1999";
Number(d);

/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

console.log("Task 1d");

function multiply(a, b) {
  return a * b;
}

multiply(2, 4);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

console.log("Task 2");

function dogYears(humanYears) {
  return humanYears * 7;
}

dogYears(33);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/

function hungryDog(weight, age) {
  /*add your code here*/
  if (age >= 1) {
    if (weight < 5) {
      return weight * 0.05;
    } else if (weight > 5 && weight <= 10) {
      return weight * 0.04;
    } else if (weight > 10 && weight <= 15) {
      return weight * 0.03;
    } else if (weight > 15) {
      return weight * 0.02;
    }
  }
  if (age < 1) {
    if (age < 0.3333333333333333) {
      return weight * 0.1;
    } else if (age > 0.3333333333333333 && age <= 0.58333333333) {
      return weight * 0.04;
    } else if (age > 0.58333333333 && age < 1) {
      return weight * 0.04;
    }
  }
}
hungryDog(15, 1);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below
   - win should return "you win!"
   - lose should return "you lose!"
   -tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/

console.log("Task 4");

var user = "rock";
var computer = Math.random();

if (computer < 0.3) {
  computer = "rock";
} else if (computer <= 0.6) {
  computer = "paper";
} else {
  computer = "scissors";
}

var comparison = function (choice1, choice2) {
  if (choice1 === choice2) {
    return "it's a tie";
  }
  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "Rock Wins!";
    } else {
      return "Paper Wins!";
    }
  }

  if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "Paper Wins!";
    } else {
      return "Scissor Wins!";
    }
  }
  if (choice2 === "scissors") {
    if (choice2 === "rock") {
      return "Rock Wins!";
    } else {
      return "Scissors Wins!";
    }
  }
};

comparison(user, computer);

// function game(user, computer) {
//   if (computer === 1) {
//     return "scissors";
//   } else if {
//   if (computer === 2) {
//     return "paper";
//   } else if {
//   if (computer === 3) {
//     return "rock";
//   }
// }

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter
//Task 5a - KM to Miles
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

console.log("Task 5");

function miles(kilo) {
  return kilo * 0.62137119;
}

miles(7);

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  function feet(cm)
  2. Convert the number of cm to feet
  cm * 0.0328084
  3. Return number of feet
  return cm *
*/

console.log("Task 5b");

function feet(cm) {
  return cm * 0.0328084;
}

feet(7);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong() {
  let bottles;
  let bottlesLeft;
  for (let i = 99; i >= 1; i--) {
    if (i === 1) {
      bottles = "bottle";
      bottlesLeft = "No bottles of soda on the wall";
    } else {
      bottles = "bottles";
      bottlesLeft = i - 1 + " bottles of soda on the wall";
    }
    console.log(i + "" + bottles + " of soda,");
    console.log("Take one down and pass it around");
    console.log(bottlesLeft);
  }
}

console.log(annoyingSong());

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A  if (grade <= 100 && grade >= 90) { return "A"}
   80-89 = B  if (grade <= 89 && grade >= 80) { return "B"}
   70-79 = C if (grade <= 79 && grade >= 70) { return "C"}
   60-69 =  D if (grade <= 69 && grade >= 60) { return "D"}
   below 60 = F  else { return "F" }
*/

function grade(number) {
  if (number <= 100 && number >= 90) {
    return "A";
  } else if (number <= 89 && number >= 80) {
    return "B";
  } else if (number <= 79 && number >= 70) {
    return "C";
  } else if (number <= 69 && number >= 60) {
    return "D";
  }
}
console.log(grade(76));

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/

function vowelCounter(/*add your code here*/) {
  /*add your code here*/
}

/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo() {
  console.log("its working");
  return "bar";
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade,
};
