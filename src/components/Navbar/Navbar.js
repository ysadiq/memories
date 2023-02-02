import React, { useState }from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import memories from '../../images/memories.png';
import { LOGOUT } from '../../redux/constants/ActionTypes';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: LOGOUT });

        history.push('/');
        setUser(null);
    }

    // useEffect(() => {
    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, []);

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={ classes.heading } variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar 
                            className={classes.purple} 
                            alt={user.result.name} 
                            src={user.result.picture}>
                                {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.username} variant='h6'>{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout} >Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;