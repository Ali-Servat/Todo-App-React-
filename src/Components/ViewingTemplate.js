import Modal from './Modal';

const ViewingTemplate = ({
     itemId,
     deleteItem,
     setModalIsOpen,
     completed,
     setIsEditing,
     modalIsOpen,
     itemName,
     checkItem,
}) => {
     return (
          <>
               {modalIsOpen && (
                    <Modal
                         setModalIsOpen={setModalIsOpen}
                         itemId={itemId}
                         deleteItem={deleteItem}
                    />
               )}
               <div className="item-content">
                    <input
                         type="checkbox"
                         id={itemId}
                         checked={completed}
                         onChange={() => checkItem(itemId)}
                    ></input>
                    <p>{itemName}</p>
               </div>
               <div className="item-buttons">
                    <button
                         className="edit-button"
                         onClick={() => {
                              setIsEditing(true);
                         }}
                    >
                         Edit
                    </button>
                    <button
                         className="delete-button"
                         onClick={() => {
                              setModalIsOpen(true);
                         }}
                    >
                         Delete
                    </button>
               </div>
          </>
     );
};

export default ViewingTemplate;
