import MessageIcon from "../../assets/images/message-icon.png";

interface IChatProps {
    text: string
}

export default function Chat({ text }: IChatProps) { 
    const croppedText = text.slice(0, 17);
    return (
        <div>
            <img src={MessageIcon} alt="" />
            <p>{croppedText}</p>
        </div>
    )
}
