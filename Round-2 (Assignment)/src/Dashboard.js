import React, { useEffect, useState } from 'react';
import Post from './Components/Post';
import Typography from '@mui/material/Typography';
import { GetRequest } from './Helpers/API-Helpers';
import { GetUserAction } from './Redux/Action/user.action';
import { useDispatch , useSelector } from 'react-redux';
const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    let selector = useSelector(state => state.data);
    let dispatch = useDispatch();
    useEffect(() => {
        if(selector.length === 0){
            getPosts()
        }else{
            setPosts(selector.reverse());
        }
    }, [selector])
    const getPosts = async () => {
        const res = await GetRequest('posts');
        if (res.length > 0) {
            dispatch(GetUserAction(res));
            setPosts(res.reverse());
        }
    }
    return (
        <div style={{ paddingLeft: '1rem' }}>
            <Typography variant="h5" sx={{ width: `calc(100% - ${240}px)`, ml: `${240}px`, fontWeight: 'bold', marginBottom: '1rem' }}>
                All Posts
            </Typography>
            <Post posts={posts} />
        </div>
    );
};

export default Dashboard;