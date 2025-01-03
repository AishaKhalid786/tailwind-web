import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='home'>
        <nav>
      <ol style={{display:"flex", gap:"1rem"}} className='bg-black text-white'>
      <li><Link href="/">Home</Link> </li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/services">Services</Link></li>

      </ol>
      </nav>
    </div>
  )
}

export default NavBar
