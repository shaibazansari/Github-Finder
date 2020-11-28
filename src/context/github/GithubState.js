import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS
} from '../types';


const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search user
    const searchUser = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        // console.log(res.data.items);
        dispatch({
            type: SEARCH_USER,
            payload: res.data.items
        })

    }

    // Clear User
    const clearUser = () => {
        dispatch({ type: CLEAR_USER });
    }

    // Get User
    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    }

    // Get User Repos
    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        // console.log('repos is',res.data)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
      }

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clearUser,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;