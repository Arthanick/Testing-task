import React from 'react';
import { Redirect } from "react-router-dom";
import DashBoard from './pages/DashBoard';
import SettingsPage from './pages/SettingsPage';
import InfoApiPage from './pages/InfoApiPage';

export default [
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
    },

];