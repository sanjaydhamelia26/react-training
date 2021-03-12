import React from 'react';
import Loader from 'react-loader-spinner'
import NavigationPage from "./NavigationPage";

class LifeCycle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : new Array()
        }
    }

    componentDidMount() {

        let self = this;
        setTimeout(function () {
            fetch("todo.json")
            .then(response => {
                return response.json()
            })
            .then(response => {
                self.setState({
                    todos : response
                })
            });
        }, 3000);  

        fetch("lifeCycleContent")
        .then(r => r.text())
        .then(text => {
            console.log('text decoded:', text);
            this.setState({
                content : text
            })
        });
    }

    componentDidUpdate() {
        //alert("I am componentDidUpdate")
    }

    componentWillUnmount() {
        //alert("I am componentWillUnmount")
    }

    render() {
        return(
            <div>
            <NavigationPage project="Training"></NavigationPage>
               <table style={{width: '30%'}} className="table">
                   <thead>
                    <tr className="text-left">
                        <th>Count</th>
                        <th>To Do</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    {this.state.todos.length > 0 ? this.state.todos.map((data,index)=>(
                        <tbody>
                    <tr className="text-left">
                        <td>{index+1}</td>
                        <td>{data.todo}</td>
                        <td>{data.status}</td>
                    </tr>
                    </tbody>
                    )) :  
                    <Loader 
                    visible={this.state.loading} 
                    type="ThreeDots" 
                    color="#0000FF" 
                    height={70}  
                    width={70} 
                    />}
                </table>

                <div className="text-left mt-5">
                    <pre className="font-weight-bold"><code>{this.state.content}</code></pre>
                </div>

            </div>
        );
    }
}

export default LifeCycle;