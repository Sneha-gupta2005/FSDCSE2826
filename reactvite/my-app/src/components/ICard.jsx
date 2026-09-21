import React from "react";

import student1 from "../images/bdayimg.jpeg";


function ICard({data}) {
  return (
    <div style={{ border: "10px solid red", height: "200px", width: "250px" }}>
      <img src={data.pic} height={200} width={200}></img>
      <h2>Roll:{data.roll}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
      <h2>College:{data.college}</h2>
    </div>
  );
}
export default ICard;
