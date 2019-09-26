const greeter = (name= 'Yash',age) =>  //here Yash is the default we provided
{
    console.log('Hello ' + name,age)
}

greeter()

// if default is not present for the object type error is given
const product={
    label:'Prod',
    stock:'3'
 }
 const transaction = (type,{label,stock=0}={}) =>  // here we provided default value for our destructured object to be an empty object {}
{
 //by making stock=0 we provided it a default value so even though we have empty object as default stock has its own default value
 console.log(label,stock)
}
transaction('individual',product)
