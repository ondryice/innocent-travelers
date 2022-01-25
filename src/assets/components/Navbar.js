import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { pages } from './PageDetails';


export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected || pages.home
        };

        this.onSelect = this.props.onSelect || null;
    }

    render() {
        return (
            <Container className='navbar-container'>
                <Row className='navbar'>
                    {this.renderButtons()}
                </Row>
            </Container>
        );
    }

    renderButtons() {
        return pages.map((page, index) => {
            let className = (page === this.page.selected) ?
                'navbar-btn-selected' : 'navbar-btn';
            let onClick = (page === this.page.selected) ?
                null : ()=> this.select(page);
            return (
                <Col key={'navbar-item-' + index} className='navbar-item'>
                    <Button className={className} onClick={onClick}>
                        {page.text?.short || page.text?.long || page.title || '?'}
                    </Button>
                </Col>
            );
        });
    }

    select(page) {
        this.props.onSelect(page);
    }
}