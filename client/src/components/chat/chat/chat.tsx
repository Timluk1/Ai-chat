import { MessagesList } from "components/chat/messagesList"
import { ChatContainer } from "components/helpers/chatContainer"
import { PromtInput } from "components/chat/promtInput"
import { useAppSelector } from "hooks/useAppSelector"
import { useRef, useState } from "react"
import { useGenerateText } from "hooks/useGenerateText"
import { useScroll } from "hooks/useScroll"
import { MainChat } from "../mainChat/mainChat"
import { useNavigate, useParams } from "react-router"
import { useAppDispatch } from "hooks/useAppDispatch"
import { nanoid } from "nanoid"
import { createChat } from "store/chats/chatsSlice"
import "./chat.scss"

interface IChatProps {
    typePage: "home" | "chat"
}

export const Chat: React.FC<IChatProps> = ({ typePage }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const messages = useAppSelector((state) => state.messages.messages.filter(({ chat }) => chat.chatId === id));
    const loading = useAppSelector((state) => state.messages.generateText.loading);

    const bottomRef = useRef<HTMLDivElement>(null);

    const [textPromt, setTextPromt] = useState<string>("");

    const { generateText } = useGenerateText(textPromt);

    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextPromt(e.target.value);
    };

    const onClickGenerateText = () => {
        generateText();
        setTextPromt("");
        // если посылаем первое сообщение с главной страницы, то нужно создать чат
        if (typePage === "home") {
            const chatId = nanoid();
            const newChatPayload = {
                chatId,
                name: textPromt.slice(0, 18)
            }
            dispatch(createChat(newChatPayload))
            navigate("/chat/" + chatId)
        }
    }

    useScroll(bottomRef, messages);

    return (
        <ChatContainer>
            {typePage === "chat" && <MessagesList messages={messages}/>}
            {typePage === "home" && <MainChat />}
            <div ref={bottomRef}></div>
            <PromtInput
                text={textPromt}
                onChange={changeText}
                onClickGenerateText={onClickGenerateText}
                loading={loading}
            />
        </ChatContainer>
    )
}
