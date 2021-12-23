import { useEffect, useRef } from 'react';

const EditingTemplate = ({
     setEditValue,
     editValue,
     itemId,
     setIsEditing,
     handleEdit,
}) => {
     const inputRef = useRef();
     useEffect(() => {
          inputRef.current.focus();
     }, []);
     return (
          <>
               <div className="item-content">
                    <input
                         id="edit-input"
                         type="text"
                         ref={inputRef}
                         value={editValue}
                         onChange={(e) => setEditValue(e.target.value)}
                         onKeyUp={(e) => {
                              if (e.key === 'Enter') {
                                   setIsEditing(false);
                                   handleEdit(itemId);
                                   setEditValue('');
                              }
                         }}
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
                         onClick={() => {
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
};

export default EditingTemplate;
