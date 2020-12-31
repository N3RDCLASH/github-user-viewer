import React from 'react'
import {Link} from 'react-router-dom'
import '../../views/NotFound/NotFound.css'
const NotFound = () => {
    return (
        <>
            <div id="notfound_graphic">
            </div>
            <h5 className="center">The page your looking for couldn't be found! Click <Link to="/">here</Link> to go back home.</h5>
        </>
    )
}

export default NotFound
