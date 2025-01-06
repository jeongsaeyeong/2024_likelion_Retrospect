import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Section/Main'
import About from './components/Page/About'
import People from './components/Page/People'
import Retro from './components/Page/Retro'
import Work from './components/Page/Work/Work'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/About' element={<About />} />
                <Route path='/people' element={<People />} />
                <Route path='/retro' element={<Retro />} />
                <Route path='/works' element={<Work />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App