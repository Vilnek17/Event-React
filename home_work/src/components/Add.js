import React from 'react';

function Add(props) {
  const { newProduct, changeName, changePrice, checkName, checkPrice, addProduct } = props;

  return (
    <div className="add">
        <label>Product name</label>
        <input
          onInput={changeName}
          type="text"
          value={newProduct.name}
          onBlur={checkName}
        />
        <label>Product price</label>
        <input
          onInput={changePrice}
          type="number"
          value={newProduct.price}
          onBlur={checkPrice}
        />
        <button onClick={addProduct} type="button">
          Add
        </button>
      </div>
  )
}
      export default Add