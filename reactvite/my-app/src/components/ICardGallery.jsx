import React from "react";
import ICard from "./ICard";
function ICardGallery() {

    const student={
        pic:{studentimage},
        roll:"67573",
        name:"sneha gupta",
        branch:"CSE",
        college:"ABES Engineering collge"

    }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "2px solid black",
      }}
    >
      {/* <ICard
        roll="39988"
        name="ankit kumar"
        branch="CSE"
        college="ABES Engineering college"
      />
      <ICard
        roll="34365"
        name="sneha"
        branch="CSE"
        college="ABES Engineering college"
      /> */}
      <ICard data={student}/>
    </div>
  );
}

export default ICardGallery;
