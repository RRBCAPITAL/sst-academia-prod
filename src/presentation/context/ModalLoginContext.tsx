'use client';

import { createContext, useContext, useState } from 'react';

const ModalLoginContext = createContext<{
  open: boolean;
  showModal: () => void;
  hideModal: () => void;
} | null>(null);

export const ModalLoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => setOpen(true);
  const hideModal = () => setOpen(false);

  return (
    <ModalLoginContext.Provider value={{ open, showModal, hideModal }}>
      {children}
    </ModalLoginContext.Provider>
  );
};

export const useModalLogin = () => {
  const context = useContext(ModalLoginContext);
  if (!context) throw new Error("useModalLogin debe usarse dentro de <ModalLoginProvider>");
  return context;
};
