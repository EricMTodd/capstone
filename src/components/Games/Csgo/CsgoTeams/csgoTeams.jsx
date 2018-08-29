import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoTeams extends Component {
    render() {
        let teams = this.props.teams.teams
        let csgoTeamsList = []    
        if (teams === undefined) {
            console.log("teams: undefined")
        } else {
            for (let i = 0; i < teams.length; i++) {
                csgoTeamsList.push(<Row><Col><h4 className="csgoTeamsList" key={teams[i].full_name} >{teams[i].full_name}</h4></Col></Row>);
            }
        }
        return(
            <Container>
                <Row>
                    <Col>
                        {csgoTeamsList}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default CsgoTeams