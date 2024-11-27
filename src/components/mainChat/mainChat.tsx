import TitleName from "../title/title"
import CardPromt from "../cardPropmt/cardPromt"
import "./mainChat.scss"

export default function MainChat() {
  return (
    <main className="main-chat">
      <TitleName />
      <ul className="main-chat__list">
        <li>
          <CardPromt />
        </li>
        <li>
          <CardPromt />
        </li>
        <li>
          <CardPromt />
        </li>
        <li>
          <CardPromt />
        </li>
      </ul>
    </main>
  )
}
