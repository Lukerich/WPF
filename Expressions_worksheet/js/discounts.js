/**
 * Richard Luke
 * Date: 4/20/13
 * Expressions Worksheet - Discounts
 */
// Calculate discounted price for an item

var orignPrc = 50.55;  // Original price of item
var discPrc = [15,.15];  //  Discount percentage
var discpt =  "Fly reel"; // Description of item
var sTaxPrc =  .08; // Sales tax percentage

    var prcWoTax = orignPrc - orignPrc * discPrc[1] ; // Price of item without tax
    var prcWtax = orignPrc - orignPrc * discPrc[1] + prcWoTax * sTaxPrc; // Price of item with tax



// Printing out the output of the item it's original price, the discount percentage, and the with and without tax prices
console.log("Your " + [discpt] + " was originally " + "$" + [orignPrc] + ", but after a " + [discPrc[0]] + "%" + " discount, it is now " + "$" + [prcWoTax] + " without tax, and " + "$" + [prcWtax] + " with tax");
