import React from 'react'
import { TextField } from '@material-ui/core/'
import Card from '../../Components/Card'
import './Home.scss'
import { connect } from 'react-redux'

const Home = ({chars}) => {
    if (chars.length === 0) return <div>Loading...</div>
    return (
        <div className='home'>
            <TextField id="outlined-search" label="Search" type="search" variant="outlined" className="search"/>
            <h1>Characters</h1>
            <div className='chars'>
                {chars.map(char=>{
                    return <Card name={char.name} img={char.image}/>
                })}
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        chars: state.characters.chars
    }
}

export default connect(mapState)(Home)
