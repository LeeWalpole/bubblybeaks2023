"use client";
import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState({});

  const toggleModal = (id) => {
    setModalIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleCloseModal = (id) => {
    setModalIsOpen((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const closeModals = (ids) => {
    setModalIsOpen((prevState) => {
      const newState = { ...prevState };
      ids.forEach((id) => {
        newState[id] = false;
      });
      return newState;
    });
  };

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, toggleModal, handleCloseModal, closeModals }}
    >
      {children}
    </ModalContext.Provider>
  );
};
