import React from "react";
import Modal from "react-modal";
import "./modal.css";

const customStyles = {
  content: {
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    
  },
};

const ModalComponent = ({ title, text }) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modalComponent">
      <button className="rulesButton" onClick={openModal}>
        <span>Game Rules</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="Overlay"
        appElement={document.getElementById('root')}
      >
        <div className="modalContainer">
          <div>
            <button className="closeButton" onClick={closeModal}>
              <span>X</span>
            </button>
          </div>
          <div className="modalText">
            <h2>{title}</h2>
            {text.map((item, iter) => (
              <p key={iter}>
                {item} <br />
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
