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
      // Set the state of each modal in the given array of ids to false
      ids.forEach((id) => {
        newState[id] = false;
      });
      // Return the updated state
      return newState;
    });
  };

  // Return an object with all the functions and state variables
  return { modalIsOpen, toggleModal, handleCloseModal, closeModals };
};
