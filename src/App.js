import React, { Component } from 'react';
import Layout from './UI/Layout';
import Field from './UI/Field';
import ControllPanel from './UI/ControllPanel';
import { Button } from './UI/Button';
import { Score } from './UI/Score';
import initCells from './logic/initCells';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = this.getNewState();

    this.newGame = this.newGame.bind(this);
  }

  newGame() {
    this.setState(this.getNewState());
  }

  getNewState() {
    return {
      cells: initCells(),
      score: 0
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress(event) {
    console.log(event.code)
  }

  render() {
    const { cells, score } = this.state
    return (
      <Layout>
        <ControllPanel lol={24}>
          <Button onClick={this.newGame}>New Game</Button>
          <Score>{score}</Score>
        </ControllPanel>
        <Field cells={cells} />
      </Layout>
    );
  }
}

export default App;