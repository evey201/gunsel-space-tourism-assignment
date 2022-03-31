import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Header, SideBar } from './components'
import { HomePage, Destination} from './pages'

export const App = () => {
  const [isSideBarOpen, toggleSidebar] = useState(false)
  console.log(isSideBarOpen)
  return (
    <div className="App" style={{ background: '#0B0D17', height: '100vh', width: '100%'}}>
        <SideBar
            open={isSideBarOpen}
            close={() => toggleSidebar(false)}
        />
        <Header toggle={() => toggleSidebar(!isSideBarOpen)} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/destination' element={<Destination />} />
        </Routes>
    </div>
  );
}

