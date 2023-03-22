import React, { useState } from "react";
import Product from "./components/Product";
import Add from "./components/Add";

function App() {
  const productsList = [
    { name: 'iPhone', price: 800, id: 1 },
    { name: 'Watch', price: 100, id: 2 },
  ];
  const [products, setProducts] = useState(productsList);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0.01, id: 3 });

  const changeName = (e) => {
    setNewProduct((prev) => ({ ...prev, name: e.target.value }));
  };

  const changePrice = (e) => {
    setNewProduct((prev) => ({ ...prev, price: e.target.value }));
  };

  const addProduct = () => {
    if (newProduct.name.length > 1 && newProduct.price !== 0) {
      let key = Math.random();
      setNewProduct({ name: '', price: '', id: key });
      setProducts((prev) => ([...prev, newProduct]));
    }
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  const checkName = (props) => {
    const reg = /[0-9]/g;
    if (newProduct.name.match(reg)) {
      setNewProduct((prev) => ({ ...prev, name: '' }));
    }
  };

  const checkPrice = (props) => {
    if (newProduct.price <= 0) {
      setNewProduct((prev) => ({ ...prev, price: 0.01 }));
    }
  };

  return (
    <div className="wrapper">
      <Add
      newProduct={newProduct}
      changeName={changeName}
      changePrice= {changePrice}
      checkName = {checkName}
      checkPrice = {checkPrice}
      addProduct = {addProduct}
      ></Add>
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
