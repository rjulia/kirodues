import React from 'react'
import { HeroImage } from "../../components"
import "./home.scss"
import Welcome from './components/welcome'
import Treatments from './components/treatmenets'
import Option from './components/opinion'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className='container-fluid home'>
      <Helmet>
        <title>Kirodues - Home</title>
        <meta name="description" content="EL mejor tratamiento para tu espalda" />
      </Helmet>
      <HeroImage />
      <Welcome />
      <Treatments />
      <Option />
    </div>
  )
}

export default Home
