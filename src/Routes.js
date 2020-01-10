import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Containers
import Home from './Containers/Home/Home'
import Profile from './Containers/Profile/Profile'
import Episode from './Containers/Episode/Episode'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/episode' component={Episode}/>
        </Switch>
    )
}

export default Routes
