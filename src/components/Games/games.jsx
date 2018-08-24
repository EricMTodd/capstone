import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Games extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>This is the games container!</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};


export default Games;