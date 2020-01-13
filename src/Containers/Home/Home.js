import React from 'react'
import { TextField } from '@material-ui/core/'
import Card from '../../Components/Card'
import './Home.scss'
import { connect } from 'react-redux'

const Home = ({chars, epis}) => {
    if (chars.length === 0) return <div>Loading...</div>
    return (
        <div className='home'>
            <TextField id="outlined-search" label="Search" type="search" variant="outlined" className="search"/>
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
        chars: state.characters.chars,
        epis: state.episodes.episodes
    }
}

export default connect(mapState)(Home)
