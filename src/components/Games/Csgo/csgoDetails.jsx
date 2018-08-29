import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class CsgoDetails extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>This is the CsgoDetails page!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/csgo/tournaments" >Tournaments</Link></h4>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <h4><Link to="/games/csgo/matches" >Matches</Link></h4>
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                        <h4><Link to="/games/csgo/teams" >Teams</Link></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/csgo/players" >Players</Link></h4>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}


export default CsgoDetails;