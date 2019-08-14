import React from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import List from './components/List';


class App extends React.Component {

    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        return (
            <div className="App">
              <h1>Hello, React!</h1>
                <Form handleSubmit={this.handleSubmit} />
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <h6>Test List</h6>
                <List/>
            </div>
        )
    }
}

export default App;
