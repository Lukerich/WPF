/**
 * Richard Luke
 * Date: 4/20/13
 * Expressions Worksheet - Average shopping bill
 */

// Calculate Average weekly grocery shopping spending over last five weeks

var lst5Wkbill = [221.23, 305.29, 250.12, 288.64, 300.31];  // An array of the last five weekly grocery totals

a = lst5Wkbill[0];
b = lst5Wkbill[1];
c = lst5Wkbill[2];
d = lst5Wkbill[3];
e = lst5Wkbill[4];


var totGB = a+b+c+d+e;

// var totGB = lst5Wkbill[0] + lst5Wkbill[1] + lst5Wkbill[2] + lst5Wkbill[3] + lst5Wkbill[4];  //Total bill for the last five weeks of groceries

var avgGwB = (totGB / 5); // Average of the last five weeks grocery bills

// Printing out the output of total grocery bill for last five weeks and the average of those bills
console.log("You have spent a total of " + "$" + [totGB] + " on groceries over 5 weeks. That is an average of  " + "$"+ [avgGwB] + " per week.");
