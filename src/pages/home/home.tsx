import MainChat from "../../components/mainChat/mainChat";
import Sidebar from "../../components/sidebar/sidebar";
import ChatContainer from "../../components/chatContainer/chatContainer";
import PromtInput from "../../components/promtInput/promtInput";
import { AiApiInstance } from "../../api/aiApi";
import { useState } from "react";
import AiAnswer from "../../components/aiAnswer/aiAnswer";
import "./home.scss";

/*
Сделать адекватное позиционирование инпута 
Сделать возможность добавлять | удалять чаты
Сделать историю разных чатов
Адекватно выводить в ряд несколько чатов и промт
Сделать для вывода промта и нейросети иконки и отдельные компоненты
Сделать возможность оценить ответ нейросети
*/

export default function Home() {
    const [textAns, setTextAns] = useState<string>("");
    const [textPromt, setTextPromt] = useState<string>("");
    const [showName, setShowName] = useState<boolean>(true);


    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextPromt(e.target.value);
    }

    const onClickGenerateText = async () => {
        setTextAns(await AiApiInstance.generateText(textPromt));
        setShowName(false);
        setTextPromt("");
    }
    
    return (
        <div className="home">
            <Sidebar />
            <ChatContainer>
                <MainChat showName={showName} />
                <AiAnswer textMarkdown={textAns} />
                <PromtInput text={textPromt} onChange={changeText} onClickGenerateText={onClickGenerateText}/>
            </ChatContainer>
        </div>
    );
}
