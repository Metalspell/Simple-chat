import React from 'react';

const selectContactContext = React.createContext()
export default selectContactContext;

export const SelectContactProvider = ({ children }) => {
  const [selectContactId, setSelectContactId] = React.useState(null);

  return (
    <selectContactContext.Provider value={[selectContactId, setSelectContactId]}>
      {children}
    </selectContactContext.Provider>
  )
}