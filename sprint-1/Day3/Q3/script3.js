function ItemsUser() {
  const [shoppingList, setShoppingList] = React.useState([]);
  const [itemName, setItemName] = React.useState("");
  const [itemQuantity, setItemQuantity] = React.useState("");
  const addItem = () => {
    setShoppingList([
      ...shoppingList,
      { name: itemName, quantity: itemQuantity },
    ]);
    setItemName("");
    setItemQuantity("");
  };
  const deleteItem = (index) => {
    const updateItem = shoppingList.filter((ele, i) => i !== index);
    setShoppingList(updateItem);
  };
  const clearAll = () => {
    setShoppingList([]);
  };
  return (
    <div>
      <h1>Shopping list</h1>
      <input
        id="name"
        placeholder="enter name"
        type="text"
        onChange={(e) => setItemName(e.target.value)}
        value={itemName}
      />
      <input
        id="name"
        type="number"
        onChange={(e) => setItemQuantity(e.target.value)}
        placeholder="enter quantity"
        value={itemQuantity}
      />
      <button onClick={addItem}>AddItem</button>
      <ol>
        {shoppingList.map((ite, index) => (
          <li key={index}>
            {ite.name}- {ite.quantity}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ol>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

function App() {
  return (
    <>
      <ItemsUser />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
