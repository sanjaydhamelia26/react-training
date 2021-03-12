import React from "react";
import { NavLink } from 'react-router-dom';
import NavigationPage from "./NavigationPage";

class FullReload extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
             <div>
                 <NavigationPage project="Training"></NavigationPage>
                 <p className="text-center mt-5">

                    Observe the full page reload when clicked.....!
                    <br></br><br></br>
                    Beware, React must be used to provide reactive feature....!
                    <br></br><br></br>
                    Use feature of React library don't just convert the HTML to JSX and put it in render Method...!
                    <br></br><br></br>
                    For Example,
                    User Link tag of library react-router-dom, instead of anchor tag with href...!
                 </p>
             </div>
        );
    }
    
}

export default FullReload;