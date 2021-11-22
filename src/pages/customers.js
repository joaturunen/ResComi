import React , { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom';

export default function Customers() {

    return (
        <div>
            <h2>Customers</h2>
            <Outlet />
        </div>
    );
}