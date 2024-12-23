import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, isPlaying} = this.props
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isPlaying ? (
          <div className="score-container">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default NavBar
