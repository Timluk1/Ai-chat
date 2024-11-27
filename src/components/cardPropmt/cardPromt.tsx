import Planet from "../../assets/planet.svg"
import "./cardPromt.scss"

export default function CardPromt() {
  return (
    <button>
      <div className="card-promt">
        <p className="card-promt__text">Suggest beaches to visit in a city, including details</p>
        <div className="card-promt__imgContainer">
          <img className="card-promt__img" src={Planet} alt="" />
        </div>
      </div>
    </button>
  )
}

