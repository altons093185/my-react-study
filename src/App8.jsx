/*
商品資料如下:
{ id: 1, name: '蘋果', price: 40, category: '水果' },
{ id: 2, name: '洗髮精', price: 120, category: '日用品' },
{ id: 3, name: '香蕉', price: 55, category: '水果' },
{ id: 4, name: '牙膏', price: 45, category: '日用品' }
請利用 react 將上述商品資料透過 jsx + <table> 標籤呈現
*/

function App() {
    // 物件陣列
    const items = [
        { id: 1, name: '蘋果', price: 40, category: '水果', qty:2 },
        { id: 2, name: '洗髮精', price: 120, category: '日用品', qty:4 },
        { id: 3, name: '香蕉', price: 55, category: '水果', qty:6 },
        { id: 4, name: '牙膏', price: 45, category: '日用品', qty:8 }
    ]

return (
    <>
      <table border="1" cellPadding="5" cellSpacing="0">
    <thead>
        <tr>
            <th>商品名稱</th>
            <th>價格</th>
            <th>數量</th>
            <th>小記</th>
            <th>類別</th>
        </tr>
    </thead>
    <tbody>
        {items.map((item) => {
             const subtotal = item.price * item.qty;
             return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{subtotal}</td>
                <td>{item.category}</td>
            </tr>);
        })}
    </tbody>
    <tfoot>
        <tr>
            <td colSpan="5">總計: {items.reduce((total, item) => total + item.price * item.qty, 0)}</td>
        </tr>
    </tfoot>

</table>
    </>
)
}

export default App;

