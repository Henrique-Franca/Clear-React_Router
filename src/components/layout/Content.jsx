import './Content.css'
import React from 'react';
import About from '../../view/exemples/About';
import Home from '../../view/exemples/Home';

import { Routes, Route } from 'react-router-dom'

const Content = props =>(

    <main className='Content'>

        <Routes>
            <Route path="/" caseSensitive={false} element={<Home />} />               
            <Route path="/about" caseSensitive={false} element={<About />} />
        </Routes>

    </main>

)

export default Content




