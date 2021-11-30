import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardList name='Henrry' edad='Perro' />
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}> {monster.name}</h1>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
