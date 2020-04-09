import React from 'react'
import { HeroImage } from "../../components"
import "./home.scss"
import Welcome from './components/welcome'
const Home = () => {
  return (
    <div className='container-fluid home'>
      <HeroImage />
      <Welcome />
    </div>
  )
}

export default Home
