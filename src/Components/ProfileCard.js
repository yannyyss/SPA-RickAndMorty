import React from 'react'
import PropTypes from 'prop-types'
import './ProfileCard.scss'

const ProfileCard = ({char}) => {
    
    return (
        (char) ? <div className="profile-card">
            <div className="left-container">
                <img alt="rick" src={char.image}/>
                <h2 className='name'>{char.name}</h2>
            </div>
            <div className="rigth-container">
                <h2 className="info-header">Character Info:</h2>
                <div className="info">
                    <h4>Status:</h4>
                    <p className='status'>{char.status}</p>
                </div>
                <div className="info">
                    <h4>Species:</h4>
                    <p className='status'>{char.species}</p>
                </div>
                <div className="info">
                    <h4>Gender:</h4>
                    <p className='status'>{char.gender}</p>
                </div>
                <div className="info">
                    <h4>Origin:</h4>
                    <p className='status'>{char.origin.name}</p>
                </div>
                <div className="info">
                    <h4>Location:</h4>
                    <p className='status'>{char.location.name}</p>
                </div>
            </div>
        </div> : <h2>Select a character in Home</h2>
    )
}
ProfileCard.propTypes = {
    char: PropTypes.string
}

export default ProfileCard
