import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPosts } from '../../redux/actions/posts';
import Pagination from '../Pagination/Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from './styles';

    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    // define dispatch hook and use useEffect to dispatch the actions
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const handleKeyDown = (e) => { 
        if (e.keyCode === 13) {
            searchPost();
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag]);
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
    
    const searchPost = () => {
        if (search.trim()) {
            // dispatch -> fetch search post
        } else {
            history.push('/');
        }
    }
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    // When currentId state is changed through the setCurrentId from the Form or Post
    // this will dispatch the getPost() action to ensure that fresh data is retreieved in each state change.
    
    // useEffect(() => {
        //     dispatch(getPosts());
        // }, [currentId, dispatch]);
        
        
    return (
        <Grow in>
            <Container maxWidth='xl'>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position='static' color='inherit' >
                            <TextField
                                name='search'
                                variant='outlined'
                                label='Search Memories'
                                onKeyDown={() => handleKeyDown()}
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} 
                            />
                            <ChipInput
                                style={{ margin: '10px 0'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label='Search Tags'
                                variant='outlined' 
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant='contained' color='primary'>Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Pagination />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;