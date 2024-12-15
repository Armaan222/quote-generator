import React from 'react'

const QuoteDisplay = ( { quote} ) => {
  return (
    <div className='quote-display'>
        <h1 className='qoute-text'>
            "{quote }"
        </h1>
    </div>
  )
}

// || 'Loading...'

export default QuoteDisplay;