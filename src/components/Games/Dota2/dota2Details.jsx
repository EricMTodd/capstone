import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Dota2Details extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>Dota 2</h1>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/dota2/tournaments" >Tournaments</Link></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/dota2/teams" >Teams</Link></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/dota2/players" >Players</Link></h4>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}


export default Dota2Details;