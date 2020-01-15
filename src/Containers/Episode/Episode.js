import React from 'react'
import EpisodeCard from '../../Components/EpisodeCard'
import './Episode.scss'
import { connect } from 'react-redux'

const Episode = ({epis}) => {
    return (
        <div className="episode">
            <EpisodeCard epis={epis}/>
        </div>
    )
}

const mapState = (state) => {
    return {
        epis: state.episodes.currentEpis
    }
}

export default connect(mapState)(Episode)
