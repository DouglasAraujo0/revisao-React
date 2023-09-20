import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Carros from './components/Carros'
import Parcas from './components/Parcas'


function App() {

  const modelos = ["Lamborguini","Mustang","BMW","Ford","Ferrari",]

  return (
    <>
      <Header/>
      <Carros modelos = {modelos}/>
      <Parcas/>
      
    </>
  )
}

export default App
