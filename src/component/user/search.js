import React,{ useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

function Search() {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');

    const handlechnage = (e) => {
       setText(e.target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
           alertContext.setAlert('Please Enter Something', 'light')
        } else {
            githubContext.searchUser(text);
            setText('');
        }
    }
    const onClick = () => {
        githubContext.clearUser();
    }

    return (
        <div>
            <form className='form' onSubmit={onSubmit} autoComplete="off">
                <input type='text' name='text' placeholder="Search users" onChange={handlechnage} value={text} />
                <input type='submit' value='Search' className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && <button value='search' className='btn btn-light btn-block' onClick={onClick}>Clear</button>}
        </div>
    );

}


export default Search;