// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.





// Making an Array of Countries and Print its original order
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Australia"];
console.log("Original Order:", countriesToVisit);

// Print the Array in Alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// Print the array in Reversed Order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// We have changed the original array order now
let reversedArray = [...countriesToVisit].reverse();
console.log("Original Array Reversed:", reversedArray);

// Print the array to show that it's back to its original order
console.log("Back to Original Order:", reversedArray.reverse());

// Print the array to show that its order has been changed in Alphabetical Order now
let sortedArray = [...countriesToVisit].sort();
console.log("Sorted in Alphabetical Order:", sortedArray);

// We have changed again the Original Array Order Now in reverse order again
let reversedSortedArray = [...sortedArray].reverse();
console.log("Original Array Reversed Again:", reversedSortedArray);
