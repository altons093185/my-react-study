import { useRef, useState } from "react";
import "./App.css";

function ShoppingCart() {
  const inputNameRef = useRef();
  const inputPriceRef = useRef();
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddtoCart();
    }
  };

  const handleAddtoCart = () => {
    //setMessages(messages.concat(inputMessage));
    const inputName = inputNameRef.current.value;
    const inputPrice = inputPriceRef.current.value;
    if (inputName === "" || inputPrice === "")
      return alert("please input value!"); // 如果輸入為空則不執行
    setProducts([
      ...products,
      { ProductName: inputName, ProductPrice: inputPrice },
    ]);
    inputNameRef.current.value = "";
    inputPriceRef.current.value = "";
  };

  const handleCountTotal = () => {
    const total = products.reduce((sum, product) => {
      return sum + parseFloat(product.ProductPrice);
    }, 0);
    return total;
  };

  const handleDelete = (index) => {
    const updated = products.filter((product, i) => i !== index);
    setProducts(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    //點選編輯 設定那個欄位原本的值
    setEditName(products[index].ProductName);
    setEditPrice(products[index].ProductPrice);
  };

  const handleSave = (index) => {
    const updated = [...products];
    updated[index] = {
      ProductName: editName,
      ProductPrice: editPrice,
    };
    setProducts(updated);
    setEditIndex(null);
  };

  return (
    <>
      <h1>My Shopping Cart</h1>
      商品名稱:{" "}
      <input type="text" ref={inputNameRef} onKeyDown={handleKeyDown} />
      <p />
      商品價格:{" "}
      <input type="number" ref={inputPriceRef} onKeyDown={handleKeyDown} />
      <p />
      <button onClick={handleAddtoCart}>加入</button>
      <p />
      <table border="1" cellPadding="5" cellSpacing="0">
        <caption>購物車清單</caption>
        <thead>
          <tr>
            <th>商品名稱</th>
            <th>商品價格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td>
                    <input value={editName} onChange={(e) => setEditName(e.target.value)} />
                  </td>
                  <td>
                    <input value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                  </td>
                  <td>
                    <button onClick={() => handleSave(index)}>儲存</button>
                  </td>
                </>) : (<>
                  <td>{p.ProductName}</td>
                  <td>{p.ProductPrice}</td>
                  <td>
                    <div>
                      <button onClick={() => handleEdit(index)}>編輯</button>
                      <button onClick={() => handleDelete(index)}>刪除</button>
                    </div>
                  </td>
                </>)}
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4">總計: {handleCountTotal()}</td>
        </tr>
      </tfoot>
    </table >
    </>
  );
}

export default ShoppingCart;

// const total = products.reduce((sum, product) => {
//     return sum + parseFloat(product.ProductPrice);
//   }, 0);
//   return total;
