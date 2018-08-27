import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';



class LandingPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Welcome to fragtrak</h1>
                            <p>fragtrak tracks all the details of your favorite esports in real time, so you're never out of the loop.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>This is a list of games. You can click on any one of them to see what tournaments are available.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Link to="/games" >GamesList</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>This is a list of tournaments. You can click on any one of them to see what matches are available.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};


export default LandingPage;