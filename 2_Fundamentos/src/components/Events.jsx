import React from 'react'

function Events() {

    const handleClick = (e) => {
        console.log(e)
        console.log("Executou")
    }

    // 8 - Função de renderização 
    const rendersomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Não renderizado</h1> 
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        {/* 7 - Evento com função */}
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/* 8 - Função com render */}
        {rendersomething(true)}
        {rendersomething(false)}
    </div>
  )
}

export default Events