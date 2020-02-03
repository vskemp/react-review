import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        // register counter as a normal React.Component
        super(props);
        // Use react.component's constructor to set up Counter to work with React
        this.state={
            changeBy: props.changeBy,
            value: props.initialValue
        };
    }

    render() {
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button  onClick={() => {
                    this.setState({
                        value: this.state.value + this.props.changeBy
                    });
                }}>+</button>
                <button  onClick={() => {
                    this.setState({
                        value: this.state.value - this.props.changeBy
                    });
                }}>-</button>
                <button  onClick={() => {
                    this.setState({
                        value: this.props.initialValue
                    });
                }}>*</button>
            </div>
        );
    }
    
}



export default Counter;