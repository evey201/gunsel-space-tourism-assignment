import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Header } from './components'
import {HomePage} from './pages'

export const App = () => {
  return (
    <div className="App" style={{ background: '#0B0D17', height: '100vh', width: '100%'}}>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
        </Routes>
    </div>
  );
}

