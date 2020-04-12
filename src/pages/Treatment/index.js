import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './treatment.scss';
import { useParams } from "react-router-dom";
import { Spinner, HeroImage, Title } from 'components'
import { getTreatment } from '../../services/contenful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
  const { imageTreatment, nameTreatment, contentTreatment, priceTreatment, listaPrecios } = treatment.fields
  return (
    <div className="treatment">
      <div className="container">
        <div className="treatment__image">
          <img
            src={_.get(imageTreatment, 'fields.file.url')}
            alt={_.get(imageTreatment, 'fields.file.title')} />
        </div>
        <div className="treatment__content">
          <Title tag={'h1'} text={nameTreatment} />
          <p className="treatment__text">{documentToReactComponents(contentTreatment)}</p>
          {
            priceTreatment && <p>
              {t('treatment.price', { value: priceTreatment })}
            </p>
          }
          {
            listaPrecios &&
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
