import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/navBar.jsx';
import LandingPage from '../LandingPage/landingPage.jsx';
import Games from '../Games/games.jsx';
import Csgo from '../Games/Csgo/csgoDetails.jsx';
import CsgoTournaments from '../Games/Csgo/CsgoTournaments/csgoTournaments.jsx';
import CsgoTournamentsDetails from '../Games/Csgo/CsgoTournaments/csgoTournamentsDetails.jsx';
import CsgoMatches from '../Games/Csgo/CsgoMatches/csgoMatches.jsx';
import CsgoPlayers from '../Games/Csgo/CsgoPlayers/csgoPlayers.jsx';
import CsgoTeams from '../Games/Csgo/CsgoTeams/csgoTeams.jsx';


class MainContainer extends Component {
    constructor() {
        super()
        this.state = {
            "csgoMatches": [],
            "csgoPlayers": [],
            "csgoTeams": [],
            "csgoTournaments": {},
        }
    }
    componentDidMount() {
        this.getCsgoMatches().then((response) => {
            this.setState({
                csgoMatches: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getCsgoPlayers().then((response) => {
            this.setState({
                csgoPlayers: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getCsgoTeams().then((response) => {
            this.setState({
                csgoTeams: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getCsgoTournaments().then((response) => {
            this.setState({
                csgoTournaments: response
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    getCsgoMatches = async () => {
        const csgoMatches = await fetch("https://esports.glenndehaan.com/api/matches/csgo", {
            method: "GET"
        });
        const csgoMatchesJson = await csgoMatches.json();
        return csgoMatchesJson
    }
    getCsgoPlayers = async () => {
        const csgoPlayers = await fetch("https://esports.glenndehaan.com/api/players/csgo", {
            method: "GET"
        });
        const csgoPlayersJson = await csgoPlayers.json();
        return csgoPlayersJson
    }
    getCsgoTeams = async () => {
        const csgoTeams = await fetch("https://esports.glenndehaan.com/api/teams/csgo", {
            method: "GET"
        });
        const csgoTeamsJson = await csgoTeams.json();
        return csgoTeamsJson
    }
    getCsgoTournaments = async () => {
        const csgoTournaments = await fetch("https://esports.glenndehaan.com/api/matches/csgo", {
            method: "GET"
        });
        const csgoTournamentsJson = await csgoTournaments.json();       
        let tournaments = {};
        for (let i = 0; i < csgoTournamentsJson.matches.length; i++) {
            tournaments[csgoTournamentsJson.matches[i].competition_label] = [];
        }
        return tournaments;
    }
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
                        <Games {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/csgo" render={(props) => {
                    return (
                    <div>
                        <Csgo {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/csgo/tournaments" render={(props) => {
                    return (
                    <div>
                        <CsgoTournaments tournaments={this.state.csgoTournaments} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/csgo/tournaments/details/:key" render={(props) => {
                    return (
                    <div>
                        <CsgoTournamentsDetails teams={this.state.csgoTeams} matches={this.state.csgoMatches} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/csgo/matches" render={(props) => {
                    return (
                    <div>
                        <CsgoMatches matches={this.state.csgoMatches} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/csgo/teams" render={(props) => {
                    return (
                    <div>
                        <CsgoTeams teams={this.state.csgoTeams} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/csgo/players" render={(props) => {
                    return (
                    <div>
                        <CsgoPlayers players={this.state.csgoPlayers} {...props} />
                    </div>
                    )
                }} />
            </div>
        );
    };
};

export default MainContainer;