import { MessagesList } from "components/chat/messagesList"
import { ChatContainer } from "components/helpers/chatContainer"
import { PromtInput } from "components/chat/promtInput"
import { useAppSelector } from "hooks/useAppSelector"
import { useRef, useState } from "react"
import { useGenerateText } from "hooks/useGenerateText"
import { useScroll } from "hooks/useScroll"
import { MainChat } from "../mainChat/mainChat"
import { useNavigate } from "react-router"
import { selectMessages } from "store/messages/selectors"
import "./chat.scss"

interface IChatProps {
    typePage: "home" | "chat";
    chatId: string;
}

export const Chat: React.FC<IChatProps> = ({ typePage, chatId }) => {
    const navigate = useNavigate();
    const chat = useAppSelector(state => selectMessages(state, chatId || ""))?.[0] || { messages: [] };
    const loading = useAppSelector((state) => state.messages.generateText.loading);
    const bottomRef = useRef<HTMLDivElement>(null);

    const [textPromt, setTextPromt] = useState<string>("");

    const { generateText } = useGenerateText(textPromt);

    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextPromt(e.target.value);
    };

    const onClickGenerateText = () => {
        generateText(chatId);
        setTextPromt("");
        // если посылаем первое сообщение с главной страницы, то нужно создать чат
        if (typePage === "home") {
            navigate("/chat/" + chatId)
        }
    }

    useScroll(bottomRef, chat.messages);

    return (
        <ChatContainer>
            {typePage === "chat" && <MessagesList messages={chat.messages} />}
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
