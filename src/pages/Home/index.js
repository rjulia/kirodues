import React from 'react'
import { HeroImage } from "../../components"
import "./home.scss"
import Welcome from './components/welcome'
import Treatments from './components/treatmenets'
import Option from './components/opinion'
const Home = () => {
  return (
    <div className='container-fluid home'>
      <HeroImage />
      <Welcome />
      <Treatments />
      <Option />
    </div>
  )
}

export default Home
