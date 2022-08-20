import style from './ChatInput.module.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import selectContactContext from '../../../Context/SelectContactProvider';
import typingIndicatorContext from '../../../Context/TypeIndicator';
import { newMessageAction, answerAction } from '../../../Redux-store/Actions/usersAnswers';
import dataContext from '../../../Context/DataProvider';

const ChatInput = () => {
  const dispatch = useDispatch();
  const [selectContactId] = React.useContext(selectContactContext);
  const [, setTypingStatus] = React.useContext(typingIndicatorContext);

  const [contacts] = React.useContext(dataContext);

  const [message, setMessage] = useState('');

  const sendMessage = e => {
    e.preventDefault();

    if (selectContactId !== null) {

      let rand = 0;

      ((min, max) => {
        rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
      })(10000, 15000);

      const newMessage = {
        selectContactId,
        message: {
          myMessage: true,
          message,
          date: new Date().toString()
        }
      }

      if (message.trim().length) {
        dispatch(newMessageAction(newMessage));
        setTypingStatus(true);

        setTimeout(function () {
          dispatch(answerAction(selectContactId));
          setTypingStatus(false);
        }, rand);
        setMessage('');
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('correspondenceData', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <section className={style.mainWrapper}>
      <form
        onSubmit={e => sendMessage(e)}
        className={style.formWrapper}
      >
        <input
          type="text"
          className={style.input}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </form>
    </section>
  )
}

export default ChatInput;
