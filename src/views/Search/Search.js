import { React, useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import ProgressIndicator from '../../components/ProgressIndicator'
import ResultItem from '../../components/ResultItem'
import '../Search/Search.css'

const Search = (props) => {
    const [{ query }, setQuery] = useState(props.match.params)
    const [result, setResult] = useState();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        console.log(props)
        console.log('rerender')
        search(props.match.params.query)
    }, [props])

    const search = async (query) => {
        setQuery(query)
        const request = await fetch(`https://api.github.com/search/users?q=${query}`, {

        }).then(handleErrors)
            .then(res => res.json()).then(data => {
                setResult(data)
                setLoaded(true)

                console.log(data)
            }
            ).catch(err => {
                console.log(err)
            })

    }

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const cardStyle = {
        boxShadow: "none",
        backgroundColor: "transparent",

    }
    const linkStyle = {
        display: "grid",
        gridGgap: "1rem",
        gridTemplateColumns: "repeat(3,1fr)"
    }

    return (
        <div className="row">
            <div className="">
                <div className="center">
                    {!loaded && !result ? null : (`Found ${result.total_count} results for ${query}`)}
                </div>
                {!loaded && !result ?
                    <div className="col m1 offset-m5 s1 offset-s5">
                        <ProgressIndicator />
                    </div>
                    :
                    <div id="result_list" className="" >
                        <ul style={{ backgroundColor: "transparent", border: "none" }} className="collection grid">
                            {result.items.map(user => (
                                <Link className="" to={'/user/' + user.login}>
                                    <div style={cardStyle} className="card">

                                        <ResultItem user={user} key={user.id} />
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>

    )

}

export default Search
