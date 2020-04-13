import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import { getReviews } from '../../services/contenful'
import AboutImg from "../../assets/images/yasmina-pacheco.jpeg";
import './aboutus.scss'
import { Title, Spinner, Review } from 'components';
import { Helmet } from 'react-helmet';

const AboutUs = ({ i18n }) => {

  const { t } = useTranslation();
  const [reviews, setReviews] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const promise = getReviews(i18n.language)
    setLoading(true)
    promise
      .then(data => {
        setReviews(data)
      }).finally(() => {
        setLoading(false)
      })

  }, [i18n])

  if (isLoading) return <Spinner />
  return (
    <div className="about">
      <Helmet>
        <title>Kirodues - Quienes somos</title>
        <meta name="description" content="EL mejor tratamiento para tu espalda" />
      </Helmet>
      <div className="container">
        <div className="row about__content">
          <div className="col-12 col-md-8">
            <Title tag="h2" text={t('about.title')} />
            <p dangerouslySetInnerHTML={{ __html: t('about.text') }} />
          </div>
          <div className="col-12 col-md-4">
            <img src={AboutImg} alt="nuestro equipo" />
          </div>
        </div>
      </div>

      <div className="about__title-reviews">
        <Title tag={'h3'} text={t('about.opinion')} />
      </div>
      <div className="about_content-reviews container">
        {reviews.map(review => (
          <div key={review.sys.id} className="col-12 col-md-3">

            <Review
              link={_.get(review, 'fields.urlMedia')}
              imgData={_.get(review, 'fields.logoMedia.fields')}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default withTranslation()(AboutUs)
