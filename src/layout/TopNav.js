import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../assets/images/GitHub-Mark-Light-64px.png'

const TopNav = () => {
    const history = useHistory();

    function search(input) {
        if (input.key === 'Enter') {
            console.log(input)
            input.nativeEvent.preventDefault();
            history.push({ pathname: `/search/${input.target.value}`, state: { query: input.target.value } })
        }

    }

    const test = () => {
        history.push({ pathname: `/search/${document.getElementById('search').value}`, state: { query: document.getElementById('search').value } })
    }
    return (
        <nav>
            <div className="nav-wrapper bg-dark">
                <a href="/" className="brand-logo left"><img src={logo} alt="" /></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                </ul>
                <form className="bg-dark">
                    <div className="input-field">
                        <input id="search" placeholder="Search for Github User..." type="search" onKeyDown={search} required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                    <a className="waves-effect waves-light btn" onClick={() => { test() }}>button</a>
                </form>
            </div>
        </nav>
    )
}


export default TopNav
