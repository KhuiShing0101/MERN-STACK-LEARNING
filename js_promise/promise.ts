/*------------------------------------------------------------------------
|   Promise
| 
|    built-in object
| 
|    There have two parameter resolved and rejected
|    resolved() is for fullfill and reject() is for error
|
|    The Promise object has two states: 
|    "pending" when the asynchronous operation is still ongoing, 
|    "fulfilled" when the operation is successful, 
|    and 
|    "rejected" when there's an error.
|
|    fetch(url,object) 
|
|    In object->method,headers,body
|
|    .json() convert json object
|
|    JSON.stringify(obj) from Frontend Part convert to javascript object
|
|    JSON.parse() from backend Part JS object convert 
|
*/


const takeData = async() => {
    const url = "http";
    const data = await fetch(url)
    console.log(data)
   }

// logInFacebook()
// showFriendList()


// promise1().then(...);// fullilled
// promise1().catch(...)//rejected


const resolve = ()=>{console.log("ok...")}
const reject = ()=>{console.log("reject....")}
const promise1 = new Promise((resolve,reject)=>{
                return setTimeout(()=>{resolve("hello")},3000);
                    })
                .then((data)=>{
                    console.log(data);
                })
                .catch((error)=>{
                    console.log(error);
                });
const promise2 = new Promise(
    (resolve,reject)=>{

    }).then().catch();

const testingJs = new Promise((a,b)=>{
    return a("its ok");
})

const GG = async()=>{
    try{
        const data = await testingJs
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

const vanillaJs = new Promise((a,b)=>{
    return a("its ok");
})
const GG1 = async()=>{
    try{
        const data = await vanillaJs
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

const promiseOne = new Promise((res,rej)=>{
    return res("promise one object is called")
})

const outPutPromiseOne = async()=>{
    try{
        const data = await promiseOne;
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

const outputPromiseTwo = new Promise ((res,rej)=>{
    res("its outputpromisetwo")
})
const callPromise = async()=>{
    try{
        const data = await outputPromiseTwo
        console.log(data) 
    }catch(error){
        console.log(error);
    }
}

const learn = async()=>{
    try{
        const responseData = await fetch("https://fakestoreapi.com/products")
        const data = responseData.json();
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

const spiderman = async()=>{
    try{
        const responseData = await fetch("https://fakestoreapi.com/products")
        const data = responseData.json();
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

const finalPromise = new Promise ( (res,rej) => {
    res("itsok");
})

const dataOne = async()=>{
    const data = await finalPromise;
    console.log(data);
}