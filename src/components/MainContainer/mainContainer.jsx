import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/navBar.jsx';
import LandingPage from '../LandingPage/landingPage.jsx';
import Games from '../Games/games.jsx';
// CS:GO imports
import Csgo from '../Games/Csgo/csgoDetails.jsx';
import CsgoTournaments from '../Games/Csgo/CsgoTournaments/csgoTournaments.jsx';
import CsgoTournamentsDetails from '../Games/Csgo/CsgoTournaments/CsgoTournamentsDetails/csgoTournamentsDetails.jsx';
import CsgoMatches from '../Games/Csgo/CsgoMatches/csgoMatches.jsx';
import CsgoPlayers from '../Games/Csgo/CsgoPlayers/csgoPlayers.jsx';
import CsgoTeams from '../Games/Csgo/CsgoTeams/csgoTeams.jsx';
import CsgoTeamsDetails from '../Games/Csgo/CsgoTeams/CsgoTeamsDetails/csgoTeamsDetails.jsx';
// Overwatch Imports
import Overwatch from '../Games/Overwatch/overwatchDetails.jsx';
import OverwatchTournaments from '../Games/Overwatch/OverwatchTournaments/overwatchTournaments.jsx';
import OverwatchTournamentsDetails from '../Games/Overwatch/OverwatchTournaments/OverwatchTournamentsDetails/overwatchTournamentsDetails.jsx';
import OverwatchMatches from '../Games/Overwatch/OverwatchMatches/overwatchMatches.jsx';
import OverwatchPlayers from '../Games/Overwatch/OverwatchPlayers/overwatchPlayers.jsx';
import OverwatchTeams from '../Games/Overwatch/OverwatchTeams/overwatchTeams.jsx';
import OverwatchTeamsDetails from '../Games/Overwatch/OverwatchTeams/OverwatchTeamsDetails/overwatchTeamsDetails.jsx';
// Dota 2
import Dota2 from '../Games/Dota2/dota2Details.jsx';
import Dota2Tournaments from '../Games/Dota2/Dota2Tournaments/dota2Tournaments.jsx';
import Dota2TournamentsDetails from '../Games/Dota2/Dota2Tournaments/Dota2TournamentsDetails/dota2TournamentsDetails.jsx';
import Dota2Matches from '../Games/Dota2/Dota2Matches/dota2Matches.jsx';
import Dota2Players from '../Games/Dota2/Dota2Players/dota2Players.jsx';
import Dota2Teams from '../Games/Dota2/Dota2Teams/dota2Teams.jsx';
import Dota2TeamsDetails from '../Games/Dota2/Dota2Teams/Dota2TeamsDetails/dota2TeamsDetails.jsx';



