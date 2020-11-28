import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/spinner.gif';
import Repos from '../repos/repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

function Userdetail(props) {

    const githubContext = useContext(GithubContext);
    const {getUser, user,loading, repos,getUserRepos} = githubContext

    useEffect(() => {
        getUser(props.match.params.login);
        getUserRepos(props.match.params.login);
        // eslint-disable-next-line
    }, []);

   const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } =  user;
        // console.log(loading)
        // if (loading) return <Spinner />
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to Search</Link>
                Hireable : {''}
                {hireable ? <i className='fas fa-check tetx-success'></i> : <i className='fas fa-times-circle tetx-danger'></i>}
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }}></img>
                        <h1>{name}</h1>
                        <p>{location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company: </strong> {company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website: </strong> {blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-success'>Following: {following}</div>
                    <div className='badge badge-light'>Public repos: {public_repos}</div>
                    <div className='badge badge-dark'>Public gists: {public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        )
}
export default Userdetail;