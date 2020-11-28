import React from 'react';
import { Link } from 'react-router-dom';

function useritem(props) {
    const { login , avatar_url}  = props.user

    return (
        <div className='card text-center'>
            <img src={avatar_url} className='round-img' style={{ width: '60px' }} alt=""/>
            <h4>{login}</h4>
            <div>
                <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`} alt="profile image">More</Link>
            </div>

        </div>
    );
}

export default useritem;