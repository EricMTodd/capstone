import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Dota2TeamsDetials extends Component {
    render() {
        const teamName = this.props.location.state.teamName;
        const teamId = this.props.location.state.teamId;
        const players = this.props.players.players;
        const teams = this.props.teams.teams;
        let playersList = [];
        if (players === undefined || teams === undefined) {
        } else {
            for (let i = 0; i < players.length; i ++) {
                let playerTeamUrl = players[i].team_url.slice(6);
                let playerTeamId =  playerTeamUrl.replace( /^\D+/g, '');
                if (parseInt(playerTeamId, 10) === teamId) {
                    playersList.push(
                        <Col key={players[i].id} >
                            <h2 className="primaryText" >"{players[i].in_game_name}"</h2>
                            <h6 className="primaryText" >{players[i].real_life_name}</h6>
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
                        <h1 className="primaryText" >{teamName}</h1>
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


export default Dota2TeamsDetials;