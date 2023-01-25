import React from 'react'
import { IconWrapper, Image, ImageWrapper, OurProgramsWrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default function OurPrograms({img,time,roomNumber,title,name,description,alt}) {

  return (
    <OurProgramsWrapper>
    <ImageWrapper>
        <Image src={img} alt={alt} />
    </ImageWrapper>
    <div>
        <IconWrapper>
            <div>
    <FontAwesomeIcon size='xs' icon={faClock} /> {time}
            </div>
            <div>
    <FontAwesomeIcon size='xs' icon={faMapMarker} />
    <span>Room</span>
    {roomNumber}
            </div>
        </IconWrapper>
    <h2>{title}</h2>
    <span>{name}</span>
    <p>{ description}</p>
    </div>

    </OurProgramsWrapper>
  )
}
