//A call back fn is a fn that we provide as an argument to other function with intention of being called later on 
//call back fn that interacts with native Node API is async fn but all call back fns are not async
setTimeout(() => {
console.log("Set Time Out fn")
},3000)
// //filter is a call back fn but it is synchronous not async
// arr.filter(()=>{

// })

//example of aysnc
const geocode = (address,callback) =>
{   
    setTimeout(()=>{
        const data = {
            latitude: 0,
            longiude:0
        }
        callback(data)
    },2000)

}

geocode('Perungudi%20Chennai',(data) => console.log(data))

//challenge
const add = (num1,num2,callback) =>
{
    setTimeout(()=>{
        const sum = num1+num2
        callback(sum)
    },2000)
    
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})