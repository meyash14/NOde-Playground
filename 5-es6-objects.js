//Object propeerty shorthand
const name ='andrew'
const userage=23
// const user={
//     name:name,
//     age:userage,
//     location:'Delhi'
// }

//if the object prop is getting its value from same name variable we can use shorthand
// const user={
//    name, //shorthand
//     age:userage,
//     location:'Delhi'
// }
//console.log(user)


//2. Object Destructuring
const product={
    label:'red note',
    price:3,
    stock:3
}

//Normally we do this
// const label = product.label
// const stock = product.stock
// console.log(label,stock)

//new option
const {label,stock} = product
//console.log(label,stock)

//if we want to change the variable name of property extracted from object
//one good use of this is suppose the objects property has a name which you are already using in your prog
// const {label:l,stock:s} = product
// console.log(l,s)

//3. setting a default varibale for property if that property does not exist in object
const {label:l,stock:s,rating =5} = product
//console.log(l,s,rating)
//but if rating exists in the object ie any property being used then its value in object will supercede its deafult value given while extraction that we give
//example
const abc = {
    right:2
}
const {right:r=6} =abc 
//console.log(r) //2 will print its obj value not the default value 6 we have given

//4.1 usage of destructuring in fns
// const transaction = (type,myprod) =>
// {
//     const {label} = myprod
//     console.log(label)
// }
// transaction('order',product)

//4.2 one step furthur getting access to only those properties of object that we need ,we can do it at argument level itself
// const transaction = (type,{label,stock}) =>
// {
    
//     console.log(label)
// }
// transaction('order',product)

const user={
       name,
        age:userage,
        location:'Delhi'
    }
    const transaction = (type,{name,age}) =>
{
    
    console.log(age)
}
transaction('individual',user)
