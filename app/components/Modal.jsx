import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, handleCloseModal, children }) => {
  return (
    <>
      {/* Only render modal content if modal is open */}
      {isOpen && (
        <div className={styles.modal}>
          {/* Overlay that covers the whole screen and closes modal when clicked */}
          <div className={styles.overlay} onClick={handleCloseModal}></div>
          {/* Actual modal content */}
          <div className={styles.content}>
            {/* Button to close the modal */}
            <button className={styles.close} onClick={handleCloseModal}>
              X
            </button>
            {/* Contents of the modal */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
