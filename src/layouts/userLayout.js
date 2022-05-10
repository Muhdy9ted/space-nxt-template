import React from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

import {Navbar} from '../components';
import UserRoutes from '../routes/userRoutes';
import Fallback from '../webpages/fallback/fallback';


export default function UserLayout() {

    const handleError = useErrorHandler(); //use in event handlers and asynchronous code to catch error and show fallback webpage

    // try{

    // }catch(e){
    //     handleError(e)
    // }

    const errorHandler = (error, errorInfo) => {
        console.log('logging', error, errorInfo)
    }
    
    return (
        <>
            <Navbar />
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
                {UserRoutes}
            </ErrorBoundary>
        </>
    )
}
