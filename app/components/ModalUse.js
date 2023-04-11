import { useState, useEffect } from "react";

export const useModal = () => {
  // Define state variable for all modals
  const [modalIsOpen, setModalIsOpen] = useState({});

  // Create a modal root element once when the hook is first mounted
  useEffect(() => {
    // Create a new div element to serve as the modal root
    const modalRoot = document.createElement("div");
    // Add a class to the modal root element
    modalRoot.classList.add("modal-root");
    // Append the modal root element to the end of the document body
    document.body.appendChild(modalRoot);
    // Return a cleanup function that removes the modal root element
    // when the hook is unmounted
    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  // Function to toggle modal state
  const toggleModal = (id) => {
    setModalIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Function to close modal
  const handleCloseModal = (id) => {
    setModalIsOpen((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  // Function to close multiple modals
  const closeModals = (ids) => {
    setModalIsOpen((prevState) => {
      const newState = { ...prevState };
      ids.forEach((id) => {
        newState[id] = false;
        const modal = document.querySelector(`#${id}`);
        if (modal) {
          const childModals = modal.querySelectorAll(".modal");
          childModals.forEach((childModal) => {
            const childModalId = childModal.getAttribute("id");
            newState[childModalId] = false;
          });
        }
      });
      return newState;
    });
  };

  // Return an object with all the functions and state variables
  return { modalIsOpen, toggleModal, handleCloseModal, closeModals };
};
