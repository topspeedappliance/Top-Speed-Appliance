import React from 'react'
export default function ServiceCard({title, desc}){
  return (
    <div style={{border:'1px solid #ddd', padding:16, borderRadius:8}}>
      <h3 style={{marginTop:0}}>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}