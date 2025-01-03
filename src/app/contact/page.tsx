import Link from 'next/link'
import React from 'react'
import HeaderPage from '../components/header/page'
import HeroSection from '../hero/page'
import FooterPage from '../footer/page'

const ContactPage = () => {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <h1>This is our Contact page.</h1>
      <p>You can contact us ny our email id's and social media accouts.</p>

      <ul>
       <li><Link href="/">Go to Home Page</Link></li>
       <li><Link href="/contact">Go to About Page</Link></li>
       <li><Link href="/services">Go to Services Page</Link></li>

     </ul>
     <HeroSection/>
     <FooterPage></FooterPage>
    </div>
  )
}

export default ContactPage
