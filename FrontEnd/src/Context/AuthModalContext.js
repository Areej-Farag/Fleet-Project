import { createContext, useContext, useState } from 'react';

const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  const [authType, setAuthType] = useState('signup'); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const switchAuthType = (type) => {
    setAuthType(type);
    setIsModalOpen(true);  // يتم فتح المودال عندما يتغير authType
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);  // دالة لغلق المودال

  return (
    <AuthModalContext.Provider value={{
      authType,
      isModalOpen,
      openModal,
      closeModal,
      switchAuthType
    }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => useContext(AuthModalContext);
