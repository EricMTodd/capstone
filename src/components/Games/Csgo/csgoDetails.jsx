import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class CsgoDetails extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h1 className="primaryText" >Counter-Strike: Global Offensive</h1>
                        <img className="logo" src="https://i.imgur.com/ccC6yPx.png" alt="cs:go"/>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/csgo/tournaments" className="primaryText" >Tournaments</Link></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/csgo/teams" className="primaryText" >Teams</Link></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/csgo/players" className="primaryText" >Players</Link></h4>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}


export default CsgoDetails;