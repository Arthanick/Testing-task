import React from 'react';
import { Redirect } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import DashBoard from './pages/DashBoard';
import SettingsPage from './pages/SettingsPage';
import InfoApiPage from './pages/InfoApiPage';

function check_token() {
    if (localStorage.getItem("Token")) {
        return <Redirect to="/dashboards" />
    }
    
    return (<Redirect to="/login" />)
};

export default [
    {
        path: "/",
        component: () => check_token(),
        exact: true,
    },

    {
        path: "/login",
        component: LoginPage,
    },

    {
        path: "/settings",
        component: SettingsPage,
    },
        
    {
        path: "/dashboards",
        component: DashBoard,
    },

    {
        path: "/api/:name",
        component: InfoApiPage,
    }

];