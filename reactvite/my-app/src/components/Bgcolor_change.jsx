import React, { useState } from 'react'

function Bgcolor_change() {

    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
     const [blue, setBlue] = useState(0);
  return (
    <div>
        <h2>Change Background Color</h2>
        <div style={{backgroundColor:`rgb($(red),$(green),$(blue))`,border:'2px solid red',height:"300px"}}></div>
    </div>
  
  )
}

export default Bgcolor_change