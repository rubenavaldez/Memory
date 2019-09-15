import React, { Component } from "react";
import './App.css';
import ClickCard from "./components/ClickCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters"




class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        <Title>Memory</Title>
        {this.state.characters.map(character =>(
          <ClickCard
            // selectCard={this.selectCard}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            data-state="uncliked"
         /> 
          
        ))}
      </Wrapper>
    );
  }
}
export default App;