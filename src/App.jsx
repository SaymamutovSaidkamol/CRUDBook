import { useState } from 'react'
import Book from './components/Book/Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Book/>
    </>
  )
}

export default App
