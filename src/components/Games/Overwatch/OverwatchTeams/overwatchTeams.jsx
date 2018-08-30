import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


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
                                <h3 className="primaryText" >{teams[i].full_name}</h3>
                                <h6 className="primaryText" >Independent</h6>
                                <br/>
                            </Col>
                    );
                } else {
                    overwatchTeamsList.push(
                            <Col key={teams[i].id} >
                                <h3 className="primaryText" >{teams[i].full_name}</h3>
                                <h6 className="primaryText" >Representing: {teams[i].country}</h6>
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
                        <h1 className="primaryText" >Active Overwatch Teams</h1>
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