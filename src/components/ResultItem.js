import React from 'react'

const ResultItem = (props) => {
    const style = {
        cursor: "pointer", 
        borderRadius: "0.4em",
        backgroundColor: "#333"
    }
    return (
        <>
            <li style={style} key={props.user.id} className="collection-item avatar">
                {<img src={props.user.avatar_url} alt="" className="circle" />}
                <span className="title white-text">{props.user.login}</span>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </>
    )
}

export default ResultItem
