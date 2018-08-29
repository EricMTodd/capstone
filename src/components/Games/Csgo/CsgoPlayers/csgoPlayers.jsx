import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoPlayers extends Component {
    render() {
        let players = this.props.players.players
        let csgoPlayersList = []
        if (players === undefined) {
            console.log("players: undefined")
        } else {
            for (let i = 0; i < players.length; i++) {
                csgoPlayersList.push(<Row><Col><h4 className="csgoPlayersList" key={players[i].in_game_name} >{players[i].in_game_name}</h4></Col></Row>);
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        {csgoPlayersList}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default CsgoPlayers