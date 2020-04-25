import React from 'react'
import styled from 'styled-components'


const Content = styled.div`
    background-image: url(${props => props.img});
    width: 100%;
    height: ${props => props.height}px;
    background-repeat: no-repeat;
    background-clip: border-box;
    background-position: center;
    background-size: cover;
    background-color: white;

`;

const WrapperImage = styled.div`
    box-sizing: border-box;
    background-color: white;
    overflow: hidden;
    padding: 10px
`;

const FrameImage = ({ img, height, classN }) => {
  return (
    <WrapperImage className={classN}>
      <Content img={img} height={height} />
    </WrapperImage>
  )
}

export default FrameImage
