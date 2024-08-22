import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'

function App() {

  return (
    <div className="App">
      <Header />

      <Outlet />
    </div>
  )
}

export default App
