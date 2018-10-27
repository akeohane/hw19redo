import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import players from "./players.json";
import "./App.css";

var playerScore = 0;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    players: players,
    score: playerScore
  };

  

  addScore = (points) => {
    playerScore = playerScore + points;
    console.log(playerScore)
    this.setState({ score:playerScore});
  };

  stateToTrue = (id) => {
    const players = this.state.players;
    console.log("button working");
    const thisPlayer = players.find(x=> x.id === id);
    thisPlayer.clicked = "true"
    console.log(thisPlayer)
  };

  onTheClick = (id,points,clicked) =>{

    if (clicked === "true"){
        alert("game over!")
        window.location.reload();

    } else{
        const players = this.state.players;
        console.log("button working");
        const thisPlayer = players.find(x=> x.id === id);
        thisPlayer.clicked = "true"
        console.log(thisPlayer)
        playerScore = playerScore + points;
        console.log(playerScore);
        const players2 = shuffle(players);
        this.setState({ score:playerScore, players:players2});
    }

  }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.filter(player => player.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Player Score: {this.state.score}</Title>
        {this.state.players.map(player => (
          <FriendCard
            // removeFriend={this.removeFriend}
            // stateToTrue={this.stateToTrue}
            onTheClick={this.onTheClick}
            addScore={this.addScore}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
            clicked={player.clicked}
            points={player.points}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
