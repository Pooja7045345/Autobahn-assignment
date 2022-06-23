import React , {useState , useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Edit from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { DeleteRequest } from '../Helpers/API-Helpers';
import { DeleteUserAction } from './../Redux/Action/user.action';
import { useDispatch  } from 'react-redux';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
const Post = ({ posts }) => {
    let dispatch = useDispatch();
    const [postStatus, setPostStatus] = useState({ severity: 'success', message: '' });
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const DeletePost = async (id) => {
        if (id !== '') {
            let res = await DeleteRequest('posts/' + id);
            if (res.status === 'success') {
                    dispatch(DeleteUserAction(id))
                setPostStatus({ severity: 'success', message: 'Post Deleted Successfully!' })
            } else {
                setPostStatus({ severity: 'error', message: 'Post Can Not Be Deleted!' })
            }
        }
    }
    useEffect(() => {
        if (postStatus.message !== '') {
            setTimeout(() => {
                setPostStatus({ severity: '', message: '' })
            }, 5000)
        }
    }, [postStatus])
    return (
        <Box sx={{ flexGrow: 1, width: `calc(100% - ${240}px)`, ml: `${240}px` }}>
         {
                postStatus.message !== '' ?
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity={postStatus.severity}>{postStatus.message}</Alert>
                    </Stack> : ''
        }
           
            {
                posts !== undefined &&  posts.length !== 0 ?
                posts.map((post, i) => {
                    return <Grid container spacing={7} style={{ marginBottom: '1rem' }} key={i}>
                        <Grid item xs={8}>
                            <Item>
                                <h2 style={{ textTransform: 'capitalize' }}>{post.title} </h2>
                                <p style={{ textTransform: 'capitalize' }}>{post.body}</p>
                                <Link to={'/edit-post?id=' + post.id} > <Button><Edit /></Button> </Link>
                                <Button onClick={()=>DeletePost(post.id)}><Delete /></Button>
                            </Item>
                        </Grid>
                    </Grid>
                }) : <Grid container spacing={7} style={{ marginBottom: '1rem' }} key='1'>
                        <Grid item xs={8}>
                            <Item>
                                <h2 style={{ textTransform: 'capitalize' }}>Post Title ... </h2>
                                <p style={{ textTransform: 'capitalize' }}>Post Description ... </p>
                               <Button><Edit /></Button>
                                <Button><Delete /></Button>
                            </Item>
                        </Grid>
                    </Grid>
            }

        </Box>
    );
};

export default Post;