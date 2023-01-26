import React from 'react';
import { H2, Job, SpeakersWrapper } from './styles';
export default function CreativeSpeakers({img,name,job,alt}) {
  return (
    <SpeakersWrapper>
        <img src={img} alt={alt} width="100%" />
        <H2>{name}</H2>
        <Job>{job}</Job>
        </SpeakersWrapper>
  )
}
