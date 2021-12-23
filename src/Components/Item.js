import { useState } from 'react';
import EditingTemplate from './EditingTemplate';
import ViewingTemplate from './ViewingTemplate';

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
     const [modalIsOpen, setModalIsOpen] = useState(false);

     return (
          <li
               className="item"
               style={completed ? { backgroundColor: 'greenyellow' } : null}
          >
               {isEditing ? (
                    <EditingTemplate
                         itemId={itemId}
                         isEditing={isEditing}
                         setIsEditing={setIsEditing}
                         handleEdit={handleEdit}
                         editValue={editValue}
                         setEditValue={setEditValue}
                    />
               ) : (
                    <ViewingTemplate
                         itemId={itemId}
                         deleteItem={deleteItem}
                         setModalIsOpen={setModalIsOpen}
                         completed={completed}
                         setIsEditing={setIsEditing}
                         modalIsOpen={modalIsOpen}
                         checkItem={checkItem}
                         itemName={itemName}
                    />
               )}
          </li>
     );
};

export default Item;
