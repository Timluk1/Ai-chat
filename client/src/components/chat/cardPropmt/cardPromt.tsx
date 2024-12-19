import Planet from "assets/planet.svg";
import { useGenerateText } from "hooks/useGenerateText";
import { useChatContext } from "hooks/useChatContext";
import { useNavigate } from "react-router";
import "./cardPromt.scss";

interface ICardPropmtProps {
    text: string
}

export const CardPromt: React.FC<ICardPropmtProps> = ({ text }) => {
    const navigate = useNavigate();
    const { generateText } = useGenerateText(text)
    const { chatId  } = useChatContext();

    const onClickCardPromt = async () => {
        const generateTextParametrs = {
            textPromt: text,
            chatId
        }
        
        generateText(generateTextParametrs)
        navigate(`/chat/${chatId}`)
    }

    return (
        <button onClick={onClickCardPromt}>
            <div className="card-promt">
                <p className="card-promt__text">
                    {text}
                </p>
                <div className="card-promt__imgContainer">
                    <img className="card-promt__img" src={Planet} alt="" />
                </div>
            </div>
        </button>
    );
}
