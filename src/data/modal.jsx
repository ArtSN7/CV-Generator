import React from 'react';
import '../styles/modal.css'; // Create a CSS file for modal styles

const Modal = ({isOpen, onClose, data}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>User Data</h2>
                <p>Name: {data.name}</p>
                <p>Surname: {data.surname}</p>
                <p>Email: {data.email}</p>
                <p>Phone: {data.phone}</p>
                <p>LinkedIn: {data.linkedin}</p>
                <p>GitHub: {data.github}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal; // Add 'export default' here