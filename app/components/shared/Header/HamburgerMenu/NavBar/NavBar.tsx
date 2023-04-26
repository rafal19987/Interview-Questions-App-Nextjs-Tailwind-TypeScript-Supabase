'use client'

// lib
import { useState } from 'react'

const NavBar = (showNavbar: any) => {
  const [openMenu, setOpenMenu] = useState<boolean>(showNavbar)
  return <>{openMenu ? <h1>Hello</h1> : <h1>No Hello</h1>}</>
}

export default NavBar
