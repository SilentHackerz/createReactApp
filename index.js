import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './component'
import ProfileList from './component';

default export class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            number: [1,2,3],
            selectedProfile: this.state.number[0]
        };
    }
    render(){
        return(
            <Profile profile={this.state.selectedProfile}/>
            <ProfileList
                number={this.state.number}
                onProfileSelect={selectedProfile => this.setState({selectedProfile}) }/>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));
