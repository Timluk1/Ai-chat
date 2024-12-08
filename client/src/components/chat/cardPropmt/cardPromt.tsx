import Planet from "assets/planet.svg";
import "./cardPromt.scss";

interface ICardPropmtProps {
    text: string
}

export const CardPromt: React.FC<ICardPropmtProps> = ({ text }) => {
    const onClickCardPromt = () => {
        
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
