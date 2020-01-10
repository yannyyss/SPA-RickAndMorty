import React from 'react'
import { TextField } from '@material-ui/core/'
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <TextField id="outlined-search" label="Search" type="search" variant="outlined" className="search"/>
            Recent characters
            Recent episodes
        </div>
    )
}

export default Home
