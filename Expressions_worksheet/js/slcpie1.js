/**
 * Richard Luke
 * Date: 4/20/13
 * Expressions Worksheet - Slice of Pie part I
 */

// Calculate how much pizza each party goer will get

var numSlcPP = 8;  // Variable assigning the number of slices per pizza

var numPatP = 30;  // Variable assigning the number of people at the party

var numPord = 10;  // Variable assigning the number of pizzas ordered

var numSpP = (numSlcPP * numPord) / numPatP; // Variable assigning the number of slices per person

// Printing out the output of number of slices each person ate at the party
console.log("Each person ate " + [numSpP] + " slices of pizza at the party.");
