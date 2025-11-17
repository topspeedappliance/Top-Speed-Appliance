import React from 'react'
export default function Header(){
  return (
    <header style={{padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--white)'}}>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <div style={{width:48,height:48, borderRadius:8, background:'var(--primary-red)'}} />
        <h1 style={{margin:0, color:'var(--black)'}}>Top Speed Appliance</h1>
      </div>
      <nav>
        <a href="/" style={{marginRight:12}}>Home</a>
        <a href="/services" style={{marginRight:12}}>Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}