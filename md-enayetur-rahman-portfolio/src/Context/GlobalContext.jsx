import React, { createContext, useState } from 'react';


export const SharedContext = createContext()

const GlobalContext = ({children}) => {
  const [image, setImage] = useState([])
  const sharedItem = {
    image, setImage,
  }
  return (
    <SharedContext.Provider value={sharedItem}>{children}</SharedContext.Provider>
  );
};

export default GlobalContext;