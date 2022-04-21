import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Mem battle
                    </p>
                </header>
                <main>
                </main>
            </div>
        );
    }
}

export default App;
