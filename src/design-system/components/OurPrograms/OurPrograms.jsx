import React from 'react'
import { IconWrapper, Image, ImageWrapper, Name, OurProgramsWrapper, P, RoomNumber, Title } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default function OurProgramsComponent({img,time,roomNumber,title,name,description,alt}) {

  return (
    <OurProgramsWrapper>
    <ImageWrapper>
        <Image src={img} alt={alt} />
    </ImageWrapper>
    <div>
        <IconWrapper>
            <div>
    <FontAwesomeIcon size='xs' icon={faClock} /> 
    <span>{time}</span>
            </div>
            <div>
    <FontAwesomeIcon  style={{padding:" 0 0.4rem 0 0.4rem"}}  size='xs' icon={faMapMarker} />
    <span>Room</span>
    <RoomNumber>{roomNumber}</RoomNumber>
            </div>
        </IconWrapper>
    <Title>{title}</Title>
    <Name>{name}</Name>
    <P>{ description}</P>
    </div>

    </OurProgramsWrapper>
  )
}
