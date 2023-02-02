import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './Auth/Auth';

const App = () => {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_PUBLIC_GOOGLE_CLIENT_API_TOKEN}>
            <BrowserRouter>
                <Container maxWidth="lg">
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/auth' exact component={Auth} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;