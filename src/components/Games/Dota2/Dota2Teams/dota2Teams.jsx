import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Dota2Teams extends Component {
    render() {
        let teams = this.props.teams.teams
        let dota2TeamsList = [];
        if (teams === undefined) {
        } else {
            for (let i = 0; i < teams.length; i++) {
                if (teams[i].country === null) {
                    dota2TeamsList.push(
                            <Col key={teams[i].id} >
                                <Link to={{ pathname: '/games/dota2/teams/details/' + teams[i].id, state: { teamName: teams[i].full_name, teamId: teams[i].id } }} >
                                    <h3>{teams[i].full_name}</h3>
                                </Link>
                                <h6>Independent</h6>
                                <br/>
                            </Col>
                    );
                } else {
                    dota2TeamsList.push(
                            <Col key={teams[i].id} >
                                <Link to={{ pathname: '/games/dota2/teams/details/' + teams[i].id, state: { teamName: teams[i].full_name, teamId: teams[i].id } }} >
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
                        <h1>Active CS:GO Teams</h1>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    {dota2TeamsList}
                    <br/>
                </Row>
            </Container>
        )
    }
}


export default Dota2Teams