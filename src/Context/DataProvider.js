import React from 'react';
import { useSelector } from 'react-redux';

const dataContext = React.createContext()
export default dataContext

export const DataProvider = ({ children }) => {
  const usersListFromStore = useSelector(store => store.users);
  const [contacts, setContacts] = React.useState(usersListFromStore);

  return (
    <dataContext.Provider value={[contacts, setContacts]}>
      {children}
    </dataContext.Provider>
  )
}