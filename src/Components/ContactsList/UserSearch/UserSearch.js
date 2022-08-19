import style from './UserSearch.module.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dataContext from '../../../Context/DataProvider';

const UserSearch = () => {
  const usersListFromStore = useSelector(store => store.users);
  const [inputData, setInputData] = useState('');
  const [contacts, setContacts] = React.useContext(dataContext);

  useEffect(() => {
    let searchResult = contacts.filter(item => item.name.toLowerCase().includes(inputData) ? item : false);
    setContacts(searchResult);
    if (inputData === '') {
      setContacts(usersListFromStore);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputData, usersListFromStore]);

  return (
    <section className={style.searchSection}>
      <input className={style.searchInput}
        type="text"
        placeholder='Search'
        value={inputData}
        size='2vw'
        onChange={e => setInputData(e.target.value.toLowerCase())}
      />
    </section>
  )
}

export default UserSearch;