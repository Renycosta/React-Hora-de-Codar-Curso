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

// 11 - Renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  { id: 2, brand: "KIA", color: "Branco", km: 2000000},
  { id: 3, brand: "Renault", color: "Azul", km: 32000},
]

// 12 - fragments
import Fragment from './components/Fragment'

// 13 - children
import Container from './components/Container'

// 14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction'

// 15 - State lift
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {
  const [count, setCount] = useState(0)

  // 14 - Função em prop
  function showMessage() {
    console.log("Evento do componente pai")
  }

  // 15 - State lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

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

        {/* 10 - Reaproveitando componentes */}
        <CarDetails brand="VW" km={12333} color="branco"/>
        <CarDetails km={999432} color="Azul" brand="Audi"/>

        {/* 11 - Renderização de lista com componente */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))}

        {/* 12 - fragments */}
        <Fragment />

        {/* 13 - children */}
        <Container>
          <p>Alguma coisa</p>
        </Container>
        <Container>
          <h2>Teste</h2>
          <p>Meu container</p>
        </Container>

        {/* 14 - Função em prop */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* 15 - state lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
