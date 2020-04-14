import React, { useState, useEffect } from 'react';
import './contact.scss';
import { FormContact, Address, Spinner } from 'components';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { getAddress } from '../../services/contenful';

const Contact = () => {

  const { t, i18n } = useTranslation();
  const [isLoading, setLoading] = useState(true)
  const [address, setAddress] = useState([])

  useEffect(() => {
    const promise = getAddress(i18n.language)
    setLoading(true)
    promise
      .then(data => {
        setAddress(data)
      }).finally(() => {
        setLoading(false)
      })
  }, [i18n])
  if (isLoading) return <Spinner />
  return (
    <div className="contact container">
      <Helmet>
        <title>{t('helmet.contact.title')}</title>
        <meta name="description" content={t('helmet.contact.description')} />
      </Helmet>
      <div className="row">
        <FormContact />
        {
          address && address.map(address => <Address key={address.sys.id} addressData={address} />)
        }

      </div>
    </div>
  )
}

export default Contact
