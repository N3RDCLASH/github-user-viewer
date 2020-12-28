import React from 'react'
import '../Home/Home.css'
const Home = (props) => {
console.log(props.match)
    return (
        <>
            <div id="home_graphic">
            </div>
            <h5 className="center">Search for a developer by there GitHub username to get started!</h5>
        </>
    )
}

export default Home
