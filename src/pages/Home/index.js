import React from 'react'
import { HeroImage } from "../../components"
import "./home.scss"
import Welcome from './components/welcome'
import Treatments from './components/treatmenets'
const Home = () => {
  return (
    <div className='container-fluid home'>
      <HeroImage />
      <Welcome />
      <Treatments />
    </div>
  )
}

export default Home
