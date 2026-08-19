// // function login(msg, error) {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log(msg);
// //   }
// // }
// // function sum(a, b) {
// //   return a + b;
// // }

// // function sumWithMsg(clbk, msg) {
// //   // const result = clbk(12, 40);
// //   console.log("hiii" + msg + "" + result);
// // }
// // sumWithMsg(sum, "ram");

// // function loginHandler(username, password, clbk) {
// //   //  username="sneha40"
// //   //password="7537"
// //   if (username == "sneha40" && password == "7537") {
// //     clbk("success", null);
// //   } else {
// //     clbk(null, "username or password is correct");
// //   }
// // }
// // loginHandler("username", "password", login);

// // setTimeout(()=>{console.log("one")
// // setTimeout(()=>{
// //     console.log("two")
// //     setTimeout(()=>{
// //         console.log("three")
// //         setTimeout(()=>{
// //             console.log("four")
// //             setTimeout(()=>{
// //                 console.log("five");
// //                 setTimeout(()=>){
// //                     console.log("six");
// //                     setTimeout(()=>{
// //                         console.log("seven");
// //                         setTimeout(()=>{console.log("eight");
// //                             setTimeout(()=>{console.log("nine")}
// //                             ,1000)},
// //                         1000)

// //                     },)

// //                 }

// //             })

// //         })

// //     })
// // }))
// // promises
const myPromise = new Promise((resolve, reject) => {
  let username = "sneha40";
  let password = "8989";
  if (username == "sneha40" && password == "8989") {
    resolve("success");
  } else {
    reject("invalid");
  }
});

 console.log(myPromise);

// // myPromise
// //   .then((msg) => {
// //     console.log(msg);
// //   })
// //   .catch((msg) => {
// //     console.log(msg);
// //   })
// //   .finally(() => {
// //     console.log("Resource closed");
// //   });

// //  async function handleLogin(){
// //   const status= await myPromise;
// //   console.log(status)
// // }
// // handleLogin();

 


async function orderRecieved(){
    return await new Promise((resolve) => {
        setTimeout(() =>{
            resolve("One order recieved")
        }, 1000)
    })
}

async function orderPreparation(){
    return await new Promise ((resolve) => {
        setTimeout(() =>{
            resolve("Order prepared")
        }, 1000)
    })
}

function orderHandOver(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Order is handled to the delivery boy")
        }, 1000)
    })
}

function orderCompleted(){
    console.log("Order Successfully completed");
}
let ottp;
function otp(){
    ottp = Math.floor(1000 + Math.random() * 9000);
    return ottp;
}
async function orpe(){
    const meow = await orderRecieved();
    console.log(meow);
}

async function orre(){
    const yayy = await orderPreparation();
    console.log(yayy);
}

//ASYNC FUNCTION
async function handleLogin(){
    const status = await myPromise;
    if(status == "success"){
        console.log("it is success");
        await orpe();
        await orre();
        orderCompleted();
        console.log("OTP: " + otp());
    }
}
handleLogin();
// orderRecieved();
// orderPreparation();