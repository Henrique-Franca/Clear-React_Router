import './Content.css'
import React from 'react';

import About from '../../view/exemples/About';
import Home from '../../view/exemples/Home';
import NotFound from '../../view/exemples/NotFoundi';
import Param from '../../view/exemples/Param';


import { Routes, Route } from 'react-router-dom'

const Content = props =>(

    <main className='Content'>

        <Routes>
                           
            <Route path="/about" caseSensitive={false} element={<About />} />
            <Route path="/param/:id" caseSensitive={false} element={<Param />} />
            <Route path="/" caseSensitive={false} element={<Home />} />
            <Route path="*" caseSensitive={false} element={<NotFound />} />

        </Routes>

    </main>

)

export default Content




