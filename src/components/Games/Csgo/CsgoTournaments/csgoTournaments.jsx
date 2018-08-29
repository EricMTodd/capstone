import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoTournaments extends Component {
    render() {
        console.log("this.props.tournaments:", this.props.tournaments);
        let tournaments = this.props.tournaments;
        let csgoTournamentsList = []
        for (let key in tournaments) {
            if (tournaments.hasOwnProperty(key)) {
                csgoTournamentsList.push(<Row><Col><h4 className="csgoTournamentsList" key={key} >{key}</h4></Col></Row>);
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        {csgoTournamentsList}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default CsgoTournaments;