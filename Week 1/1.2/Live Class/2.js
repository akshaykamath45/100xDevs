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
let answer = 0
for (let i = 0; i <= 1000; i++) {
    answer += i;
}
console.log(answer)

//arrays
const personArray = ["akshay", "virat", "rohit"]
console.log(personArray[1])

// printing all even numbers in array
const ages = [18, 19, 20, 32, 23, 35, 46, 34];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i])
    }
}

// objects
const user1 = {
    name: "akshay",
    age: 20
}
const user2 = {
    name: "rohit",
    age: 37
}
const user3 = {
    name: "virat",
    age: 35
}
console.log(user1.name)



