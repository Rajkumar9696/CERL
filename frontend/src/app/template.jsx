'use client';

import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';
import Navbar from './(main)/navbar';
import { UserProvider } from './context/UserContext';

const Template = ({ children }) => {

    // useEffect(() => {
    //     require('bootstrap/dist/js/bootstrap.min.js');
    // }, [])

    return (
        <SnackbarProvider
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        autoHideDuration={1000}
        >
            <UserProvider>
           
                {children}
           
            </UserProvider>
        </SnackbarProvider>
    )
}

export default Template;