import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({img, number, name}) => {
    return (
        <div className='card'>
            {img ? <div>
                <img alt="rick" src={img} />
            </div>: <div>{number}</div>}
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
