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
        990,
        456,
        432,
        867
      ],
      changeBy: [
        2, 
        33,
        3,
        9,
        25
      ]
    };
  }
  render() {
    return (
      <div>
        {
          this.state.values.map((num, index)=> {
            return (
              <Counter 
                // key={index}
                index={index}  
                value={num}
                addHandler={() => {
                  this._incrementAll(this.state.changeBy[index])
                }}
                subtractHandler={() => {
                  this._decrementAll(this.state.changeBy[index])
                }}
                resetHandler={this._updateValue}
                />
            )
          })
        }
        
        
        
        

        {/* <Counter 
          // changeBy={2}
          value={this.state.values[1]}
          addHandler={() => {
            this._incrementAll(this.state.changeBy[1])
          }}
          subtractHandler={() => {
            this._decrementAll(this.state.changeBy[1])
          }}
          resetHandler={this.updateValue}
          index={1}
          /> */}
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
  _incrementAll = (howMuch) => {
    const newValues = this.state.values.map(num =>num + howMuch);
    this.setState({
      values: newValues
    })
  }
  _decrementAll = (howMuch) => {
    const newValues = this.state.values.map(num => num - howMuch);
    this.setState({
      values: newValues
    })
  }

}
export default App;