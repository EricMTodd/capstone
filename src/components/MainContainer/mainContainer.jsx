import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/navBar.jsx';
import LandingPage from '../LandingPage/landingPage.jsx';
import Games from '../Games/games.jsx';
import Csgo from '../Games/Csgo/csgoDetails.jsx';
import CsgoMatches from '../Games/Csgo/CsgoMatches/csgoMatches.jsx';


class MainContainer extends Component {
    constructor() {
        super()
        this.state = {
            "csgoMatches": [],
            "csgoPlayers": [],
            "csgoTeams": [],
        }
    }
    componentDidMount() {
        this.getMatches().then((response) => {
            this.setState({
                matches: response
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    getMatches = async () => {
        const csgoMatches = await fetch ("https://esports.glenndehaan.com/api/matches/csgo", {
            method: "GET"
        });
        const csgoMatchesJson = await csgoMatches.json();
        console.log("csgoMatchesJson:", csgoMatchesJson)

        const overwatchMatches = await fetch ("https://esports.glenndehaan.com/api/matches/overwatch", {
            method: "GET"
        });
        const overwatchMatchesJson = await overwatchMatches.json();
        console.log("overwatchMatchesJson:", overwatchMatchesJson)

        const dota2Matches = await fetch ("https://esports.glenndehaan.com/api/matches/dota2", {
            method: "GET"
        });
        const dota2MatchesJson = await dota2Matches.json();
        console.log("dota2MatchesJson:", dota2MatchesJson)

        let allMatches = [csgoMatchesJson.matches, overwatchMatchesJson.matches, dota2MatchesJson.matches]
        console.log("allMatches:", allMatches)
        return csgoMatchesJson
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
                <Route exact path="/games/csgo/matches" render={(props) => {
                    return (
                    <div>
                        <CsgoMatches matches={this.state.csgoMatches} {...props} />
                    </div>
                    )
                }} />
            </div>
        );
    };
};

export default MainContainer;