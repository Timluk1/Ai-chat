import MainChat from "../../components/mainChat/mainChat";
import Sidebar from "../../components/sidebar/sidebar";
import ChatContainer from "../../components/chatContainer/chatContainer";
import PromtInput from "../../components/promtInput/promtInput";
import { AiApiInstance } from "../../api/aiApi";
import { useState } from "react";
import AiAnswer from "../../components/aiAnswer/aiAnswer";
import MessagesList from "../../components/messagesList/messagesList";
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { addMessage } from "../../store/messages/messagesSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import "./home.scss";

export function removeMarkdownSymbols(text: string): string {
    return text
        .replace(/[*_~`#>+\-=\[\]\(\)!\\]/g, "") // Удаляет общие markdown символы
        .replace(/!\[.*?\]\(.*?\)/g, "") // Удаляет картинки
        .replace(/\[.*?\]\(.*?\)/g, "") // Удаляет ссылки
        .replace(/```[\s\S]*?```/g, "") // Удаляет кодовые блоки
        .replace(/`.*?`/g, ""); // Удаляет inline-код
}


export default function Home() {
    const dispacth = useAppDispatch();
    const messages = useAppSelector((state) => state.messages.messages);
    const [textAns, setTextAns] = useState<string>("");
    const [textPromt, setTextPromt] = useState<string>("");
    const [showName, setShowName] = useState<boolean>(!messages.length);

    // смена текста
    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextPromt(e.target.value);
    };

    // генерация текста при клике нейросестью
    const generateText = async () => {
        // проверка наличия промта
        if (textPromt === "") return;
        // очищаем инпут
        setTextPromt("");
    
        // получаем сгенерированный текст 
        const aiText = await AiApiInstance.generateText(textPromt);
        setTextAns(aiText);
    
        // Используем функцию для удаления markdown-символов
        const newAiMessage: { from: "user" | "ai"; name: string; message: string } = {
            from: "ai",
            name: removeMarkdownSymbols(aiText.slice(0, 10)),
            message: aiText
        };
        
        dispacth(addMessage(newAiMessage));
        setShowName(false);
    };

    return (
        <div className="home">
            <Sidebar />
            <ChatContainer>
                <AiAnswer textMarkdown={textAns} />
                {showName ? (
                    <MainChat showName={showName} />
                ) : (
                    <MessagesList messages={messages} />
                )}
                <PromtInput
                    text={textPromt}
                    onChange={changeText}
                    generateText={generateText}
                />
            </ChatContainer>
        </div>
    );
}
