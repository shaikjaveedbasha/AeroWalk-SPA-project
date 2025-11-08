import React, { Component } from "react";

class State extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    sub = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div className="container p-5">
                <h2>State:{this.state.count}</h2>
                <button onClick={this.add} className="btn btn-danger"> Add </button>
                <button onClick={this.sub} className="btn btn-success"> Sub </button>
            </div>
        )
    }
}
export default State