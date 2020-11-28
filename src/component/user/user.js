import React,{ useContext} from 'react';
import Spinner from '../layout/Spinner';
import Useritem from './useritem';
import GithubContext from '../../context/github/githubContext';

const User = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users} = githubContext;
    if(loading){
        return <Spinner />
    }else{
        return (
            <div style={userStyle}>
                {users.map( items => {
                    return <Useritem key={items.id} user={items} />
                })
                }
            </div>
        );
    }
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
}

export default User;