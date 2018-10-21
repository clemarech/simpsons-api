import React, {Component} from 'react';
import DisplayChar from './displayCharacter';
import GenerateChar from './GenerateChar';

const Mayor = {
  "quote": "Can't we have one meeting that doesn't end with us digging up a corpse?",
  "character": "Mayor Quimby",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799",
  "characterDirection":	"Left"
}

class Api extends Component{
  constructor(props){
    super(props);
    this.state={
      char: Mayor
    };
  }
  getCharacter(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(results => results.json())
    .then(data =>{
      this.setState( () =>{
        return {char: data[0]}
     })
   })
};

  render(){
    console.log(this.state.tab)
    return (
      <React.Fragment>
        <h1> Here's differents quotes from the Simpsons !</h1>
        <DisplayChar char={this.state.char} />
        <GenerateChar selectChar={() => this.getCharacter()} />

      </ React.Fragment>
    );
  }}

export default Api;
