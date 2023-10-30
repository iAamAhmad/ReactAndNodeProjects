/* Task No:18
 Seeing the World: Think of at least five places in the world you’d like to visit.
 • Store the locations in a array. Make sure the array is not in alphabetical order.
 • Print your array in its original order.
 • Print your array in alphabetical order without modifying the actual list.
 • Show that your array is still in its original order by printing it.
 • Print your array in reverse alphabetical order without changing the order of the original list.
 • Show that your array is still in its original order by printing it again.
 • Reverse the order of your list. Print the array to show that its order has changed.
 • Reverse the order of your list again. Print the list to show it’s back to its original order.
 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/


const myFavoriteCity:string[]=["Lahore", "Karachi", "Islamabad", "Sialkot", "Gujranwala",
"Daska"
];

console.log(`Original order:`)
console.log(myFavoriteCity)
  console.log(`\nAlphabetical order:`)
console.log([...myFavoriteCity].sort())
 console.log(`Original order after sorting:`)
console.log(myFavoriteCity)
  console.log(`\nReverse alphabetical order:`)
console.log([...myFavoriteCity].sort().reverse())
  console.log(`Original order after reverse  sorting:`)
console.log(myFavoriteCity)

 console.log("\nReversed order:");
 myFavoriteCity.reverse();
console.log(myFavoriteCity)
  console.log("\nOriginal order after second reverse:");
  myFavoriteCity.reverse();
console.log(myFavoriteCity)


myFavoriteCity.sort();
  console.log("\nSorted in alphabetical order:");
console.log(myFavoriteCity)

  console.log("\nSorted in reverse alphabetical order:");
  myFavoriteCity.sort((a, b) => b.localeCompare(a));
   console.log(myFavoriteCity)
console.log(`OR second Method`)
myFavoriteCity.sort().reverse()

console.log(myFavoriteCity)