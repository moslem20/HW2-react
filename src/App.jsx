import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCform from './classes/CCform'
import CCinput from './classes/CCinput'
import CCtable from './classes/CCtable'
import CCHome from './classes/CCHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CCHome/>
    </>
  )
}

export default App
