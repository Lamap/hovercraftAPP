import * as React from 'react';
import './App.css';
import Bela from './components/bela';
import TagControl from './components/tagController/tagController';
import ImageList from './components/imageList/imageList';

const logo = require('./minion.svg');

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            tags: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5559/images')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    items: result.items
                });
                console.log(this.state);
            });
        fetch('http://localhost:5559/tags')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    tags: result
                });
                console.log(this.state);
            });
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to hovercraft</h1>
            </header>
            <Bela name="jenő" />
              <TagControl avalaibleTags={['bela', 'jeno']} selectedTags={['jojo', 'jaja']}/>
              <ImageList images={this.state.items} tags={this.state.tags}/>
          </div>
        );
    }
}

export default App;
