import { withRouter } from "react-router-dom";
import classes from './SubmitButton/SubmitButton.module.css';
import SubmitButton from "./SubmitButton/SubmitButton";
import style from './Authentication.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authAction } from "../../Redux-store/Actions/authAction";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Authentication = (props) => {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState('');

  firebase.initializeApp({
    apiKey: "AIzaSyDp0YagVgeNQXpmQCV7qyzEZ8DwquGj3h4",
    authDomain: "auth-example-24715.firebaseapp.com",
    projectId: "auth-example-24715",
    storageBucket: "auth-example-24715.appspot.com",
    messagingSenderId: "766819906578",
    appId: "1:766819906578:web:f5a08923573a3e6dd594cb"
  });

  const auth = firebase.auth();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    let userLogin = auth._delegate.currentUser.displayName;

    const user = {
      userLogin
    }

    dispatch(authAction(user));
    props.history.push("/Simple-chat/main");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (userLogin.trim().length > 0) {
      const user = {
        userLogin
      }
      dispatch(authAction(user));
      props.history.push("/Simple-chat/main");
    }
    setUserLogin('');
  };

  return (
    <>
      <section className={style.mainWrapper}>
        <form onSubmit={onSubmit} className={style.userNameForm}>
          <label htmlFor="userNameForm"><p className={style.label}>Please, enter your name</p></label>
          <input
            id="userNameForm"
            name="name"
            type="login"
            placeholder='Your login'
            autoComplete="off"
            autoFocus
            className={style.formField}
            onChange={e => setUserLogin(e.target.value)}
          />
          <SubmitButton text='Enter' />
        </form>
        <button className={classes.buttonGoogle} text='Auth by Google' onClick={signInWithGoogle}>
          <h3 className={classes.buttonTitle}>
            Auth by Google
          </h3>
        </button>
      </section>
    </>
  )
}

export default withRouter(Authentication);