import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

const UserLayout = lazy(() => import('../layouts/userLayout'));


let routes = (
    <Suspense fallback={<CircularProgress color='secondary' />}>
        <Switch>
            <Route exact path= '/' component={UserLayout} />
            <Redirect to='/' />
        </Switch>
    </Suspense>
);

export default routes;