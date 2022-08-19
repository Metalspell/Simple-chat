import React from 'react';

const menuStatusContext = React.createContext()
export default menuStatusContext;

export const MenuStatusProvider = ({ children }) => {
  const [menuStatus, setMenuStatus] = React.useState(false);

  return (
    <menuStatusContext.Provider value={[menuStatus, setMenuStatus]}>
      {children}
    </menuStatusContext.Provider>
  )
}