import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'

export default function Services(){
  return (
    <>
      <Header />
      <main style={{padding:24}}>
        <h2>Services</h2>
        <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))'}}>
          <ServiceCard title="Refrigerator Repair" desc="Fast same-day repair for fridges." />
          <ServiceCard title="Washer & Dryer" desc="We fix common washer and dryer problems." />
          <ServiceCard title="Oven & Stove" desc="Range and oven diagnostics and fixes." />
        </div>
      </main>
      <Footer />
    </>
  )
}