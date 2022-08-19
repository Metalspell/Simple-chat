import { withRouter } from "react-router-dom";
import Contacts from "../Components/ContactsList/Contacts";
import ChatWindow from "../Components/ChatWindow/ChatWindow";

const Main = (props) => {
  return (
    <>
      <Contacts />
      <ChatWindow />
    </>
  )
}

export default withRouter(Main);