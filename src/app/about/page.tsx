import Link from 'next/link'
import React from 'react'
import HeaderPage from '../components/header/page'
import HeroSection from '../hero/page'
import FooterPage from '../footer/page'

const AboutPage = () => {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <h1 className='bg-black font-semibold text-white '>About Us</h1>
      <p className='bg-emerald-200 font-medium font-serif text-amber-700'>We are a passionate Resin Artist with having years of experience for making memorable and percious products for our valueable clients.</p>
      <ul>
      <li><Link href="/">Go to Home Page</Link> </li>
        <li><Link href="/contact">Go to Contact Page</Link></li>
        <li><Link href="/services">Go to Services Page</Link></li>
        </ul>
        <HeroSection/>
        <FooterPage></FooterPage>
    </div>
  )
}

export default AboutPage
