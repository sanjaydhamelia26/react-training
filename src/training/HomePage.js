import React from "react";
import NavigationPage from "./NavigationPage";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div>
                <NavigationPage project="Training"></NavigationPage>
                <ol className="text-left mt-4">
                    <h4><li className="text-dark font-weight-bold">Introduction to ReactJS</li></h4>
                    <h4><li className="text-dark font-weight-bold">Class vs Functional Component</li></h4>
                    <h4><li><Link to="/props-demo" className="text-dark font-weight-bold">Props in ReactJS</Link></li></h4>
                    <h4><li><Link to="/state-demo" className="text-dark font-weight-bold">State in React JS</Link></li></h4>
                    <h4><li><Link to="/lifecycle-demo" className="text-dark font-weight-bold">Life Cycle of React Component</Link></li></h4>
                    <h4><li className="text-dark font-weight-bold">React Router Overview</li></h4>
                    <h4><li className="text-dark font-weight-bold">React Redux Overview</li></h4>
                    <h4><li className="text-dark font-weight-bold">Demo of ReactJS Based Web Application</li></h4>
                    <h4><li className="text-dark font-weight-bold">Q&A</li></h4>
                </ol>
            </div>
        );
    }
    
}

export default HomePage;