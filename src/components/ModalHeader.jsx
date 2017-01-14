import React from 'react';

const ModalHeader = ({ closeModal }) => (

    <div className="modal-header">
        <button
            className="close-button red-tint"
            onClick={closeModal}
        >
            <span className="close-button--label">x</span>
        </button>
        <button
            className="close-button yellow-tint"
            onClick={closeModal}
        >
            <span className="close-button--label">-</span>
        </button>
        <button
            className="close-button green-tint"
            onClick={closeModal}
        >
            <span className="close-button--label">+</span>
        </button>
        <h2 className="modal-title">
            Chat with Contact Bot
        </h2>
    </div>

);

export default ModalHeader;