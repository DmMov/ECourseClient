import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// * Components
import { AuthPage } from './pages/AuthPage/AuthPage';
import { CoursesPage } from './pages/CoursesPage/CoursesPage';
import { AdminPage } from './pages/AdminPage/AdminPage';
import { CreateCoursePage } from './pages/CreateCoursePage/CreateCoursePage';
import { ConfirmEmailMessagePage } from './pages/ConfirmEmailMessagePage/ConfirmEmailMessagePage';
import { ConfirmEmailPage } from './pages/ConfirmEmailPage/ConfirmEmailPage';

export const useRoutes = userData => userData
  ? <Switch>
    <Route path="/courses" component={CoursesPage} exact />
    {userData.role === 'admin' && <Route path="/admin" component={AdminPage} exact />}
    {userData.role === 'admin' && <Route path="/add-course" component={CreateCoursePage} exact />}
    <Redirect to="/courses" />
  </Switch>
  : <Switch>
    <Route path="/" component={AuthPage} exact />
    <Route path="/confirm-email/:id/:code" component={ConfirmEmailPage} />
    <Route path="/confirm-message" component={ConfirmEmailMessagePage} exact />
    <Redirect to="/" />
  </Switch>;