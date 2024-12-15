import React from 'react'

const QuoteButton = ( {generateNewQuote } ) => {
  return (
    <button className='quote-button'
        onClick={generateNewQuote}>
            Get a Advice
    </button>
  )
}

export default QuoteButton;