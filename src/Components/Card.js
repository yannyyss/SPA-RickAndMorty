import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({name, img}) => {
    return (
        <div className='card'>
            <img alt="rick" src={img} />
            <p className='name'>
                {name}
            </p>
        </div>
    )
}

Card.propTypes ={
    img: PropTypes.string,
    name: PropTypes.string
}

export default Card
