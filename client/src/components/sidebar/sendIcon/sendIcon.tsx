import classNames from "classnames";
import "./sendIcon.scss";

interface ISendIconProps {
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}


export const SendIcon: React.FC<ISendIconProps> = ({ loading, disabled, onClick}) => {
  return (
    <div className={classNames("send-icon", { loading, disabled })} onClick={onClick}>
      {!loading && !disabled && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M3 12l18-7-7 18-4-4 3-10-10 3z"
          />
        </svg>
      )}
      {loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20"
          />
        </svg>
      )}
    </div>
  );
}

