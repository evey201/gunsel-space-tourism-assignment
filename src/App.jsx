import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, SideBar } from './components'
import { HomePage, Destination} from './pages'

export const App = () => {
  const [isSideBarOpen, toggleSidebar] = useState(false)
  // console.log(isSideBarOpen)
  const currentLocation = useLocation()
  const locationPathname = currentLocation.pathname.replace('/', '')

  return (
    <div 
          className={`${ locationPathname === '' ? 'home' : locationPathname }`}
        >
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

