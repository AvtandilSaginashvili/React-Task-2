import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            name : 0
        }
    }

    count = () => {
        this.setState({
            name : this.state.name + 1
        })

            window.alert(this.state.name)
    }


    render() {
        return(
            <React.Fragment>
            <button type="button" onClick={this.count}>დაკლიკე</button>
            </React.Fragment>
        )
    }
}


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);