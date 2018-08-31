import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Dota2TournamentsDetails extends Component {
    render() {
        const tournamentName = this.props.location.state.tournamentName.key;
        const matches = this.props.matches.matches;
        const teams = this.props.teams.teams;
        let dota2MatchesList = [];
        if (matches === undefined || teams === undefined) {
        } else {
            for (let i = 0; i < matches.length; i++) {
                if (matches[i].competition_label === tournamentName) {
                    let team1Url = matches[i].team1_url.slice(6);
                    let team1Id = team1Url.replace( /^\D+/g, '');
                    let team1Name;
                    let team2Url = matches[i].team2_url.slice(6);
                    let team2Id = team2Url.replace( /^\D+/g, '');
                    let team2Name;
                    let victorUrl;
                    let victorName;
                    if (matches[i].winning_team_url === null) {
                        victorName = "No data provided."
                    } else {
                        victorUrl = matches[i].winning_team_url.slice(6);
                    }                
                    for (let k = 0; k < teams.length; k++) {
                        if (teams[k].id === parseInt(team1Id, 10)) {
                            team1Name = teams[k].full_name;
                            if (victorUrl === team1Url) {
                                victorName = team1Name;
                            } else {
                                victorName = "No data provided."
                            }
                        } else if (teams[k].id === parseInt(team2Id, 10)) {
                            team2Name = teams[k].full_name;
                            if (victorUrl === team2Url) {
                                victorName = team2Name;
                            } else {
                                victorName = "No data provided."
                            }
                        } else  {
                        }
                    }
                    dota2MatchesList.push(
                        <Row key={matches[i].id} >
                            <Col>
                                <h2 className="primaryText" >{team1Name} vs. {team2Name}</h2>
                                <h2 className="primaryText" >Victor: {victorName}</h2>
                                <br/>
                                <br/>
                            </Col>
                        </Row>      
                    );
                }
            }
        }       
        return(
            <Container>
                <Row>
                    <Col>
                        <h1 className="primaryText" >{tournamentName}</h1>
                        <img className="logo" src="https://i.imgur.com/r5R2OeB.png" alt="dota2"/>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                    {dota2MatchesList}
            </Container>
        )
    }
};


export default Dota2TournamentsDetails;