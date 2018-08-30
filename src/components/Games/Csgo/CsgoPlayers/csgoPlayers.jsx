import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoPlayers extends Component {
    render() {
        let players = this.props.players.players;
        let teams = this.props.teams.teams;
        let csgoPlayersList = [];
        if (players === undefined || teams === undefined) {
            console.log("Loading data...");
        } else {
            console.log("players:", players);
            console.log("teams:", teams);
            for (let i = 0; i < players.length; i++) {
                console.log("players[i]:", players[i]);
                let teamUrl = players[i].team_url;
                console.log("teamUrl:", teamUrl);
                let teamId = teamUrl.replace( /^\D+/g, '');
                console.log("teamId:", teamId);
                let teamName;
                for (let k = 0; k < teams.length; k++) {
                    if (teams[k].id === parseInt(teamId)) {
                        console.log("teams[k].id:", teams[k].id);
                        teamName = teams[k].full_name;
                        console.log("teamName:", teamName);
                    } else {
                    }
                }
                csgoPlayersList.push(
                    <Col key={players[i].id} >
                        <h2>"{players[i].in_game_name}"</h2>
                        <h4>{players[i].real_life_name}</h4>
                        <h6>Representing: {teamName}</h6>
                        <br/>
                    </Col>
                )
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>Active CS:GO Teams</h1>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    {csgoPlayersList}
                </Row>
            </Container>
        )
    }
}


export default CsgoPlayers