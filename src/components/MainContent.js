import React from 'react';

function MainContent() {
    return (
        <main className="main-content">
            <h1>A Simple Component</h1>
            <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
        </main>
    );
}

export default MainContent;