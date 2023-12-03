let firstName = "Akshay";
let age = 20;
let isLearning = true;
console.log("This is " + firstName + ",Age is " + age + ".");


// if else
if (isLearning == true) {
    console.log(firstName + " is learning.");
} else {
    console.log(firstName + " is not learning.");
}


// loops
// for (let i=0;i<=1000;i++){
//     console.log("People to answer "+i);
// }

// calculating sum up to n using for loop  
let answer=0
for(let i=0;i<=1000;i++){
    answer+=i;
}
console.log(answer)