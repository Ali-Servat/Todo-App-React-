const Form = ({ items, setItems, setNewItem, newItem, addItem }) => {
     return (
          <form
               className="form"
               onSubmit={(e) => {
                    addItem(e);
               }}
          >
               <input
                    type="text-area"
                    placeholder="Add Item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    autoFocus
               />
               <button>Add</button>
          </form>
     );
};

export default Form;
