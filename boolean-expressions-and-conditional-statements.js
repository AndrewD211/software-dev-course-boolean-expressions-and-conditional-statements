/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasCompass = false;
let lostInForest = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const gearChoice = readline.question("Do you have a 'torch' or a 'map'? (You can only have one or the other): ");
if (gearChoice === "map") {
  hasMap = true;
  hasTorch = false;
   console.log("You have a map! You better hope you don't need a torch!");
} else {
  console.log("You have a torch! Who needs a map? Not you!");
}
 
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  hasSword = true;
  console.log("You find a sword in the mountains!");
} else if (choice === "mountains" && !hasTorch) {
  lostInForest = true;
  console.log("It's too dark to proceed. You decide to turn back and get lost.");
} else if (choice === "village" && hasMap) {
  console.log("You find your way to the village.");
} else {
  lostInForest = true;
  console.log("You get lost and wander aimlessly.");
}

if (lostInForest) {
  console.log("You need to find a way out of the forest.");
  const directionChoice = readline.question("Do you go 'north' or 'south'?");
  if (directionChoice === "north" && hasMap) {
    console.log("You wait until daylight and find your way to the mountains using your map!");
    hasSword = true;
    lostInForest = false;
    console.log("You find a sword in the mountains!");
  } else if (directionChoice === "north" && !hasMap) {
    console.log("You wander deeper into the forest and get even more lost.");
  } else if (directionChoice === "south" && hasTorch) {
    hasCompass = true;
    lostInForest = false;
    console.log("You use your torch to find a path out of the forest and discover a compass!");
  } else {
    console.log("You wander aimlessly and find nothing.");
  }
}
  
if (lostInForest) {
  console.log("You are still lost in the forest. You eventually succumb to the elements.");
} else {
  if (hasSword || hasCompass) {
    console.log("You found your way and found some stuff! Way to go!");
  } else {
    console.log("You made it to the village, but that's about it. C-");
  }
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/