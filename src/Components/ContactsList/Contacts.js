import UserSearch from "./UserSearch/UserSearch";
import style from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import dataContext from '../../Context/DataProvider';
import React, { useEffect } from 'react';
import EachContact from "./EachContact/EachContact";
import menuStatusContext from "../../Context/MenuStatusProvider";
import { useDispatch } from 'react-redux';
import { authAction } from "../../Redux-store/Actions/authAction";

const Contacts = () => {
  const nikname = useSelector(store => store.auth);
  const [contacts] = React.useContext(dataContext);
  const dispatch = useDispatch();
  const [menuStatus, setMenuStatus] = React.useContext(menuStatusContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setMenuStatus(false);
      }
    }
    window.addEventListener("resize", handleResize, false);
  }, [setMenuStatus]);

  const exit = () => {
    let userLogin = '';
    const user = {
      userLogin
    }
    dispatch(authAction(user));
  }

  return (
    <section className={menuStatus ? style.mainWrapperMobile : style.mainWrapper}>
      <article className={style.userInfoWrapper}>
        <div className={style.contactItemAvatar}></div>
        <h3 className={style.contactItemName}>{nikname.userLogin}</h3>
        <button
          type="submit"
          className={style.logOutButton}
          onClick={exit}
        >
          Log Out
        </button>
        <div className={menuStatus ? style.hidingMenuHide : style.hidingMenu} onClick={() => setMenuStatus(!menuStatus)}></div>
      </article>
      <UserSearch />
      <article className={style.contactsList}>
        {contacts.sort((a, b) => {
          return new Date(b.correspondence[0].date).getTime() - new Date(a.correspondence[0].date).getTime()
        }).map((contact, i) => {
          return (
            <EachContact
              key={i}
              avatar={contact.avatar}
              name={contact.name}
              correspondence={contact.correspondence}
              id={contact.id}
            />
          )
        })}
      </article>
    </section>
  )
}

export default Contacts;