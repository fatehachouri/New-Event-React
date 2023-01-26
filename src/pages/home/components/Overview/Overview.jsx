import React from 'react'
import { OverViewContainer, OverviewWrap } from './styles'
import OverviewData from '../../../../design-system/components/Overview/Data'
import OverviewComponent from '../../../../design-system/components/Overview/Overview'
 
export default function Overview() {
  return (
    <OverviewWrap>
        <div className='container'>
            <OverViewContainer>

            {OverviewData.map(item=>{
                return <OverviewComponent key={item.id} {...item} />
            })}
            </OverViewContainer>
        </div>
    </OverviewWrap>
  )
}
