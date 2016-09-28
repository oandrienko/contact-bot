import React from 'react';

const ModalHeader = (props) => (
	<div className="modal-header">
		<button onClick={props.closeModal} className="close-button red-tint">
			<span className="close-button--label">x</span>
		</button>
		<button onClick={props.closeModal} className="close-button yellow-tint">
			<span className="close-button--label">-</span>
		</button>
		<button onClick={props.closeModal} className="close-button green-tint">
			<span className="close-button--label">+</span>
		</button>
		<h2 className="modal-title">
			Chat with Contact Bot
		</h2>
	</div>
);

export default ModalHeader;