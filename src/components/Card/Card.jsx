import './Card.css'
import { Link } from 'react-router-dom'

export const Card = (props) => {
  const {
    id,
    title,
    price,
    img,
    address,
    date,
  } = props

  return (
    <li className="card">
      <Link to={`/product/${id}`}>
        <div className="card--img">
          <img
            src={img}
            alt="card-img"
          />
        </div>
        <h5 className="card--title">
          {title}
        </h5>
        <strong className="card--price">
          {price}
        </strong>
        <div className="card--desc-box">
            <span className="card--desc">
              {address}
            </span>
          <span className="card--desc">
              {date}
            </span>
        </div>
      </Link>
    </li>
  )
}
