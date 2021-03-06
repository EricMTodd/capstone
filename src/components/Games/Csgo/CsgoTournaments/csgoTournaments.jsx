import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class CsgoTournaments extends Component {
    render() {
        let tournaments = this.props.tournaments;
        let csgoTournamentsList = []
        for (let key in tournaments) {
            if (tournaments.hasOwnProperty(key)) {
                csgoTournamentsList.push(
                <Row key={key} >
                    <Col>
                        <h4>
                            <Link to={{ pathname: '/games/csgo/tournaments/details/' + JSON.stringify({key}), state: { tournamentName: {key} } }} className="primaryText" >
                                {key}
                            </Link>
                        </h4>
                    </Col>
                </Row>
            );
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        <h1 className="primaryText" >CS:GO Tournaments List</h1>
                        <img className="logo" src="https://i.imgur.com/ccC6yPx.png" alt="cs:go"/>
                        <br/>
                        <br/>
                    </Col>
                </Row>
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