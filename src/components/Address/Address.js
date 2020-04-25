import React from 'react';
import './Address.scss';
import { useMediaQuery } from 'react-responsive';
import { Title } from 'components';
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/receiver.svg";

const Address = ({ addressData }) => {

  const { address, city, name, map, phones, email } = addressData.fields
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const sizeIcon = isTabletOrMobileDevice ? '25' : '30';
  return (
    <>
      <div className="col-12 col-md-6 address__text">
        <Title tag={"h2"} text={`Kirodues - ${city}`} />
        <Title tag={"h3"} text={"Centro de Narutopatia"} />
        <div className="contact__box-icons">
          <PhoneIcon width={sizeIcon} height={sizeIcon} />
          <div className="contact__box-icons--text">
            {
              phones.map(phone => (<p key={phone}>{phone}</p>))
            }
          </div>
        </div>
        <div className="contact__box-icons">
          <LocationIcon width={sizeIcon} height={sizeIcon} />
          <div className="contact__box-icons--text">
            <p>{name}</p>
            <p>{address}</p>
            <p>{city}</p>
          </div>
        </div>
        <div className="contact__box-icons email">
          <EmailIcon width={sizeIcon} height={sizeIcon} />
          <div className="contact__box-icons--text">
            <p><a href="mailto:info@kirodues.com">{email}</a></p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="contact__map" dangerouslySetInnerHTML={{ __html: map }} />
      </div>
    </>
  )
}


export default Address
