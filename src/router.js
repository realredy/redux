import React from 'react'
import { Routes, Route, Link } from "react-router-dom"; 
import Fechdata from './async/fechdata';
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
                <Route path="async" element={<Fechdata />}  /> 
            </Routes>
        </div>
    )
}

export default Mirouter
