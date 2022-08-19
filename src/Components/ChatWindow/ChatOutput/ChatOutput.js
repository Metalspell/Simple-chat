import style from './ChatOutput.module.css';

const ChatOutput = ({ selectContact }) => {

  return (
    <section className={style.mainWrapper}>
      {selectContact.correspondence.map((item, i) => {
        return (
          <>
            {item.myMessage ?
              <h1
                className={style.myMessages}
                key={i}
                date={new Date(item.date).toLocaleString().slice(0, -3)}
              >
                {item.message}
                <span>
                  {new Date(item.date).toLocaleString().slice(0, -3)}
                </span>
              </h1>
              :
              <h1
                className={style.selectContactMessages}
                key={i}
              >
                {item.message}
                <span>
                  {new Date(item.date).toLocaleString().slice(0, -3)}
                </span>
              </h1>
            }
          </>
        );
      })}
    </section>
  )
}

export default ChatOutput;