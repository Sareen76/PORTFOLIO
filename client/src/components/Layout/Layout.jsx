import React from 'react'
import Header from '../Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const container = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw'
}

const main = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  padding: '20px',
  columnGap: '20px'
}

const sideTerminal = {
  width: 'calc(100vw - 256px)',
  position: 'relative',
  left: ''
}

function Layout() {
  return (
    <div style={container}>
      <main style={main}>
        <Header />
        <article className='sideTerminal' style={sideTerminal}>
          <Outlet />
          <Footer />
        </article>
      </main>
    </div>
  )
}

export default Layout