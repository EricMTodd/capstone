import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Dota2Details extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h1 className="primaryText" >Dota 2</h1>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/dota2/tournaments" className="primaryText" >Tournaments</Link></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/dota2/teams" className="primaryText" >Teams</Link></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/dota2/players" className="primaryText" >Players</Link></h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Dota2Details;