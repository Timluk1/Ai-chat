import { MessagesList } from "components/chat/messagesList"
import { ChatContainer } from "components/helpers/chatContainer"
import { PromtInput } from "components/chat/promtInput"
import { useAppSelector } from "hooks/useAppSelector"
import { useRef } from "react"
import { useGenerateText } from "hooks/useGenerateText"
import { useScroll } from "hooks/useScroll"
import { MainChat } from "../mainChat/mainChat"
import { useNavigate } from "react-router"
import { selectMessages } from "store/messages/selectors"
import { useChatContext } from "hooks/useChatContext"
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
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // получаем текст и данные о чате из контекста чата
    const { inputPromt, setInputPromt } = useChatContext();

    // получаем функцию генерации текста из хука
    const { generateText } = useGenerateText(inputPromt);

    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputPromt(e.target.value);
    };

    const onClickGenerateText = () => {
        const generateTextParametrs = {
            textPromt: inputPromt,
            chatId
        }
        
        generateText(generateTextParametrs);
        setInputPromt("");
        if (textareaRef.current) {
            textareaRef.current.value = ""; // Сбрасываем значение напрямую (на случай некорректного обновления React state)
            textareaRef.current.focus(); // Возвращаем фокус
            textareaRef.current.setSelectionRange(0, 0); // Сбрасываем позицию курсора на начало
        }
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
                text={inputPromt}
                textareaRef={textareaRef}
                onChange={changeText}
                onClickGenerateText={onClickGenerateText}
                loading={loading}
            />
        </ChatContainer>
    )
}
