import React from 'react'

import Navbar from './Navbar.styled'

export default function NavBar() {
  return (
    <Navbar>
      <h2>Worldpedia</h2>
      <span><button className="light-theme">Switch Theme</button></span>
    </Navbar>
  )
}
