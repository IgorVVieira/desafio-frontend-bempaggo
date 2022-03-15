import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  )
}

export default App
