import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/UserChat";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
    

    const { userChats,
        isUserChatsLoading,
        userChatsError } = useContext(ChatContext);
    console.log("UserChats", userChats);
  
    return <>Chat</>;
};
export default Chat;