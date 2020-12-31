import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressIndicator from '../../components/ProgressIndicator'
import '../User/User.css'

const User = (props) => {
    const [userData, setUserData] = useState();
    const [followers, setFollowers] = useState();
    const [repos, setRepos] = useState();

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
        console.log(followers)

    }
    return (
        <div className='row'>
            <div className="col m4" id="profile">
                {!userData ? <div className="col m1 offset-m5"> <ProgressIndicator /></div> :
                    <div className="col m8 offset-m2">
                        <img className="user-avatar" src={userData.avatar_url} height="260" width="260"
                            alt="" />
                        <div className="user-information">
                            <span className="user-name ">{userData.name}</span>
                            <br />
                            <span className="user-login">{userData.login}</span>
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
            <div className="col m4" id="projects">

            </div>
            <div className="col m4" id="followers">
                {!followers ? <ProgressIndicator /> : followers.map(follower =>
                    <Link key={follower.id} to={'/user/' + follower.login}>

                        <div className="follower" >
                            <img height="60" width='60' className="follower-avatar" src={follower.avatar_url} alt="" />
                            <span>{follower.login}</span>
                        </div>
                    </Link>

                )}
            </div>
        </div>
    )
}

export default User
