import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {lat: null, errorMessage: ''};
    // };
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
             (error) =>  this.setState({ errorMessage: error.message})
        );
    }

    componentDidUpdate() {
        console.log("Updated")
    }

    render(){
        if (this.state.lat && !this.state.errorMessage){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
                );

        }
        if (!this.state.lat && this.state.errorMessage){
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
                );
        }
        return (
            <div>
                Loading....
            </div>
        )

}
}


ReactDOM.render(<App />, document.querySelector('#root'))
