"use client";

import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useModal } from "./ModalUse";

const Modal = ({ isOpen, handleCloseModal, children }) => {
  // Get the modal root element from the DOM
  const modalRoot = document.querySelector(".modal-root");

  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  // Use ReactDOM.createPortal to render the modal content
  // as a child of the modal root element, which is outside
  // of the component hierarchy and can therefore appear
  // on top of everything else
  return ReactDOM.createPortal(
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
    </div>,
    modalRoot // Render the modal inside the modal root element
  );
};

export default Modal;
