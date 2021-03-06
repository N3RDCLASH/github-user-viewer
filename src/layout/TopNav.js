import React from 'react';
import { useHistory, Link } from "react-router-dom";
import logo from '../assets/images/GitHub-Mark-Light-64px.png'

const TopNav = () => {
    const history = useHistory();

    function search(input) {
        if (input.key === 'Enter') {
            input.nativeEvent.preventDefault();
            history.push({ pathname: `/search/${input.target.value}`, state: { query: input.target.value } })
        }

    }
    return (
        <nav>
            <div className="nav-wrapper bg-dark">
                <Link to="/" className="brand-logo left"><img src={logo} alt="" /></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                </ul>
                <form className="bg-dark">
                    <div className="input-field">
                        <input id="search" placeholder="Search for User..." type="search" onKeyDown={search} required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}


export default TopNav
