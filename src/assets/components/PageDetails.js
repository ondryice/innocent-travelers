/*
USE THE FOLLOWING FORMAT when editing the contents of the navbar
if the `render` or `title` fields are missing, the navbar may not function as expected
```
_pageName_: {
    render: _renderFunctionHandle_,
    title: _prettyTitle_,
    endpoint: _urlEndpoint_,
    text: { // navbar button texts; optional, will default to `title`
        short: _shortTextForSmallButton_,
        long: _longTextForLargeButton_ // optional, defaults to `title`
    }
}
```
*/

import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home"

export const pages = [
    {   id: 'home',
        render: function (props) { return (<Home />); },
        title: 'Home',
        text: {
            short: '🏠'
        }
    },
    {   id: 'about',
        render: function (props) { return (<About />); },
        title: 'About',
        text: {
            short: '🙋'
        }
    },
    {   id: 'contact',
        render: function (props) { return (<Contact />); },
        title: 'Contact Us',
        text: {
            short: '📞',
            long: 'Contact'
        }
    }
];

export const pageRender = {
    'home': (props) => { return (<Home />); },
    'about': (props) => { return (<About />); },
    'contact': (props) => { return (<Contact />); }
};