class MainContainer extends Component {
    constructor() {
        super()
        this.state = {
            // CS:GO
            "csgoMatches": [],
            "csgoPlayers": [],
            "csgoTeams": [],
            "csgoTournaments": {},
            // Overwatch
            "overwatchMatches": [],
            "overwatchPlayers": [],
            "overwatchTeams": [],
            "overwatchTournaments": {},
            // Dota 2
            "dota2Matches": [],
            "dota2Players": [],
            "dota2Teams": [],
            "dota2Tournaments": {},
        }
    }
    componentDidMount() {

        // CS:GO
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

        // Overwatch
        this.getOverwatchMatches().then((response) => {
            this.setState({
                overwatchMatches: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getOverwatchPlayers().then((response) => {
            this.setState({
                overwatchPlayers: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getOverwatchTeams().then((response) => {
            this.setState({
                overwatchTeams: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getOverwatchTournaments().then((response) => {
            this.setState({
                overwatchTournaments: response
            })
        }).catch((err) => {
            console.log(err);
        });

        // Dota 2
        this.getDota2Matches().then((response) => {
            this.setState({
                dota2Matches: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getDota2Players().then((response) => {
            this.setState({
                dota2Players: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getDota2Teams().then((response) => {
            this.setState({
                dota2Teams: response
            })
        }).catch((err) => {
            console.log(err);
        });
        this.getDota2Tournaments().then((response) => {
            this.setState({
                dota2Tournaments: response
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    // CS:GO
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

    // Overwatch
    getOverwatchMatches = async () => {
        const overwatchMatches = await fetch("https://esports.glenndehaan.com/api/matches/overwatch", {
            method: "GET"
        });
        const overwatchMatchesJson = await overwatchMatches.json();
        return overwatchMatchesJson
    }
    getOverwatchPlayers = async () => {
        const overwatchPlayers = await fetch("https://esports.glenndehaan.com/api/players/overwatch", {
            method: "GET"
        });
        const overwatchPlayersJson = await overwatchPlayers.json();
        return overwatchPlayersJson
    }
    getOverwatchTeams = async () => {
        const overwatchTeams = await fetch("https://esports.glenndehaan.com/api/teams/overwatch", {
            method: "GET"
        });
        const overwatchTeamsJson = await overwatchTeams.json();
        return overwatchTeamsJson
    }
    getOverwatchTournaments = async () => {
        const overwatchTournaments = await fetch("https://esports.glenndehaan.com/api/matches/overwatch", {
            method: "GET"
        });
        const overwatchTournamentsJson = await overwatchTournaments.json();       
        let tournaments = {};
        for (let i = 0; i < overwatchTournamentsJson.matches.length; i++) {
            tournaments[overwatchTournamentsJson.matches[i].competition_label] = [];
        }
        return tournaments;
    }

    // Dota 2
    getDota2Matches = async () => {
        const dota2Matches = await fetch("https://esports.glenndehaan.com/api/matches/dota2", {
            method: "GET"
        });
        const dota2MatchesJson = await dota2Matches.json();
        return dota2MatchesJson
    }
    getDota2Players = async () => {
        const dota2Players = await fetch("https://esports.glenndehaan.com/api/players/dota2", {
            method: "GET"
        });
        const dota2PlayersJson = await dota2Players.json();
        return dota2PlayersJson
    }
    getDota2Teams = async () => {
        const dota2Teams = await fetch("https://esports.glenndehaan.com/api/teams/dota2", {
            method: "GET"
        });
        const dota2TeamsJson = await dota2Teams.json();
        return dota2TeamsJson
    }
    getDota2Tournaments = async () => {
        const dota2Tournaments = await fetch("https://esports.glenndehaan.com/api/matches/dota2", {
            method: "GET"
        });
        const dota2TournamentsJson = await dota2Tournaments.json();       
        let tournaments = {};
        for (let i = 0; i < dota2TournamentsJson.matches.length; i++) {
            tournaments[dota2TournamentsJson.matches[i].competition_label] = [];
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


                {/* CS:GO Routes */}
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
                <Route exact path="/games/csgo/teams/details/:key" render={(props) => {
                    return (
                    <div>
                        <CsgoTeamsDetails players={this.state.csgoPlayers} teams={this.state.csgoTeams} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/csgo/players" render={(props) => {
                    return (
                    <div>
                        <CsgoPlayers players={this.state.csgoPlayers} teams={this.state.csgoTeams} {...props} />
                    </div>
                    )
                }} />


                {/* Overwatch Routes */}
                <Route exact path="/games/overwatch" render={(props) => {
                    return (
                    <div>
                        <Overwatch {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/overwatch/tournaments" render={(props) => {
                    return (
                    <div>
                        <OverwatchTournaments tournaments={this.state.overwatchTournaments} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/overwatch/tournaments/details/:key" render={(props) => {
                    return (
                    <div>
                        <OverwatchTournamentsDetails teams={this.state.overwatchTeams} matches={this.state.overwatchMatches} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/overwatch/matches" render={(props) => {
                    return (
                    <div>
                        <OverwatchMatches matches={this.state.overwatchMatches} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/overwatch/teams" render={(props) => {
                    return (
                    <div>
                        <OverwatchTeams teams={this.state.overwatchTeams} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/overwatch/teams/details/:key" render={(props) => {
                    return (
                    <div>
                        <OverwatchTeamsDetails players={this.state.overwatchPlayers} teams={this.state.overwatchTeams} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/overwatch/players" render={(props) => {
                    return (
                    <div>
                        <OverwatchPlayers players={this.state.overwatchPlayers} teams={this.state.overwatchTeams} {...props} />
                    </div>
                    )
                }} />


                {/* Dota 2 Routes */}
                <Route exact path="/games/dota2" render={(props) => {
                    return (
                    <div>
                        <Dota2 {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/dota2/tournaments" render={(props) => {
                    return (
                    <div>
                        <Dota2Tournaments tournaments={this.state.dota2Tournaments} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/dota2/tournaments/details/:key" render={(props) => {
                    return (
                    <div>
                        <Dota2TournamentsDetails teams={this.state.dota2Teams} matches={this.state.dota2Matches} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/dota2/matches" render={(props) => {
                    return (
                    <div>
                        <Dota2Matches matches={this.state.dota2Matches} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/dota2/teams" render={(props) => {
                    return (
                    <div>
                        <Dota2Teams teams={this.state.dota2Teams} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/dota2/teams/details/:key" render={(props) => {
                    return (
                    <div>
                        <Dota2TeamsDetails players={this.state.dota2Players} teams={this.state.dota2Teams} {...props} />
                    </div>
                    )
                }} />
                <Route exact path="/games/dota2/players" render={(props) => {
                    return (
                    <div>
                        <Dota2Players players={this.state.dota2Players} teams={this.state.dota2Teams} {...props} />
                    </div>
                    )
                }} />
            </div>
        );
    };
};

export default MainContainer;