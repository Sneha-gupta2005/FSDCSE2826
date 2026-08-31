const root = document.getElementById("container");
const button = document.getElementById("btn");

console.log(button);
console.log(root);

async function getData() {
  const serverData = await fetch('https://fakestoreapi.com/products');
       const jsonData= await serverData.json();
  //console.log(serverData[0]);
   root.innerHTML=`<h2 style=color:red>${jsonData[0].title}></h2>`
   
}

button.addEventListener("click", getData);
