import React from 'react'
import { Our, OurProgramsWrapper, P, Programs, TabsWrapper } from './styles'
import Tabs from './Tabs'

export default function OurProgramsPage() {
  return (
        <div className='container'>
    <OurProgramsWrapper>
        <div>
          <Our>Our</Our>
          <Programs>Programs</Programs> 
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. </P>
        </div>
        <TabsWrapper>
            <Tabs />
        </TabsWrapper>
        </OurProgramsWrapper>
        </div>
  )
}
