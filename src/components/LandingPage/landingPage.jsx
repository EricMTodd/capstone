import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Games from '../Games/games.jsx';



class LandingPage extends Component {
    render() {
        return (
            <Container className="landingPageContainer" >
                <Row>
                    <Col>
                        <div>
                            <h1 className="primaryText" >Welcome to fragtrak</h1>
                            <h4 className="primaryText" >fragtrak houses details of your favorite esports so you're never out of the loop.</h4>
                            <br/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Games />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};


export default LandingPage;