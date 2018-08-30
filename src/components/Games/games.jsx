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
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className="logo" src="https://i.imgur.com/ccC6yPx.png" alt="cs:go"/>
                            <h4><Link to="/games/csgo" className="primaryText" >CS:GO</Link></h4>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className="logo" src="https://i.imgur.com/iAbXNxw.png" alt="overwatch"/>
                            <h4><Link to="/games/overwatch" className="primaryText" >Overwatch</Link></h4>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className="logo" src="https://i.imgur.com/r5R2OeB.png" alt="dota2"/>
                            <h4><Link to="/games/dota2" className="primaryText" >DotA 2</Link></h4>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};


export default Games;