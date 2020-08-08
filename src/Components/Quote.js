import React from 'react'

export default function Quote({text, author}) {
    return (
        <div className = 'quote'>
        <h3> {text}</h3>
        <p id = 'author'> - {author}</p>
        </div>
    )
}
