import { useState } from 'react'
import './App.css'

// 2 - Imagem em assets
import night from "./assets/night.jpg"

// 3 - UseState
import Data from './components/Data'

// 4 - Render de lista
import ListRender from './components/ListRender'

// 7 - Render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - Props
import ShowUsername from './components/ShowUsername'

// 9 - Desestruturando props
import CarDetails from './components/CarDetails'

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

        {/* 4 - Render de lista */}
        <ListRender />

        {/* 7 - Render condicional */}
        <ConditionalRender/>

        {/* 8 - Props */}
        <ShowUsername name="Matheus"/>

        {/* 9 - Desestruturando props */}
        <CarDetails brand="VW" km={999} color="Vermelho"/>
      </div>
    </>
  )
}

export default App
