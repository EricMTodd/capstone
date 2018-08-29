import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoMatches extends Component {
    render() {
        const matches = this.props.matches.matches;
        console.log("matches:", matches);
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>This is the csgoMatches Container!</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default CsgoMatches