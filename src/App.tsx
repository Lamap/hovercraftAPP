import * as React from 'react';
import './App.css';
import Bela from './components/bela';
import ImageList from './components/imageList/imageList';

const logo = require('./minion.svg');
const apiBaseUrl: string = 'http://localhost:5558';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            tags: []
        };
    }

    componentDidMount() {
        fetch(apiBaseUrl + '/images')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    items: result.items
                });
                console.log(this.state);
            });
        fetch(apiBaseUrl + '/tags')
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
            <ImageList images={this.state.items} tags={this.state.tags}/>
          </div>
        );
    }
}

export default App;
