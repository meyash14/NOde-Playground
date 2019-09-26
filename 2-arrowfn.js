// Basic function1
// const square = function(x)
// {
//     return x*x
// }

// Arrow fn usual syntax
// const square = (x) =>{
//     return x*x
// } 

// Shotr hand for 1 line statements in arrow fn
//const square = (x)=> x*x

// arrow fn does not bind "this" to itslef while normal fn does
//Normal fn 'this' prop works meaning it has access to it
const event = {
    name: 'Birthday Party',
    guestList : ['Yash','Abc'],
    printGuestList: function() {
        console.log('Guest List for ' + this.name)
    
    this.guestList.forEach(function(guest) {
        console.log(guest + ' is attending ' +this.name) // since for each is implemented by normal es5 
})                                                      // "this" property returns undefined ergo it doesnt have access to parent values
}
}

//using arrow fn 
const event1 = {
    name: 'Birthday Party',
    guestList : ['Yasha','Abc'],
    printGuestList: function() {
        console.log('Guest List for ' + this.name)
    
    this.guestList.forEach((guest) => {
        console.log(guest + ' is attending ' +this.name)  //since rrow fn is used it has access to parent this value
})                                                      
}
}

// arrow fn doesnt have access to this property
const event2 = {
    name: 'Birthday Party',
    guestList : ['Yasha','Abc'],
    printGuestList: ()=>{
        console.log('Guest List for ' + this.name) //gives undefined as arrow fns do not bind their own "this" value
    } //arrow fns are not well suited for methods,as "this" cannot be used with them
    
}

//if you want to use this ,another syntax is: // this syntax is es6 ergo diff than the es5 normal function syntax
//avaliable to us when we are setting method on objects

const event3 = {
    name: 'Birthday Party',
    guestList : ['Yasha','Abc'],
    printGuestList() {
        console.log('Guest List for ' + this.name) 
    this.guestList.forEach(function(guest){
        console.log(guest + ' is attending ' +this.name) //since normal fn it binds its "this" so cant access parent
    })
    
}
}

const event4 = {
    name: 'Birthday Party',
    guestList : ['Yasha','Abc'],
    printGuestList() {
        console.log('Guest List for ' + this.name) 
    this.guestList.forEach((guest)=>{
        console.log(guest + ' is attending ' +this.name) //since arrow fn now it can access its parent "this" value 
    })
    
}
}

//takeaways:
//1. Arrow fn dont bind their own "this" value.Thus they are poor to be used in methods but good for other things

event4.printGuestList()