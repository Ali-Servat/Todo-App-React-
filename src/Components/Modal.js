const Modal = ({ itemId, setModalIsOpen, deleteItem }) => {
     return (
          <div className="modal">
               <div className="modal-content">
                    <div className="modal-header">
                         <button
                              className="close-button"
                              onClick={() => setModalIsOpen(false)}
                         >
                              &times;
                         </button>
                    </div>
                    <div className="modal-body">
                         <p className="modal-message">
                              Are you sure you want to delete this item?
                         </p>
                         <button
                              className="yes-button"
                              onClick={() => {
                                   setModalIsOpen(false);
                                   deleteItem(itemId);
                              }}
                         >
                              Yes
                         </button>
                         <button
                              className="no-button"
                              onClick={() => setModalIsOpen(false)}
                         >
                              No
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Modal;
