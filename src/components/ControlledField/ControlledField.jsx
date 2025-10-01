import React, { useState } from "react";

const ControlledField = () => {
    const handleSubmit=(e)=>{
       e.preventDefault() 
    }

    const [password,setPassword]=useState("")

    const handlePasswordOnChange=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="name" id="" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
