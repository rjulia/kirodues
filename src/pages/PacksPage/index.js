import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './packs.scss'
import { Spinner, Pack, BlockTitle } from '../../components'
import { getPacks } from '../../services/contenful'

const PacksPage = () => {

  const { t, i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [packs, setPacks] = useState([])

  useEffect(() => {
    const promise = getPacks(i18n.language)
    setLoading(true)
    promise
      .then(data => {
        setPacks(data)
      }).finally(() => {
        setLoading(false)
      })
  }, [i18n])

  if (isLoading) return <Spinner />
  return (
    <div className="packs">
      <BlockTitle title={t('discount_pack.title')} subtitle={t('discount_pack.content')} />
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

export default PacksPage
