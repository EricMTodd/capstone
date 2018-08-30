import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class OverwatchTournaments extends Component {
    render() {
        let tournaments = this.props.tournaments;
        let overwatchTournamentsList = []
        for (let key in tournaments) {
            if (tournaments.hasOwnProperty(key)) {
                overwatchTournamentsList.push(
                <Row key={key} >
                    <Col>
                        <h4>
                            <Link to={{ pathname: '/games/overwatch/tournaments/details/' + JSON.stringify({key}), state: { tournamentName: {key} } }} className="primaryText" >
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
                        <h1 className="primaryText" >Overwatch Tournaments List</h1>
                        <img className="logo" src="https://i.imgur.com/iAbXNxw.png" alt="overwatch"/>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {overwatchTournamentsList}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default OverwatchTournaments;