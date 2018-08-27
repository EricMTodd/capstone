import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class CsgoMatches extends Component {
    render() {
        const matches = this.props.matches.matches;
        if (matches === undefined) {
            console.log("matches: undefined");
        } else {
            for (let i = 0; i < matches.length; i++) {
                console.log("successfully grabbed matches.");
            }
        }
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