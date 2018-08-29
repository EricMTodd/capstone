import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class CsgoTournaments extends Component {
    render() {
        console.log("this.props.tournaments:", this.props.tournaments);
        let tournaments = this.props.tournaments;
        let csgoTournamentsList = []
        for (let key in tournaments) {
            if (tournaments.hasOwnProperty(key)) {
                csgoTournamentsList.push(<Row><Col><h4><Link to={{ pathname: '/games/csgo/tournaments/details/' + JSON.stringify({key}), state: { tournamentName: {key} } }} className="csgoTournamentsList" >{key}</Link></h4></Col></Row>);
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