import React, { useRef, useState } from 'react';
import {Typography, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { commentPost } from '../../redux/actions/posts';
import posts from '../../redux/reducers/posts';

const CommentSection = ({ post }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const commentRef = useRef();

    const user = JSON.parse(localStorage.getItem('profile'));

    const handleClick = () => {
        const finalComment = `${user.result.name}: ${comment}`;

        dispatch(commentPost(post._id, finalComment));
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
                                rows={4}
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