import { useState } from 'react'
import About from './assets/components/about/about'
import Text from './assets/components/texts/text'
import Table from './assets/components/tables/table'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <About/>
      <div className='section'>
        
        <Table/>
        <Text/>
        </div>
      
    </div>
  )
}

export default App
