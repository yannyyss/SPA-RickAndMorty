import React from 'react'
import { TextField } from '@material-ui/core/'
import Card from '../../Components/Card'
import { useHistory } from 'react-router-dom'
import './Home.scss'
import { connect } from 'react-redux'
import { filterCharsAction, getCharAction } from '../../Redux/charsDuck'
import { filterEpisAction, getEpisAction } from '../../Redux/episDuck'

const Home = ({chars, epis, filterCharsAction, getCharAction, filterEpisAction, getEpisAction}) => {

    const searchCharacter = (event) => {
        filterCharsAction(event.target.value)
        filterEpisAction(event.target.value)
    }

    const history = useHistory();
    const goToCharDetail = (char) => {
        history.push('/profile')
        getCharAction(char)
    }
    const goToEpisDetail = (epis) => {
        history.push('/episode')
        getEpisAction(epis)
    }

    return (
        <div className='home'>
            <TextField onChange={searchCharacter} id="outlined-search" label="Search" type="search" variant="outlined" className="search"/>
            <h2>Characters</h2>
            <div className='chars'>
                {(chars.length > 0) ? chars.map(char=>{
                    return <Card name={char.name} img={char.image} onClick={() =>goToCharDetail(char)}/>
                }): <div>The search didn't match with any character</div>}
            </div>
            <h2>Episodes</h2>
            <div className='chars'>
                {(epis.length > 0) ? epis.map(eps=>{
                    return <Card name={eps.name} number={eps.episode} onClick={() =>goToEpisDetail(eps)}/>
                }): <div>The search didn't match with any episode</div>}
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        chars: state.characters.filterChars,
        epis: state.episodes.filterEpis
    }
}

export default connect(mapState, { filterCharsAction, getCharAction, filterEpisAction, getEpisAction })(Home)
