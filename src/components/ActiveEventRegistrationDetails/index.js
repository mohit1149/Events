// Write your code here

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  registration: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventStatus} = props
  const yetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-container"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-paragraph">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yet-to-register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const initialFunction = () => (
    <div className="yet-to-register-container">
      <p className="initial-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const registrationDone = () => (
    <div className="yet-to-register-container">
      <img
        className="registration-photo"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
      />
      <h1 className="registration-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationClosed = () => (
    <div className="yet-to-register-container">
      <img
        className="registration-photo"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-paragraph">
        stay tuned. We will reopen
      </p>
      <p className="registration-closed-paragraph">the registrations soon!</p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventStatus) {
      case apiStatusConstants.yetToRegister:
        return yetToRegister()
      case apiStatusConstants.registration:
        return registrationDone()
      case apiStatusConstants.registrationClosed:
        return registrationClosed()
      case apiStatusConstants.initial:
        return initialFunction()
      default:
        return null
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
