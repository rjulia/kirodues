import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { HeroImage, Spinner } from "../../components"
import "./home.scss"
import Welcome from './components/welcome'
import Treatments from './components/treatmenets'
import Option from './components/opinion'
import { Helmet } from 'react-helmet';
import { getHomeHero } from '../../services/contenful'
const Home = () => {

  const { t, i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [homeHero, setHomeHero] = useState([])
  const promise = getHomeHero(i18n.language)

  useEffect(() => {
    setLoading(true)
    promise
      .then(data => {
        setHomeHero(data[0])
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  if (isLoading) return <Spinner />

  return (
    <div className='container-fluid home'>
      <Helmet>
        <title>Kirodues - Home</title>
        <meta name="description" content="EL mejor tratamiento para tu espalda" />
      </Helmet>
      <HeroImage
        link={_.get(homeHero, 'fields.link')}
        textLink={_.get(homeHero, 'fields.textLink')}
        imgUrl={_.get(homeHero, 'fields.image.fields.file.url')}
        text={_.get(homeHero, 'fields.title')} />
      <Welcome />
      <Treatments />
      <Option />
    </div>
  )
}

export default Home
