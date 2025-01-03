
import React from 'react'
import HeaderPage from './components/header/page'
import HeroSection from './hero/page'
import FooterPage from './footer/page'
import Links from './components/links'

const HomePage = () => {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <Links/>
      <HeroSection></HeroSection>
  
      <h1 className='bg-pink-500 text-center font-100% text-lg'>Welcome to our Home Page.</h1>
      <FooterPage></FooterPage>

    </div>
  )
}

export default HomePage
