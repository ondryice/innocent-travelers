import React from 'react';
import { Container, Row } from 'reactstrap';

export class Navbar extends React.Component {
    render() {
        
        return (
            <Container className='navbar'>
                <Row>
                    {this.props.children}
                </Row>
            </Container>
        );
    }
}