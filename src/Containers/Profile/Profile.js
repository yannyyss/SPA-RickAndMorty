import React from 'react'
import ProfileCard from '../../Components/ProfileCard'
import './Profile.scss'
import { connect } from 'react-redux'

const Profile = ({char}) => {
    return (
        <div className="profile">
            <ProfileCard char={char}/>
        </div>
    )
}
const mapState = (state) => {
    return{
        char:state.characters.currentChar
    }
}

export default connect(mapState)(Profile)
