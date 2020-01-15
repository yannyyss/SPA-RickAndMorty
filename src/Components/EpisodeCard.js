import React from 'react'
import PropTypes from 'prop-types'
import './EpisodeCard.scss'

const EpisodeCard = ({epis}) => {
    console.log(epis)
    return (
        (epis) ? <div className="episode-card">
            <div className="episode-head">
                <h2>Episode Name:</h2>
                <h3>{epis.name}</h3>
            </div>
            <div className="episode-body">
                <div className="episode-info">
                    <h2>Episode Number: </h2>
                    <p>{epis.episode}</p>
                </div>
                <div className="episode-info">
                    <h2>Air Date:</h2>
                    <p>{epis.air_date}</p>
                </div>
            </div>
        </div> : <h2>Select an episode in Home</h2>
    )
}

EpisodeCard.propTypes = {
    epis: PropTypes.object
}

export default EpisodeCard
