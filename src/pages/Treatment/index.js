import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './treatment.scss';
import { useParams } from "react-router-dom";
import { Spinner, HeroImage, Title } from 'components'
import { getTreatment } from '../../services/contenful'

const Treatment = () => {
  let { slug } = useParams();
  console.log(slug)
  const { t, i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [treatment, setTreatment] = useState([])
  const promise = getTreatment(i18n.language, slug)

  useEffect(() => {
    setLoading(true)

    promise
      .then(data => {
        setTreatment(data[0])
      }).finally(() => {
        setLoading(false)
      })


  }, [])

  if (isLoading) return <Spinner />
  console.log(treatment)
  return (
    <div className="treatment">
      <div className="container">
        <div className="treatment__image">
          <img
            src={_.get(treatment, 'fields.imageTreatment.fields.file.url')}
            alt={_.get(treatment, 'fields.imageTreatment.fields.file.title')} />
        </div>
        <div className="treatment__content">
          <Title tag={'h1'} text={_.get(treatment, 'fields.nameTreatment')} />
          {
            treatment.fields.contentTreatment.content.map((paragraph, idx) => (

              <p key={idx} className="treatment__text">{paragraph.content[0].value}</p>
            ))
          }
          {
            treatment.fields.priceTreatment && <p>
              {t('treatment.price', { value: _.get(treatment, "fields.priceTreatment") })}
            </p>
          }
          {
            treatment.fields.listaPrecios &&
            <div className="treatment__price">
              <Title tag={'h5'} text={'Precio/Sesion'} />
              <ul>
                <li>hello</li>
              </ul>
            </div>
          }
        </div>
      </div>
      <HeroImage
        middle
        link={'/packs'}
        textLink={t('treatment.button')}
        imgUrl={require('assets/images/flowers_about_thf5Q6JbRGybEhJwfnXy-1600x936.jpg')}
        text={t('treatment.title')} />
    </div>
  )
}

export default Treatment
