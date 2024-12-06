import { useRef, useEffect } from "react";
import { SendIcon } from "components/sidebar/sendIcon";
import "./promtInput.scss";

interface IPromtInputProps {
    text: string;
    loading: boolean;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    generateText: () => void;
}

export const PromtInput: React.FC<IPromtInputProps> = ({ text, loading, onChange, generateText }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Функция для изменения высоты
    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight();
    }, []);

    return (
        <div className="promt-input-layout">
            <div className="promt-input">
                <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={onChange}
                    className="promt-input__input"
                    placeholder="Enter a prompt here"
                    onInput={adjustHeight}
                    onKeyDown={(e) => e.key === "Enter" && generateText()}
                />
                <ul className="promt-input__buttons buttons-list">
                    <SendIcon loading={loading} disabled={text === ""} onClick={() => generateText()} />
                </ul>
            </div>
        </div>
    );
}