import React from 'react';
import { pageRender, pages } from './PageDetails';

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'home'
        };

        this.renderNavbar = this.renderNavbar.bind(this);
        this.renderPageContents = this.renderPageContents.bind(this);
    }

    render() {
        return (
            <div className='page'>
                {this.renderNavbar()}
                {this.renderPageContents()}
                {this.renderFooter}
            </div>
        );
    }

    renderNavbar() {
        let content = pages[this.state.content];
        return (
            <div className='navbar'>
                <p>todo: navbar; selected page: "{content.title}"</p>
            </div>
        );
    }

    renderPageContents() {
        return pageRender(this.state.content, {});
    }

    renderFooter() {
        return (
            <div className='footer'>
                <p>todo: footer</p>
            </div>
        );
    }
}