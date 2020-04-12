import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './treatments.scss';
import { Spinner, BlockTitle, BoxImage } from 'components'
import { getTreatments } from '../../services/contenful'

const Treatments = () => {

  const { t, i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [treatments, setTreatments] = useState([])
  const promise = getTreatments(i18n.language)

  useEffect(() => {
    setLoading(true)

    promise
      .then(data => {
        setTreatments(data)
      }).finally(() => {
        setLoading(false)
      })


  }, [])

  if (isLoading) return <Spinner />
  return (
    <div className="treatments">
      <BlockTitle title={t('discount_pack.title')} subtitle={t('discount_pack.content')} />
      <div className="container">
        <div className="treatments__grid">
          {
            treatments.map(treatment => (
              <BoxImage
                key={treatment.sys.id}
                title={_.get(treatment, 'fields.sortTreatment')}
                slug={`tratamientos/${_.get(treatment, 'fields.slug')}`}
                thumbnail={_.get(treatment, 'fields.thumbnail.fields')}
              />))
          }
        </div>
      </div>
    </div>
  )
}

export default Treatments
