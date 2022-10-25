



import React from 'react';
import logo from './logo.svg';
import './App.css';



var buttonShort = document.createElement("Project");
buttonShort.innerHTML = "Project Name 1";

var body = document.getElementsByTagName("body")[0];

//
var button2 = document.createElement("ProjectComp1")
button2.innerHTML = "Project Name 2";
button2.style.width = '200px'; 
button2.style.height = '200px'; 
button2.style.background = 'yellow';
button2.style.color = 'black'; 
button2.style.fontSize = '20px'; 

var buttonLogin = document.createElement("Login");
buttonLogin.innerHTML = "Login";
buttonLogin.style.width = '200px';
buttonLogin.style.height = '200px'; 
buttonLogin.style.background = 'red'; 
buttonLogin.style.color = 'white';
buttonLogin.style.fontSize = '20px'; 
//

buttonShort.style.width = '200px'; 
buttonShort.style.height = '2000px'; 
buttonShort.style.background = 'teal'; 
buttonShort.style.color = 'white'; 
buttonShort.style.fontSize = '20px'; 

body.appendChild(buttonShort);
body.appendChild(button2);
body.appendChild(buttonLogin);

buttonLogin.addEventListener("click", function () {
    var newWindow = window.open();
    newWindow.document.write("You are not a proper user...");
    newWindow.focus();
});

buttonShort.addEventListener("click", function () {
    var newWindow = window.open();
    newWindow.document.write("Password not set yet");
    newWindow.focus();
});


button2.addEventListener("click", function () {
    var newWindow = window.open();
    newWindow.document.write("Button2!");
    newWindow.focus();
});
///////////////////////////button will be one component being resued multiple times

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <p>These are your projects.</p>
            </div>
        )
    }
}


//////////////////////////////////


class Exit extends React.Component {
    continue = () => {
        alert('Continue')
        this.props.handleLogin(true)
    }

    exit = () => {
        alert('Goodbye!')
        this.props.handleLogin(false)
    }

    render() {
        return (
            <div>
                <h1>Welcome to the page</h1>
                <p>What do you want to do today?</p>
                <button onClick={this.exit}>Exit</button>
                <button onClick={this.continue}>Continue</button>
            </div>
        )
    }
}

////////////////////////////////////////

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { letskeepgoing: false }
    }

    start = (continuer) => {
        this.setState({
            letskeepgoing: continuer
        })
    }

    render() {
        if (this.state.letskeepgoing) {
            return (<Projects />)
        }
        else {
            return (<Exit start={this.start} />)
        }
    }
}


class App2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { letskeepgoing: false }
    }

    start = (continuer) => {
        this.setState({
            letskeepgoing: continuer
        })
    }

    render() {
        if (this.state.letskeepgoing == false) {
            return (<Exit start={this.start} />)
        }
    }
}

export default App;


