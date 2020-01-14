import React from 'react'
import { TextField } from '@material-ui/core/'
import Card from '../../Components/Card'
import './Home.scss'
import { connect } from 'react-redux'
import { filterCharsAction } from '../../Redux/charsDuck'

const Home = ({chars, epis, filterCharsAction}) => {

    const searchCharacter = (event) => {
        filterCharsAction(event.target.value)
    }
    return (
        <div className='home'>
            <TextField onChange={searchCharacter} id="outlined-search" label="Search" type="search" variant="outlined" className="search"/>
            <h2>Characters</h2>
            <div className='chars'>
                {chars.map(char=>{
                    return <Card name={char.name} img={char.image}/>
                })}
            </div>
            <h2>Episodes</h2>
            <div className='chars'>
                {epis.map(eps=>{
                    return <Card name={eps.name} number={eps.episode}/>
                })}
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        chars: state.characters.filterChars,
        epis: state.episodes.episodes
    }
}

export default connect(mapState, { filterCharsAction })(Home)
