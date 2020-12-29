import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Search = (props) => {
    const { query } = props.match.params
    const [result, setResult] = useState();

    useEffect(() => search(), [])

    const search = async () => {
        let request = await fetch(`https://api.github.com/search/users?q=${query}`)
        let data = await request.json()
        alert(data)
        setResult(data)
    }

    // search()
    // console.log(typeof(search().items))
    return (
        <div id="result_list" >
            {/* <ul class="collection"></ul>
            {result.items.map(x => (
                <li key={x.id} className="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" className="circle" />
        <span className="title">{x.login}</span>
      <p>First Line <br></br>
         Second Line
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            ))} */}
            {/* {result.items.map(x=>(<li key={x.id}>{x.login}</li>))} */}

        </div>
    )

}

export default Search
