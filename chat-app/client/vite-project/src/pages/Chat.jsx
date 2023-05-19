import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";

const Chat = () => {
    const { userChats,
        isUserChatsLoading,
        userChatsError, } = useContext(ChatContext)
    
    console.log("UserChats", userChats);
    return (
        <Container>
            {userChats?.length < 1 ? null : (
                <Stack direction="horizontal">
                    <Stack>List</Stack>
                    <p>ChatBox</p>
                </Stack>
        )}
    </Container>
    );
};
 
export default Chat;