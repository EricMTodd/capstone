import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class OverwatchDetails extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h1 className="primaryText" >Overwatch</h1>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/overwatch/tournaments" className="primaryText" >Tournaments</Link></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><Link to="/games/overwatch/teams" className="primaryText" >Teams</Link></h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default OverwatchDetails;