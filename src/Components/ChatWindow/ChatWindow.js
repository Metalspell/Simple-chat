import style from './ChatWindow.module.css';
import ContactAvatar from './ContactAvatar/ContactAvatar';
import { useEffect, useState } from 'react';
import dataContext from '../../Context/DataProvider';
import selectContactContext from '../../Context/SelectContactProvider';
import React from 'react';
import ChatOutput from './ChatOutput/ChatOutput';
import ChatOutputEmpty from './ChatOutput/ChatOutputEmpty';
import ChatInput from './ChatInput/ChatInput';

const ChatWindow = () => {
  const [contacts] = React.useContext(dataContext);
  const [selectContactId] = React.useContext(selectContactContext);
  const [selectContact, setSelectContact] = useState(null);

  useEffect(() => {
    contacts.filter(function (values, item) {
      return (values.id === selectContactId)
    }).map(function (item) {
      setSelectContact(item);
      return item;
    });
  }, [contacts, selectContactId, selectContact])

  return (
    <section className={style.mainWrapper}>
      <ContactAvatar selectContact={selectContact} />
      {selectContact !== null ?
        <ChatOutput selectContact={selectContact} />
        :
        <ChatOutputEmpty />
      }
      <ChatInput />
    </section>
  )
}

export default ChatWindow;