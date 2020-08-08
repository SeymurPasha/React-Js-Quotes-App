import React from 'react'

export default function Button(props) {
    return (
        <div className = "next-quote">
            <button onClick = {props.handleClick}>Next Quote</button>
        </div>
    )
}
