import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least six characters");
    } else {
      setError("");
    }
  };

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    // if (password.length < 6) {
    //   setError("Password must be at least six characters");
    // }
    // else{
    //     setError('')
    // }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="name" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
