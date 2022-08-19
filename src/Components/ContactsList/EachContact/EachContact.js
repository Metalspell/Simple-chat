import style from './EachContact.module.css';
import React from 'react';
import selectContactContext from '../../../Context/SelectContactProvider';
import menuStatusContext from '../../../Context/MenuStatusProvider';

const EachContact = ({ avatar, name, correspondence, id }) => {
  const [, setSelectContactId] = React.useContext(selectContactContext);
  const [, setMenuStatus] = React.useContext(menuStatusContext);

  return (
    <section
      className={style.mainWrapper}
      onClick={() => {
        setSelectContactId(+id);
        setMenuStatus(false);
      }}
    >
      <div
        style={{ background: `url(${avatar}) no-repeat center 0% / cover` }}
        className={style.avatarWrapper}>
      </div>
      <div className={style.contactInfo}>
        {name}
        <div className={style.correspondenceConversation}>
          {correspondence[0].myMessage ? 'You typed: ' : ''}
          {correspondence[0].message.substr(0, 20) + '...'}
        </div>
      </div>
      <div className={style.dateOfConversation}>
        {new Date(correspondence[0].date).toLocaleDateString()}
      </div>
    </section>
  );
}

export default EachContact;