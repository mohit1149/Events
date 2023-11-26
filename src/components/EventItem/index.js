// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEventDetails, onClickButton} = props
  const {imageUrl, name, location, id} = eachEventDetails

  const onClickAction = () => {
    onClickButton(id)
  }

  return (
    <li className="list-item">
      <button className="event-button" type="button" onClick={onClickAction}>
        <img className="event-image" alt="event" src={imageUrl} />
      </button>
      <p className="heading">{name}</p>
      <p className="paragraph">{location}</p>
    </li>
  )
}

export default EventItem
