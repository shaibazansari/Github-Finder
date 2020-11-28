import React from 'react';
import Repositem from './repositem'

function Repos({repos}) {
    return repos.map( repo => <Repositem repo={repo} key={repo.id} /> )
    
}

export default Repos;
