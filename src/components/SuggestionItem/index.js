// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsItemsDetails, updateSearchInput} = props
  const {suggestion} = suggestionsItemsDetails

  const onclickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        onClick={onclickSuggestion}
        className="arrow-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
