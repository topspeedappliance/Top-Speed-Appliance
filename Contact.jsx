import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <>
      <Header />
      <main style={{padding:24}}>
        <h2>Contact</h2>
        <p>Call us: (555) 555-5555</p>
        <p>Email: repair@topspeedappliance.com</p>
      </main>
      <Footer />
    </>
  )
}