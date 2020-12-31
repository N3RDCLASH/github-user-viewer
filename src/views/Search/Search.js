import { React, useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { getPagination } from 'header-pagination'
import ProgressIndicator from '../../components/ProgressIndicator'
import ResultItem from '../../components/ResultItem'
import '../Search/Search.css'

const Search = (props) => {
    const [query, setQuery] = useState(props.match.params.query)
    const [result, setResult] = useState();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        setQuery(props.match.params.query)
        search(props.match.params.query)
    }, [props])

    const search = async (query) => {
        const request = await fetch(`https://api.github.com/search/users?q=${query}`, {
        }).then(handleErrors)
            .then(async res => {
                const pagination = getPagination(res.headers)
                const json = await res.json()
                return ({pagination,json})
            }).then(data => {
                setResult(data.json)
                setLoaded(true)
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
                                <Link key={user.id} className="" to={'/user/' + user.login}>
                                    <div style={cardStyle} className="card">

                                        <ResultItem user={user}  />
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
