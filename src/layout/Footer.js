import React from 'react'

const style = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: '3.5rem',
    background: 'var(--bg-dark)'    /* Footer height */

}

const Footer = () => {
    return (
        <div style={style} className="center">
            <p className="white-text">Made with <i className="material-icons red-text">favorite</i> by <a target="_blank" rel="noreferrer" href="https://github.com/N3RDCLASH">Joel Naarendorp</a></p>
        </div>
    )
}

export default Footer
