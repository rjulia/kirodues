import React from 'react'
import './Pack.scss'
import { Title } from 'components'

const Pack = ({ pack, t }) => {
  const { fields } = pack
  return (
    <div className="pack">
      <Title tag={"h4"} text={fields.nameDiscount} />
      <ul>
        {
          fields.listTreatment.map(item => <li key={item}>{item}</li>)
        }
      </ul>
      <div>
        <p className="pack__price">{fields.priceDiscountPack} € </p>
      </div>
      <div>
        <p>{t('discount_pack.price', { value: fields.priceWithoutDiscount })}</p>
      </div>
    </div>
  )
}

export default Pack
