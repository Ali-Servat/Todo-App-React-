import { useState } from 'react';
import Modal from './Modal';

const Item = ({
     itemName,
     itemId,
     completed,
     checkItem,
     deleteItem,
     handleEdit,
     editValue,
     setEditValue,
}) => {
     const [isEditing, setIsEditing] = useState(false);
     const [modalIsOpen, setModelIsOpen] = useState(false);
     const viewingTemplate = (
          <>
               {modalIsOpen && (
                    <Modal
                         setModalIsOpen={setModelIsOpen}
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
                              setModelIsOpen(true);
                         }}
                    >
                         Delete
                    </button>
               </div>
          </>
     );
     const editingTemplate = (
          <>
               <div className="item-content">
                    <input
                         type="text"
                         value={editValue}
                         onChange={(e) => setEditValue(e.target.value)}
                    />
               </div>
               <div className="item-buttons">
                    <button
                         className="cancel-button"
                         onClick={() => {
                              setIsEditing(false);
                              setEditValue('');
                         }}
                    >
                         Cancel
                    </button>
                    <button
                         className="save-button"
                         onClick={async () => {
                              setIsEditing(false);
                              handleEdit(itemId);
                              setEditValue('');
                         }}
                    >
                         Save
                    </button>
               </div>
          </>
     );
     return (
          <li
               className="item"
               style={completed ? { backgroundColor: 'greenyellow' } : null}
          >
               {isEditing ? editingTemplate : viewingTemplate}
          </li>
     );
};

export default Item;
