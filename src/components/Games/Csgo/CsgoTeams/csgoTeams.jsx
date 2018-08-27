import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoTeams extends Component {
    render() {
        const teams = this.props.teams.teams        
        if (teams === undefined) {
            console.log("teams: undefined")
        } else {
            for (let i = 0; i < teams.length; i++) {
                console.log("successfully grabbed teams.")
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>This is the csgoTeams container!</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default CsgoTeams