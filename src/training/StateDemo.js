import React from 'react';
import NavigationPage from "./NavigationPage";

class StateDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            content : ""
        }
    }

    setUsername(e) {
        this.setState( {
            username : e.target.value
        })
    }

    componentDidMount() {
        fetch("stateDemoContent")
        .then(r => r.text())
        .then(text => {
            console.log('text decoded:', text);
            this.setState({
                content : text
            })
        });
    }

    render() {
        return(
            <div>
            <NavigationPage project="Training"></NavigationPage>
            <h4>Welcome {this.state.username}</h4>
            <label>Enter Your Name: </label>
            <input type="text" id="name" onChange={(e) => this.setUsername(e)}></input>
            
            <div className="text-left">
            <pre className="font-weight-bold"><code>{this.state.content}</code></pre>
            </div>

            </div>
        )
    }
}

export default StateDemo;
