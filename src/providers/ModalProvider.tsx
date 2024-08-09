"use client";

import Modal from "@/components/common/Modal";
import { createContext, useState, useContext, ReactNode } from "react";

interface Message {
  title: string;
  description: string;
  btnText: string;
}

interface ModalProviderProps {
  showModal: (message: Message) => void;
  hideModal: () => void;
}

const Context = createContext<ModalProviderProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("use must be used within an ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<Message | null>(null);

  const showModal = (message: Message) => {
    setMessage(message);
  };

  const hideModal = () => {
    setMessage(null);
  };

  return (
    <Context.Provider value={{ showModal, hideModal }}>
      {children}
      {message && <Modal message={message} onClose={hideModal} />}
    </Context.Provider>
  );
};
