import React from 'react';
import { Home } from './components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from './components/Authentication/Register';
import { Login } from './components/Authentication/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
