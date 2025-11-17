import React from 'react'
export default function Footer(){
  return (
    <footer style={{padding:20, textAlign:'center', borderTop:'1px solid #eee'}}>
      © {new Date().getFullYear()} Top Speed Appliance — Fast appliance repair
    </footer>
  )
}