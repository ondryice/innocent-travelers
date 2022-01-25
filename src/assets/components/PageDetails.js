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

export const pages = {
    home: {
        render: function (props) { return <Home /> },
        title: 'Home',
        endpoint: '',
        text: {
            short: '🏠'
        }
    },
    about: {
        render: function (props) { return <About /> },
        title: 'About',
        endpoint: 'about',
        text: {
            short: '🙋'
        }
    },
    contact: {
        render: function (props) { return <Contact /> },
        title: 'Contact Us',
        endpoint: 'contact',
        text: {
            short: '📞',
            long: 'Contact'
        }
    }
};

// DO NOT EDIT
export function pageRender(pageName, props) { return pages[pageName]?.render(props); }
export function pageTitle(pageName) { return pages[pageName]?.title || '?'; }
export function pageEndpoint(pageName) { return pages[pageName]?.endpoint || ''; }
export function pageShortText(pageName) { return pages[pageName]?.text?.short || pages[pageName]?.text?.long || pages[pageName]?.title || '?'; }
export function pageLongText(pageName) { return pages[pageName]?.text?.long || pages[pageName]?.title || '?'; }
