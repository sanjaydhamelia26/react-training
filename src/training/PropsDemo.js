import React from 'react';
import NavigationPage from "./NavigationPage";


class PropsDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content : ""
        }
    }

    componentDidMount() {
        fetch("propsContent")
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
            <label>{this.props.value}</label>
            <div className="text-left">
            <pre className="font-weight-bold"><code>{this.state.content}</code></pre>
            </div>
            </div>
        );
    }
}

export default PropsDemo;