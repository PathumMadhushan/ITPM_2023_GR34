import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/UserChat";

const Chat = () => {
    

    const { userChats,
        isUserChatsLoading,
        userChatsError } = useContext(ChatContext);
    console.log("UserChats", userChats);
  
    return <>Chat</>;
};