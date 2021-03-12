import React from "react";
import { NavLink } from 'react-router-dom';

class NavigationPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <NavLink className="navbar-brand d-flex flex-column text-center" to="/">
                    <img src="logo.png" className="mx-auto mb-1" style={{width:'40px'}}></img>
                    <small style={{"fontSize":"10px", color:"rgba(255,255,255,.8)"}}>{this.props.project}</small>
                 </NavLink>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav mr-auto">
                 <li className="nav-item">
                     <NavLink activeClassName="active" className="navbar__link nav-link" to="/props-demo">Props Demo</NavLink>
                 </li>
                 <li className="nav-item">
                     <NavLink activeClassName="active" className="navbar__link nav-link" to="/state-demo">State Demo</NavLink>
                 </li>
                 <li className="nav-item">
                     <NavLink activeClassName="active" className="navbar__link nav-link" to="/lifecycle-demo">Life Cycle Demo</NavLink>
                 </li>
                 </ul>
                 </div>
             </nav>
            // <>
            // <Navbar bg="dark" variant="dark">
            //     <Navbar.Brand href="/">Navbar</Navbar.Brand>
            //     <Nav className="mr-auto">
            //         <Nav.Link href="/props-demo">Props Demo</Nav.Link>
            //         <Nav.Link href="/state-demo">State Demo</Nav.Link>
            //         <Nav.Link href="/lifecycle-demo">Life Cycle Demo</Nav.Link>
            //     </Nav>
            // </Navbar>
            // </>
        );
    }
    
}

export default NavigationPage;