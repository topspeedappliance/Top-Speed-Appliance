import React from 'react'
import { BuilderComponent } from '@builder.io/react'

export default function BuilderBlock({ content }){
  if(!content) return null
  return <BuilderComponent model="page" content={content} />
}