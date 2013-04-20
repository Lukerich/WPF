/**
 * Richard Luke
 * Date: 4/20/13
 * Expressions Worksheet - Slice of Pie part II
 */

// Calculate how many whole pizza slices Sparky will get

var numSlcPP = 8;  // Variable assigning the number of slices per pizza

var numPatP = 30;  // Variable assigning the number of people at the party

var numPord = 10;  // Variable assigning the number of pizzas ordered

var numSgot = (numSlcPP * numPord) % numPatP; // Variable assigning the number of whole slices Sparky got

// Printing out the output of number of whole slices Sparky gets
console.log("Sparky got " + [numSgot] + " slices of pizza.");
