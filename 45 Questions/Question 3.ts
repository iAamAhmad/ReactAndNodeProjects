// Task No 3: Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase,
//   uppercase, and titleCase.

let   myName:string="ARMAN ashraf  ";
let    myNameLowercase:string=  myName.toLowerCase();
let   myNameUppercase:string=  myName.toUpperCase();
 

 const   myNameArray:string[]=  myName.split(" ")
 for (let i = 0; i <   myNameArray.length; i++) {
        myNameArray[i] =   myNameArray[i].charAt(0).toUpperCase() +   myNameArray[i].slice(1).toLowerCase() ;
    
 }

 let   myNametitlecase:string =   myNameArray.join(" ")
console.log(`Lowercase:${  myNameLowercase}`)

console.log(`Uppercase:${  myNameUppercase}`)

console.log(`TitleCase:${  myNametitlecase}`)


