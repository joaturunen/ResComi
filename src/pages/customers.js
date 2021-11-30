import React , { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom';

// tähän sivuun ei saa koskea t. Joanna

export default function Customers() {

    return (
        <>
            <h2>Customers</h2>
            <Outlet />
        </>
    );
}