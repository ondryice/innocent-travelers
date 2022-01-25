# Getting Started
For those who have no experience with web development using React, this tutorial will help you get started.

### **Details**
This tutorial is intended for
- Windows 10 users (If you are using Linux, chances are you know how to clone a repo)
- Using VS Code
- Using Docker

# Setup: The Container
First, install Docker Desktop and Microsoft Visual Studio Code, if you do not already have them installed.

Pull the Docker image `node`, as it is the dev environment used for this website:
```
docker pull node
```

Run this image with Docker Desktop to start a new container, and name it whatever you like.
Open the new container with VSCode; you will need to install the VSCode extension pack `Remote Development` by Microsoft.
Opening the container may take a few minutes.

# Setup: Cloning the Repository
Once the container is opened, open the terminal in VSCode with `` ctrl+` `` (the backtick, `` ` ``, on most keyboards is located to the left of the `1 !` key).
Your terminal should have a prompt like `root@ba69...:~# `.

Clone this repository with the command
```
git clone "https://github.com/ondryice/innocent-travelers.git"
```

Done!
You are now ready to develop on your own computer.

# React: Getting Started
So, you have the repo...
*Now what?*
Get started by reading the README docs in the various `src/` directories.

### **Adding new components**
If you want to add a new component, first read the README in `src/assets/components`.
Then, you can add a javascript file where it belongs, and begin rendering it in the `Page` components.

### **Template for new components**
```
ComponentName.js:

import React from 'react';

export class ComponentName extends React.Component {
    constructor(props) {
        super(props);

        // the state object: this object contains the rendering properties of the component
        // whenever state is changed (via `this.setState({attr: newVal})`), the component is re-rendered
        this.state = {
            attribute: value,
            attr2: 'this is a string',
            attr3: "and so is this"
        };

        this.dataPoints = [
            "Datum 1",
            "Datum 2",
            "Datum 3"
        ];
    }

    // the render method returns a single JSX element
    // typically, this should be done with a "container" element, like `div`, `span`, or `Container` from reactstrap
    render() {
        return (
            <div className='CSS class name'>
                {/* put your JSX content in here */}
                {/* often helpful to use helper render methods, like the following */}
                {this.renderData()}
            </div>
        );
    }

    renderData() {
        return this.dataPoints.map((datum, index)=> {
            return (
                <p key={'datum-' + index}>
                    {datum}
                </p>
            );
        });
    }
}
```
