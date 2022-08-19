import style from './ChatOutput.module.css';

const ChatOutputEmpty = () => {
  return (
    <section className={style.mainWrapper}>
      <div className={style.invitationWrapper}>
        <h1 className={style.invitation}>
          Сhoose an interlocutor
        </h1>
      </div>
    </section>
  )
}

export default ChatOutputEmpty;