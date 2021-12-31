import Item from './Item';

const Todos = ({
     displayedItems,
     checkItem,
     deleteItem,
     handleEdit,
     editValue,
     setEditValue,
}) => {
     const renderedItems = displayedItems.map((item) => {
          return (
               <Item
                    itemName={item.name}
                    itemId={item.id}
                    key={item.id}
                    completed={item.completed}
                    checkItem={checkItem}
                    deleteItem={deleteItem}
                    handleEdit={handleEdit}
                    editValue={editValue}
                    setEditValue={setEditValue}
               />
          );
     });
     return (
          <div>
               <p className="tasks-report">
                    you have {displayedItems.length}{' '}
                    {displayedItems.length === 1 ? 'task' : 'tasks'}
               </p>
               <ul className="list">{renderedItems}</ul>
          </div>
     );
};

export default Todos;
