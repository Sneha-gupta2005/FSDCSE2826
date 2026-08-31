const root = document.getElementById("root");
const button = document.getElementById("btn");
console.log(root);
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const img = document.createElement("img");
const loader = document.createElement("h3");
loader.innerHTML = "Loading data...";

async function showData() {
  try {
    root.appendChild(loader);
    const serverData = await fetch("https://fakestoreapi.com/products");
    const jsonData = await serverData.json();

    let table = `<table border="2px">
                  ${jsonData.map((ele) => {
                    return `<tr>
                    <td><img src="${ele.image}" height="200" width="200"></td>
                    <td>${ele.id}</td>
                    <td> ${ele.title}</td>
                    <td> ${ele.price}</td>
                    </tr>`;
                  })}
                 </table>`;

    //   h3.innerHTML=`<h2 style=color:red>${jsonData[0].title}</h2>`
    h3.innerHTML = table;
    //     h2.innerText='Welcome to DOM Manipulation';
    //     h3.innerHTML='ABES Engineering college'
    //     img.src =
    //       "https://up.yimg.com/ib/th/id/OIP.L2C43-wv7BqtmOLmUVrYMQHaEA?pid=Api&rs=1&c=1&qlt=95&w=189&h=102";

    // img.setAttribute('height',200);
    // img.setAttribute('width',200);
    //     root.appendChild(h2);
    root.appendChild(h3);
    //     root.appendChild(img);
  } catch (e) {
    console.log(e);
  } finally {
    root.removeChild(loader);
  }
  // alert("hi");
}

button.addEventListener("click", showData);
