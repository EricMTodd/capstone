import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class OverwatchTeams extends Component {
    render() {
        let teams = this.props.teams.teams
        let overwatchTeamsList = [];
        if (teams === undefined) {
        } else {
            for (let i = 0; i < teams.length; i++) {
                if (teams[i].country === null) {
                    overwatchTeamsList.push(
                            <Col key={teams[i].id} >
                                <Link to={{ pathname: '/games/overwatch/teams/details/' + teams[i].id, state: { teamName: teams[i].full_name, teamId: teams[i].id } }} >
                                    <h3>{teams[i].full_name}</h3>
                                </Link>
                                <h6>Independent</h6>
                                <br/>
                            </Col>
                    );
                } else {
                    overwatchTeamsList.push(
                            <Col key={teams[i].id} >
                                <Link to={{ pathname: '/games/overwatch/teams/details/' + teams[i].id, state: { teamName: teams[i].full_name, teamId: teams[i].id } }} >
                                    <h3>{teams[i].full_name}</h3>
                                </Link>
                                <h6>Representing: {teams[i].country}</h6>
                                <br/>
                            </Col>
                    );
                }
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>Active Overwatch Teams</h1>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    {overwatchTeamsList}
                    <br/>
                </Row>
            </Container>
        )
    }
}


export default OverwatchTeams