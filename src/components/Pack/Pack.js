import React from 'react';
import './Pack.scss';
import { Title } from 'components';
import PropTypes from 'prop-types';


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

Pack.prototype = {
  pack: PropTypes.object,
  t: PropTypes.func
}

export default Pack
