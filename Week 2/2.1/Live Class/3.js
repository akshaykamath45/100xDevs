// promises

// how would you write your own async function


// approach 1 - wrapping another async function with the use of callback
function myOwnSetTimeout(fn,duration){
    console.log("inside my own setTimeout function")
    setTimeout(fn,duration)
    //does not returns anything
}
myOwnSetTimeout(()=>{
    console.log("returning after original setTimeout function")
},1000)


// could lead to callback hell - unnecessary indentation
setTimeout(()=>{
    console.log("hi there after 1 s ")
    setTimeout(()=>{
        console.log("hi there after 2 s")
        setTimeout(()=>{
            console.log("hi there after 3 s ")
        },3000)
    },2000)
},1000)


// approach 2 -  using promises (then syntax)
// promisfy the async function above
function promisfyMyOwnSetTimeout(duration){
    ///defining 
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        },duration)
    });
    return p;
}
const ans=promisfyMyOwnSetTimeout(1000)
console.log(ans)  // this will return Promise { <pending> }

// calling
ans.then(()=>{
    console.log("time out done in promise")
})

// resolve ("hi") - > hi will be passed as an argument in .then(func(arg){})
const pr=new Promise(function(resolve){
    resolve("hi")
})

pr.then((arg)=>{
   console.log(arg)
})



// approach 3 - async/await syntax
function readValue(){
    console.log("value read from fn")
 
}
async function main(){
    let value=await readValue()
}
main()


// execution of promise

console.log("At the top 1 ")

function promisifiedSetTimeout(){
    console.log("function caled 3")
    return new Promise(function(resolve){
        console.log("inside promisified callback 4")
        setTimeout(function(){
            console.log("setTimeout called 5")
            resolve("doneee fr ");
        },5000)
    })
}

console.log("At the middle 2")

promisifiedSetTimeout().then(function(data){
    console.log("inside promisified function call 6")
    console.log(data)
})

