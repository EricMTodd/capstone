import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class CsgoTeams extends Component {
    render() {
        let teams = this.props.teams.teams
        let csgoTeamsList = [];
        if (teams === undefined) {
        } else {
            for (let i = 0; i < teams.length; i++) {
                if (teams[i].country === null) {
                    csgoTeamsList.push(
                            <Col key={teams[i].id} >
                                <Link to={{ pathname: '/games/csgo/teams/details/' + teams[i].id, state: { teamName: teams[i].full_name, teamId: teams[i].id } }} className="primaryText" >
                                    <h3 className="primaryText" >{teams[i].full_name}</h3>
                                </Link>
                                <h6 className="primaryText" >Independent</h6>
                                <br/>
                            </Col>
                    );
                } else {
                    csgoTeamsList.push(
                            <Col key={teams[i].id} >
                                <Link to={{ pathname: '/games/csgo/teams/details/' + teams[i].id, state: { teamName: teams[i].full_name, teamId: teams[i].id } }} className="primaryText" >
                                    <h3 className="primaryText" >{teams[i].full_name}</h3>
                                </Link>
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
                        <h1 className="primaryText" >Active CS:GO Teams</h1>
                        <img className="logo" src="https://i.imgur.com/ccC6yPx.png" alt="cs:go"/>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    {csgoTeamsList}
                    <br/>
                </Row>
            </Container>
        )
    }
}


export default CsgoTeams