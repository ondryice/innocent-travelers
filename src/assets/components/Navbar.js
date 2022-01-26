import React from 'react';
import { ButtonGroup } from 'reactstrap';

export class Navbar extends React.Component {
    render() {
        
        return (
            <ButtonGroup className='navbar-container'>
                {this.props.children}
            </ButtonGroup>
        );
    }
}