import React from 'react'
import { TextField } from '@material-ui/core/'
import Card from '../../Components/Card'
import './Home.scss'
import { connect } from 'react-redux'
import { filterCharsAction } from '../../Redux/charsDuck'
import { filterEpisAction } from '../../Redux/episDuck'

const Home = ({chars, epis, filterCharsAction, filterEpisAction}) => {

    const searchCharacter = (event) => {
        filterCharsAction(event.target.value)
        filterEpisAction(event.target.value)
    }
    return (
        <div className='home'>
            <TextField onChange={searchCharacter} id="outlined-search" label="Search" type="search" variant="outlined" className="search"/>
            <h2>Characters</h2>
            <div className='chars'>
                {(chars.length > 0) ? chars.map(char=>{
                    return <Card name={char.name} img={char.image}/>
                }): <div>The search didn't match with any character</div>}
            </div>
            <h2>Episodes</h2>
            <div className='chars'>
                {(epis.length > 0) ? epis.map(eps=>{
                    return <Card name={eps.name} number={eps.episode}/>
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

export default connect(mapState, { filterCharsAction, filterEpisAction })(Home)
