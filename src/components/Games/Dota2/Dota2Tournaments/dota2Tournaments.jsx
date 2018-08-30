import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Dota2Tournaments extends Component {
    render() {
        let tournaments = this.props.tournaments;
        let dota2TournamentsList = []
        for (let key in tournaments) {
            if (tournaments.hasOwnProperty(key)) {
                dota2TournamentsList.push(
                <Row key={key} >
                    <Col>
                        <h4>
                            <Link to={{ pathname: '/games/dota2/tournaments/details/' + JSON.stringify({key}), state: { tournamentName: {key} } }} >
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
                        <h1>CS:GO Tournaments List</h1>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {dota2TournamentsList}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Dota2Tournaments;