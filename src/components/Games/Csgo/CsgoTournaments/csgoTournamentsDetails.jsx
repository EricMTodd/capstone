import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoTournamentsDetails extends Component {
    render() {
        const tournamentName = this.props.location.state.tournamentName.key;
        const matches = this.props.matches.matches;
        let matchDetails = {};
        let csgoMatchesList = [];
        if (matches === undefined) {
            console.log("matches: undefined")
        } else {
            for (let i = 0; i < matches.length; i++) {
                if (matches[i].competition_label === tournamentName) {
                    csgoMatchesList.push(
                    <Row>
                        <Col>
                            <h4 className="csgoTournamentMatchesList" key={matches[i].id} >{matches[i].id}</h4>
                            <h5>{matches[i].team1_url}</h5>
                            <h5>{matches[i].team2_url}</h5>
                        </Col>
                    </Row>
                );
                }
            }
            console.log("csgoMatchesList:", csgoMatchesList);
        }       
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>{tournamentName}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {csgoMatchesList}
                    </Col>
                </Row>
            </Container>
        )
    }
};


export default CsgoTournamentsDetails;