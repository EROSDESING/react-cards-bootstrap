import React from 'react'
import './cards.css'

import PropTypes from 'prop-types'

const Card = ({ title, image }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overFlow">
        <img src={image} alt={title} className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          lorem ipsum dolor sit amet, consectetur adip
        </p>
        <a href="#!" className="btn btn-outline-secondary rounded-0">
          Go to this Websitie
        </a>
      </div>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default Card
