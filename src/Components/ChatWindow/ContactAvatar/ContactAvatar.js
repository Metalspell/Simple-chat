import style from './ContactAvatar.module.css';
import React from 'react';
import { useEffect, useState } from 'react';
import typingIndicatorContext from '../../../Context/TypeIndicator';
import menuStatusContext from '../../../Context/MenuStatusProvider';

const ContactAvatar = ({ selectContact }) => {

  const [selectContactInfo, setSelectContactInfo] = useState(null);

  const [typingStatus,] = React.useContext(typingIndicatorContext);

  const [menuStatus, setMenuStatus] = React.useContext(menuStatusContext);

  useEffect(() => {
    if (selectContact !== null) {
      setSelectContactInfo(selectContact);
    }
  }, [selectContactInfo, selectContact]);

  return (
    <section className={style.mainWrapper}>
      <div className={style.selectContactInfo}>
        <div
          style={selectContact === null ?
            {
              background: `url(https://cdn-icons-png.flaticon.com/512/53/53068.png) no-repeat center center / cover`,
              backgroundColor: 'aliceblue'
            }
            :
            { background: `url(${selectContact.avatar}) no-repeat center 0 / cover` }}
          className={style.avatar}>
        </div>
        <div className={style.selectedUserName}>
          {selectContact === null ?
            <h3 className={style.name}>John Doe</h3>
            :
            <h3 className={style.name}>{selectContact.name}</h3>
          }
          {typingStatus ?
            <h3 className={style.name}>is typing<span>...</span></h3>
            :
            null
          }
        </div>
      </div>
      <div className={menuStatus ? style.hidingMenuHide : style.hidingMenu} onClick={() => setMenuStatus(!menuStatus)}></div>
    </section>
  )
}

export default ContactAvatar;
