import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        // register counter as a normal React.Component
        super(props);
        // Use react.component's constructor to set up Counter to work with React
        this.state={
        //     changeBy: props.changeBy,
        //       value: props.initialValue
            initialValue: props.value
        };
    }

    render() {
        return(
            <div>
                <h1>{this.props.value}</h1>
                <button  onClick={this.props.addHandler}>+</button>
                <button  onClick={this.props.subtractHandler}>-</button>
                <button  onClick={this._resetValue}>*</button>
            </div>
        );
    }
    
// write helper function as arrow func. they retain the correct value of the THIS keyword
    _incrementValue= () => {
        // this.setState({
        //     value: this.state.value + this.props.changeBy
        // });
        const newVal = this.props.value + this.props.changeBy;
        this.props.clickHandler(this.props.index, newVal);
    }
    _decrementValue= () => {
        // this.setState({
        //     value: this.state.value - this.props.changeBy
        // });
        const newVal = this.props.value - this.props.changeBy;
        this.props.clickHandler(this.props.index, newVal);
    }
    _resetValue= () => {
        // this.setState({
        //     value: this.props.initialValue
        // });
        this.props.resetHandler(this.props.index, this.state.initialValue);
    }
}



export default Counter;