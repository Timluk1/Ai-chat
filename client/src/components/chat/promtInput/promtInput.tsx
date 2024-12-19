import { useEffect } from "react";
import { SendIcon } from "components/chat/sendIcon";
import "./promtInput.scss";

interface IPromtInputProps {
    text: string;
    textareaRef: React.RefObject<HTMLTextAreaElement>;
    loading: boolean;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClickGenerateText: () => void;
}

export const PromtInput: React.FC<IPromtInputProps> = ({ text, textareaRef, loading, onChange, onClickGenerateText}) => {

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
                    value={text.trim().length === 0 ? "" : text}
                    onChange={onChange}
                    className="promt-input__input"
                    placeholder="Enter a prompt here"
                    onInput={adjustHeight}
                    onKeyDown={(e) => e.key === "Enter" && onClickGenerateText()}
                />
                <ul className="promt-input__buttons buttons-list">
                    <SendIcon loading={loading} disabled={text.trim().length === 0} onClick={onClickGenerateText} />
                </ul>
            </div>
        </div>
    );
};
