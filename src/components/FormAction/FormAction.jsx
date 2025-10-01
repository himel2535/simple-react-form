import React from "react";

const FormAction = () => {
    const handleForAction=(formData)=>{
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
  return (
    <div>
      <form action={handleForAction}>
        <input type="text" name='name' placeholder="Name" />
        <br />
        <input type="email" name='email' placeholder="Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
