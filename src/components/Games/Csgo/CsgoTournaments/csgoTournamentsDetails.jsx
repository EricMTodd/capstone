import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoTournamentsDetails extends Component {
    render() {
        const tournamentName = this.props.location.state.tournamentName.key;
        const matches = this.props.matches.matches;
        const teams = this.props.teams.teams;
        let csgoMatchesList = [];
        if (matches === undefined || teams === undefined) {
        } else {
            for (let i = 0; i < matches.length; i++) {
                if (matches[i].competition_label === tournamentName) {
                    let team1Url = matches[i].team1_url;
                    let team1Id = team1Url.replace( /^\D+/g, '');
                    let team2Url = matches[i].team2_url;
                    let team2Id = team2Url.replace( /^\D+/g, '');
                    let victorUrl = matches[i].winning_team_url;
                    let team1Name;
                    let team2Name;
                    let victorName;
                    for (let k = 0; k < teams.length; k++) {
                        if (teams[k].id === parseInt(team1Id, 10)) {
                            team1Name = teams[k].full_name;
                            if (victorUrl === team1Url) {
                                victorName = team1Name;
                            } else {
                            }
                        } else if (teams[k].id === parseInt(team2Id, 10)) {
                            team2Name = teams[k].full_name;
                            if (victorUrl === team2Url) {
                                victorName = team2Name;
                            } else {
                            }
                        } else  {

                        }
                    }
                    csgoMatchesList.push(
                            <Col key={matches[i].id} >
                                <h4>{team1Name} vs. {team2Name}</h4>
                                <h4>Victor: {victorName}</h4>
                                <br/>
                            </Col>
                    );
                }
            }
        }       
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>{tournamentName}</h1>
                    </Col>
                </Row>
                <Row>
                        {csgoMatchesList}
                </Row>
            </Container>
        )
    }
};


export default CsgoTournamentsDetails;