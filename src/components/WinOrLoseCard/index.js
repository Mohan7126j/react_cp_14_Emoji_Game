import {Component} from 'react'
import './index.css'

const Won = props => {
  const {score, playAgain} = props
  return (
    <div className="container">
      <div>
        <h1 className="result-heading">You Won</h1>
        <p className="best-score">Best Score</p>
        <p className="score">{score}/12</p>
        <button className="play-again-button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )
}

const Lose = props => {
  const {score, playAgain} = props
  return (
    <div className="container">
      <div>
        <h1 className="result-heading">You Lose</h1>
        <p className="best-score">Score</p>
        <p className="score">{score}/12</p>
        <button className="play-again-button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )
}

class WinOrLoseCard extends Component {
  render() {
    const {score, playAgain} = this.props
    return (
      <div>
        {score === 12 ? (
          <Won score={score} playAgain={playAgain} />
        ) : (
          <Lose score={score} playAgain={playAgain} />
        )}
      </div>
    )
  }
}

export default WinOrLoseCard
