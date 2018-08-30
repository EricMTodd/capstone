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
                            <h1 className="primaryText" >Select a game to see more</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4><Link to="/games/csgo" className="primaryText" >CS:GO</Link></h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4><Link to="/games/overwatch" className="primaryText" >Overwatch</Link></h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4><Link to="/games/dota2" className="primaryText" >DotA 2</Link></h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};


export default Games;