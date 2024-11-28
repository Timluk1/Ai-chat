import MainChat from "../../components/mainChat/mainChat";
import Sidebar from "../../components/sidebar/sidebar";
import ChatContainer from "../../components/chatContainer/chatContainer";
import PromtInput from "../../components/promtInput/promtInput";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import AiAnswer from "../../components/aiAnswer/aiAnswer";
import "./home.scss";

export default function Home() {
    const [textAns, setTextAns] = useState<string>("");
    const [textPromt, setTextPromt] = useState<string>("");
    const [showName, setShowName] = useState<boolean>(true);
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextPromt(e.target.value);
    }

    const onClickGenerateText = async () => {
        const promt = textPromt;
        const result = (await model.generateContent(promt));
        setTextAns(result.response.text());
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
