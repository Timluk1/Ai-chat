import { useRef, useEffect } from "react";
import Stickers from "../../assets/stickers.svg"
import Voice from "../../assets/voice.svg"
import Send from "../../assets/send.svg"
import "./promtInput.scss";

interface IPromtInputProps {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClickGenerateText: () => void
}

export default function PromtInput({ text, onChange, onClickGenerateText }: IPromtInputProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Функция для изменения высоты
    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    };

    useEffect(() => {
        adjustHeight();
    }, []);

    return (
        <div className="promt-input">
            <textarea
                ref={textareaRef}
                value={text}
                onChange={onChange}
                className="promt-input__input"
                placeholder="Enter a prompt here"
                onInput={adjustHeight}
            />
            <ul className="promt-input__buttons buttons-list">
                <li className="buttons-list__item">
                    <button>
                        <img src={Stickers} alt="" />
                    </button>
                </li>
                <li className="buttons-list__item">
                    <button>
                        <img src={Voice} alt="" />
                    </button>
                </li>
                <li className="buttons-list__item">
                    <button onClick={onClickGenerateText}>
                        <img src={Send} alt="" />
                    </button>
                </li>
            </ul>
        </div>
    );
}
