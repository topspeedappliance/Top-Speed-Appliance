import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFound(){
  return (
    <>
      <Header />
      <main style={{padding:24}}>
        <h2>Page not found</h2>
      </main>
      <Footer />
    </>
  )
}