import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {cardDetails, getEmojiId} = this.props
    const {emojiName, emojiUrl, id} = cardDetails
    const onClickHandle = () => {
      getEmojiId(id)
    }
    return (
      <li className="emoji-card">
        <button
          className="emoji-card-button"
          type="button"
          onClick={onClickHandle}
        >
          <img src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
