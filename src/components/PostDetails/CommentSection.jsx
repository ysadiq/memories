import React, { useState } from 'react';
import {Typography, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { commentPost } from '../../redux/actions/posts';

const CommentSection = ({ posts, currentPostId }) => {
    const post = posts.filter((post) => post._id === currentPostId)[0];
    const comments = post?.comments
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const user = JSON.parse(localStorage.getItem('profile'));

    const handleClick = () => {
        const finalComment = `${user.result.name}: ${comment}`;

        dispatch(commentPost(post._id, finalComment));
        setComment('');
    };
    
    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                    { comments.map((comment, index) => (
                        <Typography key={index} gutterBottom variant='subtitle1'>
                            {comment}
                        </Typography>
                    ))}
                </div>
                    {user?.result.name && (
                        <div style={{ width: '70%' }}>
                            <Typography gutterBottom variant='h6'>Write a Comment</Typography>
                            <TextField 
                                fullWidth
                                minRows={4}
                                variant='outlined'
                                label='Comment'
                                multiline
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <Button 
                                style={{ marginTop: '10px' }} 
                                fullWidth 
                                disabled={!comment} 
                                variant='contained' 
                                color='primary'
                                onClick={handleClick}>
                                Comment
                            </Button>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default CommentSection;