import React from 'react'
import "./BlockTitle.scss";
import { Title } from "../index";
const BlockTitle = ({ subtitle, title }) => {
  return (
    <div className="block__titles">
      <Title tag={"h1"} text={title} />
      {subtitle && <Title tag={"h3"} text={subtitle} />}

    </div>
  )
}

export default BlockTitle
