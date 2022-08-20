import { withRouter } from "react-router-dom";
import Contacts from "../Components/ContactsList/Contacts";
import ChatWindow from "../Components/ChatWindow/ChatWindow";
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Main = (props) => {
  const authData = useSelector(store => store.auth);
  
  useEffect(() => {
    if (authData.userLogin === '') {
      props.history.push("/Simple-chat");
    }
  }, [authData.userLogin, props.history]);

  return (
    <>
      <Contacts />
      <ChatWindow />
    </>
  )
}

export default withRouter(Main);