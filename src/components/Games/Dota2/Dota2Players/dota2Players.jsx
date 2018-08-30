import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Dota2Players extends Component {
    render() {
        let players = this.props.players.players;
        let teams = this.props.teams.teams;
        let dota2PlayersList = [];
        if (players === undefined || teams === undefined) {
            console.log("Loading data...");
        } else {
            for (let i = 0; i < players.length; i++) {
                let teamUrl = players[i].team_url.slice(6);
                let teamId = teamUrl.replace( /^\D+/g, '');
                let teamName;
                for (let k = 0; k < teams.length; k++) {
                    if (teams[k].id === parseInt(teamId, 10)) {
                        teamName = teams[k].full_name;
                    } else {
                    }
                }
                dota2PlayersList.push(
                    <Col key={players[i].id} >
                        <h2 className="primaryText" >"{players[i].in_game_name}"</h2>
                        <h4 className="primaryText" >{players[i].real_life_name}</h4>
                        <h6 className="primaryText" >Team: {teamName}</h6>
                        <br/>
                    </Col>
                )
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        <h1 className="primaryText" >Active Dota 2 Players</h1>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    {dota2PlayersList}
                </Row>
            </Container>
        )
    }
}


export default Dota2Players