import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/navBar.jsx';
import LandingPage from '../LandingPage/landingPage.jsx';
import Games from '../Games/games.jsx';
import Tournaments from '../Tournaments/tournaments.jsx';
import Matches from '../Matches/matches.jsx';
import Teams from '../Teams/teams.jsx';
import Players from '../Players/players.jsx';


class MainContainer extends Component {
    render() {
        return (
            <div className="mainContainer" >
                <NavBar  />
                <Route exact path="/" render={(props) => {
                    return(
                        <div>
                            <LandingPage {...props} />
                        </div>
                    )
                }}  />
                <Route exact path="/games" render={(props) => {
                    return (
                    <div>
                        <Games  {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/tournaments" render={(props) => {
                    return (
                    <div>
                        <Tournaments  {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/matches" render={(props) => {
                    return (
                    <div>
                        <Matches  {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/teams" render={(props) => {
                    return (
                    <div>
                        <Teams  {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/players" render={(props) => {
                    return (
                    <div>
                        <Players  {...props} />
                    </div>
                    )
                }} />
            </div>
        );
    };
};

export default MainContainer;