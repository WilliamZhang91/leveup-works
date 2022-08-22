import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';


export const PrivateRouteTeacher = ({ isLoggedInTeacher }) => {
    return isLoggedInTeacher ? <Outlet /> : <Homepage />
};


