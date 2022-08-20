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
import { useSelector } from 'react-redux';

const Authentication = (props) => {
  const authData = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState('');

  firebase.initializeApp({
    apiKey: "AIzaSyDlX6IJbH2ukAVgyoyz7LcUJYbdI9XKYYU",
    authDomain: "my-project-1535470760105.firebaseapp.com",
    projectId: "my-project-1535470760105",
    storageBucket: "my-project-1535470760105.appspot.com",
    messagingSenderId: "675008876732",
    appId: "1:675008876732:web:6880977df4233f608dc0b9"
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