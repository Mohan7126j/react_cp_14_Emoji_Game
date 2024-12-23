import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedlist: [],
    isPlaying: true,
  }

  getEmojiId = id => {
    const {clickedlist, score} = this.state
    if (!clickedlist.includes(id)) {
      console.log('playing')
      this.setState(preState => ({
        clickedlist: [...preState.clickedlist, id],
        score: preState.score + 1,
      }))
    }
    if (score === 11) {
      console.log('Stopped')
      this.setState({
        isPlaying: false,
      })
    }
    if (clickedlist.includes(id)) {
      console.log('stopped due to repeated')
      this.setState({
        isPlaying: false,
      })
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({
        topScore: score,
      })
    }
    this.setState({
      isPlaying: true,
      score: 0,
      clickedlist: [],
    })
  }

  render() {
    const {score, topScore, isPlaying} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledEmoji = shuffledEmojisList()
    return (
      <div>
        <NavBar score={score} topScore={topScore} isPlaying={isPlaying} />
        <div className="emoji-card-container">
          {isPlaying ? (
            <ul>
              {shuffledEmoji.map(item => (
                <EmojiCard
                  key={item.id}
                  cardDetails={item}
                  getEmojiId={this.getEmojiId}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
