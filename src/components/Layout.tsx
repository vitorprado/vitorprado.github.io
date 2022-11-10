import React from 'react'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  )
}