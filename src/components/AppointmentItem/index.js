/* eslint-disable react/no-unknown-property */
import './index.css'

const AppointmentItem = props => {
  const {newAppointment, onToggleStar} = props
  const {id, date, isFavStar, title} = newAppointment

  const onChangeStar = () => {
    onToggleStar(id)
  }

  const imgUrl = isFavStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list">
      <div className="lis1">
        <div className="lis2">
          <p>{title}</p>

          <button
            type="button"
            className="bn"
            testid="star"
            onClick={onChangeStar}
          >
            <img src={imgUrl} alt="star" />
          </button>
        </div>
        <p>Date: {date}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
