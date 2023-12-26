// map and filter function

// Question - Convert an array of numbers into a new array with every element Multiplied by 2

const arr=[1,2,3,4,5,6]
console.log("before map : ",arr)
const multiplyBy2=(arr)=>{
    return arr.map((val)=>val*2)
}
const ans=multiplyBy2(arr)
console.log("after map : ",ans)


// Question - Convert an array of numbers into a new array with only the even elements

const elements=[1,2,3,4,5,6]
console.log("before filter : ",elements)
const filterdAns=elements.filter((val)=>val%2==0)
console.log("after filter : ",filterdAns)