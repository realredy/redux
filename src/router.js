import React from 'react'
import { Routes, Route, Link } from "react-router-dom"; 
import Displaydata from './async/displayData';
import Counter from './counterApp/counter';

function Mirouter() {
    return (
        <div>
            <ul>
                <li>
                <Link to="/">reducers</Link>
                </li>
                <li>
                <Link to="/async">async</Link>
                </li>
                </ul> 
            <Routes>
                <Route path="/" element={<Counter />} /> 
                <Route path="async" element={<Displaydata /> }  /> 
            </Routes>
        </div>
    )
}

export default Mirouter
