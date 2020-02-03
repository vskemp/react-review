import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';



// function App() {
//   return (
//     <div>
//       <Counter 
//         changeBy={2}
//         initialValue={10}/>
//       <Counter 
//         changeBy={3}
//         initialValue={99}/>
      {/* <Counter 
        changeBy={-4}
        initialValue={5}/>
      <Greet
      whom="Cthulu"
      how="Salutations" />   
      <Greet
      whom="Chris"
      how="Howdy" />  */}
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        100,
        990
      ]
    };
  }
  render() {
    return (
      <div>
        <Counter 
          changeBy={2}
          value={this.state.values[0]}
          clickHandler={this._updateValue}
          index={0}
          />
        <Counter 
          changeBy={3}
          value={this.state.values[1]}
          clickHandler={this._updateValue}
          index={1}
          />
        </div>
    );
  }
  _updateValue = (index, newValue) =>  {
    const newValues = [
      ...this.state.values
    ];
    newValues[index] = newValue;
    this.setState({
      values: newValues
    });
  }
}
export default App;