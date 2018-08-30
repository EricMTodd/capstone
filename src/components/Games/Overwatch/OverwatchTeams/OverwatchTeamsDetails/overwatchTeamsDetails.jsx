import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class OverwatchTeamsDetials extends Component {
    render() {
        const teamName = this.props.location.state.teamName;
        const teamId = this.props.location.state.teamId;
        const players = this.props.players.players;
        const teams = this.props.teams.teams;
        let playersList = [];
        if (players === undefined || teams === undefined) {
        } else {
            for (let i = 0; i < players.length; i ++) {
                let playerTeamUrl = players[i].team_url;
                let playerTeamId =  playerTeamUrl.replace( /^\D+/g, '');
                if (parseInt(playerTeamId, 10) === teamId) {
                    playersList.push(
                        <Col key={players[i].id} >
                            <h2>"{players[i].in_game_name}"</h2>
                            <h6>{players[i].real_life_name}</h6>
                        </Col>
                    )
                } else {
                }
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>{teamName}</h1>
                        <img className="logo" src="https://i.imgur.com/iAbXNxw.png" alt="overwatch"/>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    {playersList}
                </Row>
            </Container>  
        )
    }
}


export default OverwatchTeamsDetials;