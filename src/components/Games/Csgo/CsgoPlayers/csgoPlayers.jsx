import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoPlayers extends Component {
    render() {
        const players = this.props.players.players
        if (players === undefined) {
            console.log("players: undefined")
        } else {
            for (let i = 0; i < players.length; i++) {
                console.log("successfully grabbed players.")
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>This is the csgoPlayers container!</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default CsgoPlayers