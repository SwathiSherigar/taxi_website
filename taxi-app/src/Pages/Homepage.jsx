import React from 'react'
import HeroTaxi from '../Components/Hero.'
import AboutPage from './AboutPage'
import ServicePage from './ServicesPage'
import ContactusPage from '../Components/ContactusPage'

export default function Homepage() {
  return (
    <div>
    <HeroTaxi/>
    <AboutPage />
    <ServicePage/>
    <ContactusPage/>
    </div>
  )
}
