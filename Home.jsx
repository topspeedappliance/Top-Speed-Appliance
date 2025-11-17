import React, {useEffect, useState} from 'react'
import BuilderBlock from '../components/BuilderBlock'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { builder } from '@builder.io/react'

export default function Home(){
  const [content, setContent] = useState(null)

  useEffect(() => {
    builder.get('page', { url: '/' }).then(setContent).catch(() => {})
  }, [])

  return (
    <>
      <Header />
      <main style={{padding:24}}>
        {content ? <BuilderBlock content={content} /> : (
          <section>
            <h2>Welcome to Top Speed Appliance</h2>
            <p>This is a placeholder home page. Connect Builder.io and replace this content with your Builder page.</p>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}