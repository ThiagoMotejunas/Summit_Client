import React from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const NavbarHolder:React.FC<{style?: string}> = () => {
    return (
        <div className={`absolute`} style={{ gridRow: 'navbar' }}>
            <MobileNavbar />
            <DesktopNavbar />
        </div>
    )
}

export default NavbarHolder