import React from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const NavbarHolder = () => {
  return (
    <div className='relative'>
              <MobileNavbar />
              <DesktopNavbar/> 
    </div>
  )
}

export default NavbarHolder