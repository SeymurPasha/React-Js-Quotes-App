import React from 'react'
import Quote from './Quote'
import Button from './Button'

export default function QuotesList({quote, nextQuote}) {
    return (
        <div className = 'quote-list'>
       <Quote text = {quote.text} author = {quote.author}></Quote>
       <Button handleClick = {nextQuote}/>
        </div>
    )
}

