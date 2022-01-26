import React from 'react';
import { HeroSection } from './HeroSection';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home page'>
                <HeroSection />
            </div>
        );
    }
}