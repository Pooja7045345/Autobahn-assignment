import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { PutRequest, GetRequest } from './Helpers/API-Helpers';
import { useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { UpdateUserAction } from './Redux/Action/user.action';
import { useDispatch } from 'react-redux';
const EditPost = () => {
    const drawerWidth = 250;
    let params = useLocation();
    let dispatch = useDispatch();
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [pId, setPId] = useState('');
    const [loading, setLoading] = useState(false);
    const [postStatus, setPostStatus] = useState({ severity: 'success', message: '' });
    useEffect(() => {
        if (postStatus.message !== '') {
            setTimeout(() => {
                setPostStatus({ severity: '', message: '' })
            }, 5000)
        }
    }, [postStatus])
    useEffect(() => {
        getPosts()
    }, [params])
    const getPosts = async () => {
        setLoading(true);
        let postId = params.search.split('=')[1];
        const res = await GetRequest('posts/' + postId);
        if (res.id !== '') {
            setPostTitle(res.title);
            setPostDescription(res.body);
            setPId(res.id)
            setLoading(false);
        }
    }
    const EditPost = async () => {
        let postId = params.search.split('=')[1];
        if (postTitle !== '' && postDescription !== '') {
            let body = { title: postTitle, body: postDescription, userId: 1, id: pId };
            let res = await PutRequest('posts/' + pId, body);
            if (res.id !== '') {
                dispatch(UpdateUserAction(res));
                setPostStatus({ severity: 'success', message: 'Post Has Been Edited Successfully!' })
            } else {
                setPostStatus({ severity: 'error', message: 'Post Can Not Be Edit Successfully!' })
            }
        }
    }
    return (
        <div>
            <Typography variant="h5" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, fontWeight: 'bold', marginBottom: '1rem' }}>
                Edit Post Form
         </Typography>
            {
                loading === false ? '' : <Box sx={{
                    display: 'flex', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, justifyContent: "center",
                    alignItems: "center", height: '500px'
                }}>
                    <CircularProgress />
                </Box>
            }
            <Box component="form" noValidate autoComplete="off" sx={{ padding: '30px', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: '#fafafa', '& .MuiTextField-root': { m: 1, width: '100%' } }}>


                {
                    postStatus.message !== '' ?
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity={postStatus.severity}>{postStatus.message}</Alert>
                        </Stack> : ''
                }

                <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Post Title"
                        value={postTitle}
                        variant="outlined"
                        onChange={(e) => setPostTitle(e.target.value)}

                    />
                </div>
                <div>
                    <TextField
                        required
                        id="standard-multiline-static"
                        label="Post Description*"
                        multiline
                        rows={4}
                        value={postDescription}
                        onChange={(e) => setPostDescription(e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div style={{ textAlign: 'center' }}> <Button variant="contained" onClick={() => EditPost()}>Submit</Button></div>

            </Box>

        </div>
    );
};

export default EditPost;