import React from "react";
import ModalContext from "./ModalContext";
import { useModal } from "./ModalUse";

const ModalProvider = ({ children }) => {
  const modal = useModal();
  return (
    <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
