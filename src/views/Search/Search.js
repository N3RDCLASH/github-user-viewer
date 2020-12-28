import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Search = (props) => {
    const { query } = props.match.params
    useEffect(() => {
        
            console.log(props.match.params.query)
    })
    console.log(props.match)
    return (
        <div>
            <h1>idfk anymore</h1>
            <p>{query}</p>
        </div>
    )
}

export default Search
