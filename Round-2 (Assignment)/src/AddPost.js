import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { PostUserAction } from './Redux/Action/user.action';
import { useDispatch , useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { PostRequest } from './Helpers/API-Helpers';
const AddPost = () => {
    const drawerWidth = 250;
    let selector = useSelector(state => state.data)
    let dispatch = useDispatch();
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postStatus, setPostStatus] = useState({ severity: 'success', message: '' });
    useEffect(() => {
        if (postStatus.message !== '') {
            setTimeout(() => {
                setPostStatus({ severity: '', message: '' })
            }, 5000)
        }
    }, [postStatus])
    const AddPost = async () => {
        if (postTitle !== '' && postDescription !== '') {
            let body = { title: postTitle, body: postDescription, userId: 1 };
            let res = await PostRequest('posts', body);
            if (res.id !== '') {
                dispatch(PostUserAction(res));
                setPostStatus({ severity: 'success', message: 'Post Has Been Added Successfully!' })
            } else {
                setPostStatus({ severity: 'error', message: 'Post Can Not Be Added Successfully!' })
            }
        }
    }
    return (<div>
        <Typography variant="h5" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, fontWeight: 'bold', marginBottom: '1rem' }}>
            Add Post Form
         </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ padding: '30px', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: '#fafafa', '& .MuiTextField-root': { m: 1, width: '100%' }}}>
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
                    defaultValue={postTitle}
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
                    defaultValue={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)}
                    variant="outlined"
                />
            </div>
            <div style={{ textAlign: 'center' }}> <Button variant="contained" onClick={() => AddPost()}>Submit</Button></div>

        </Box>
    </div>
    );
};

export default AddPost;