import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressIndicator from '../../components/ProgressIndicator'
import '../User/User.css'

import forkIcon from '../../assets/images/git.svg'

const User = (props) => {
    const [userData, setUserData] = useState();
    const [followers, setFollowers] = useState();
    const [repos, setRepos] = useState();
    const dateFormat = require("dateformat");

    useEffect(() => {
        getUserData()
    }, [props])

    const getUserData = () => {
        fetch(`https://api.github.com/users/${props.match.params.username}`).then(async res => await res.json()).then(data => {
            setUserData(data)
            getUserRepos(data)
            getUserFollowers(data)
        }
        )
    }

    const getUserRepos = ({ repos_url }) => {
        fetch(repos_url).then(async res => setRepos(await res.json()))

        // fetch(``)
    }
    const getUserFollowers = ({ followers_url }) => {
        fetch(followers_url).then(async res => await res.json()).then(data => setFollowers(data))
    }
    return (
        <div className='row'>
            <div className="col m3 s12" id="profile">
                {!userData ? <div className="col m1 offset-m5"> <ProgressIndicator /></div> :
                    <div className="col m12">
                        <img className="user-avatar" src={userData.avatar_url}
                            alt="" />
                        <div className="user-information">
                            <span className="user-name ">{userData.name}</span>
                            <br />
                            <span className="user-login">@{userData.login}</span>
                            <div className="stats">
                                <div className='stat'>
                                    <span> <i className="material-icons">people</i> {userData.followers}</span><span> Followers</span>
                                </div>
                                <div className='stat'>
                                    <span><i className="material-icons">people</i> {userData.following}</span><span> Following</span>
                                </div>

                                <div className='stat'>
                                    <span><i className="material-icons">book</i>{userData.public_repos}</span><span> Public Repos</span>
                                </div>
                            </div>
                            <div className="location">
                                <i className="material-icons">location_on</i><span>{userData.location}</span>
                            </div>
                        </div>
                    </div>}
            </div>
            <div className="col m5 s12" id="repos">
                <h4>Repositories</h4>
                {!repos ? <div className="col m1 offset-m5"> <ProgressIndicator /></div> : repos.map((repo) =>
                    <a target="_blank" href={repo.html_url}>

                        <div className="repo">
                            <span className="name">
                                {repo.name}
                            </span>
                            <span className="description">
                                {repo.description}
                            </span>
                            <div className="stats">
                                <div className="stat">
                                    <span className="">{repo.language}</span>
                                </div>
                                <div className="stat">
                                    <i className="material-icons amber-text">star</i>{repo.stargazers_count}
                                </div>
                                <div className="stat">
                                    <img src={forkIcon} alt="" className="" />{repo.forks}
                                </div>
                                <div className="stat">
                                    <span> Last updated on {dateFormat(repo.updated_at, `mmmm dS ${!new Date().getFullYear() === new Date(repo.updated_at).getFullYear() ? 'yyyy' : ''}`)}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                )
                }
            </div>
            <div className="col m4 s12" id="followers">
                <h4>Followers</h4>
                {!followers ? <div className="col m1 offset-m5"> <ProgressIndicator /></div> : followers.map(follower =>
                    <Link key={follower.id} to={'/user/' + follower.login}>

                        <div className="follower" >
                            <img height="60" width='60' className="follower-avatar" src={follower.avatar_url} alt="" />
                            <span className="follower-name">{follower.login}</span>
                        </div>
                    </Link>

                )}
            </div>
        </div>
    )
}

export default User
