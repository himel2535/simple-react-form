import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if (name.length === 0) {
      setError("please provide a proper name");
      return;
    } else if (price.length === 0) {
      setError("please provide price");
      return;
    } else if (price.length < 0) {
      setError("price can not be negative");
      return;
    } else if (quantity.length === 0) {
      setError("please provide quantity");
      return;
    } else if (quantity.length < 0) {
      setError("quantity can not be negative");
      return;
    } else {
      setError("");
    }

    const newProduct = { name, price, quantity };

    handleAddProduct(newProduct);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="text" name="price" placeholder="Price" />
        <br />
        <input type="text" name="quantity" placeholder="Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
