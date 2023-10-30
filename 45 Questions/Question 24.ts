/* Task No:24
  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
  • Tests for equality and inequality with strings

  • Tests using the lower case function

  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

  • Tests using "and" and "or" operators

  • Test whether an item is in a array

  • Test whether an item is not in a array
*/
let myAge:number =22;
let myEducation:string='BS'
let myName:string='Ahmad';
console.log(`I am 22 year old and currently i am in PIAIC after completing the BS`)
console.log(myEducation==='BS' )
console.log(myEducation!=='BS' )
 const lowerCase :string=myEducation.toLowerCase();
 console.log(lowerCase==='bs')
 console.log(lowerCase==='BS')
 const Num1:number = 10;
const Num2:number = 5;

console.log(Num1 === Num2); 
console.log(Num1 !== Num2); 
console.log(Num1 > Num2);   
console.log(Num1 < Num2);   
console.log(Num1 >= Num2);   
console.log(Num1 <= Num2);
 console.log(myName=='Usman' &&  myAge==22)
 console.log(myName=='Ahmad' &&  myAge==22)
 console.log(myName=='Arman' ||  myAge==22)
 console.log(myName=='Ahmad' ||  myAge==23)
  
 const itemInArray:number[]=[1,2,3,4,5,7]
 
 console.log(itemInArray.includes(3))
 console.log(itemInArray.includes(6))
 console.log(!itemInArray.includes(3))
 console.log(!itemInArray.includes(6))
 