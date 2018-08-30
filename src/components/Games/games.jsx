import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class Games extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>Select a game to see more</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/games/csgo" >
                                <h4>CS:GO</h4>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/games/overwatch" >
                                <h4>Overwatch</h4>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/games/dota2" >
                                <h4>DotA 2</h4>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};


export default Games;