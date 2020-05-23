// Import React and ReactDOM libraries
// ES 2015 module system
import React from 'react';
import ReactDOM from 'react-dom'

// Common JS module system
// const React = requires('react')

// function getButtonText(){
//     return "Click on me!"
// };

// Create a React Component
const App = function(){
    const buttonText = "Click Me!"
    return(
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white'}}>{buttonText}</button> 
        </div>
      )
};

// ES 2015 without function keyword
// const App = () => {
// return <div>Hi there</div>
// };


// Take a React Component ans show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)