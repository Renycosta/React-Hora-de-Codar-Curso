import './App.css'

// 2 - Importando componete
import FirstComponent from './components/FirstComponent'

// 4 - template expression
import TemplateExpression from './components/TemplateExpression'

// 5 - Hierarquia de componentes
import MyComponent from './components/MyComponent'

// 6 - Eventos

function App() {
  // 3 - Comentários 
  return (
    <div className='App'>
      {/* 3 - Comentários JSX */}
      <h1>Fundamentos</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
