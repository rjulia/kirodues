import React, { useState, useEffect } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import './packs.scss'
import { Title, Spinner, Pack } from 'components'
import { getPacks } from '../../services/contenful'

const Packs = ({ i18n }) => {

  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [packs, setPacks] = useState([])
  const promise = getPacks(i18n.language)

  useEffect(() => {
    setLoading(true)
    console.log(promise)
    promise
      .then(data => {
        setPacks(data)
      }).finally(() => {
        setLoading(false)
      })
    return () => {
      promise.cancel()
    }

  }, [])

  if (isLoading) return <Spinner />
  return (
    <div className="packs">
      <div className="packs__titles">
        <Title tag={"h1"} text={t('discount_pack.title')} />
        <Title tag={"h3"} text={t('discount_pack.content')} />

      </div>
      <div className="opion__comments container-fluid">
        <div className="container">
          <div className="row">
            {packs.map(pack => (
              <div key={pack.sys.id} className="col-12 col-md-4">

                <Pack pack={pack} t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default withTranslation()(Packs)
