import { useState } from 'react'
import './App.css'

// 2 - Imagem em assets
import night from "./assets/night.jpg"

// 3 - UseState
import Data from './components/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - Imagem em public */}
        <img src="/img.jpg" alt="" />
        {/* 2 - Imagem em assets */}
        <img src={night} alt="" />
        {/* 3 - useState */}
        <Data />
      </div>
    </>
  )
}

export default App
