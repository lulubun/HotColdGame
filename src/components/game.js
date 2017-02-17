//Create a component called Game

import React from 'react';
import {connect} from 'react-redux';
import Temp from './temp';
import EnterGuess from './enter_guess';
import GuessCount from './guess_count'
import OldGuesses from './old_guesses'
import * as actions from '../actions/index';

export class Game extends React.Component {

  constructor() {
    super()
    this.genNumber = this.genNumber.bind(this)
  }

  componentDidMount() {
    this.props.secretAnswer()
  }

  render() {
    return (
      <div className="game">
        <Temp />
        <EnterGuess />
        <GuessCount />
        <OldGuesses />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  secretAnswer: () => dispatch(actions.genNumber())
})

export default connect(null, mapDispatchToProps)(Game);
